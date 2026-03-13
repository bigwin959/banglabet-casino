/**
 * lib/firestore-rest.ts
 *
 * Thin Firestore REST API client — works in every serverless environment
 * (Netlify, Vercel, Edge) without any SDK timeout issues.
 *
 * Uses: https://firestore.googleapis.com/v1/projects/{id}/databases/(default)/documents
 */

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY!;
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

// ─── Firestore value encoding/decoding ────────────────────────────────────────

function encodeValue(val: unknown): Record<string, unknown> {
    if (val === null || val === undefined) return { nullValue: null };
    if (typeof val === "boolean") return { booleanValue: val };
    if (typeof val === "number") return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
    if (typeof val === "string") return { stringValue: val };
    if (Array.isArray(val)) return { arrayValue: { values: val.map(encodeValue) } };
    if (typeof val === "object") return { mapValue: { fields: encodeFields(val as Record<string, unknown>) } };
    return { stringValue: String(val) };
}

function encodeFields(obj: Record<string, unknown>) {
    const fields: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
        if (v !== undefined) fields[k] = encodeValue(v);
    }
    return fields;
}

function decodeValue(val: Record<string, unknown>): unknown {
    if ("nullValue" in val) return null;
    if ("booleanValue" in val) return val.booleanValue;
    if ("integerValue" in val) return Number(val.integerValue);
    if ("doubleValue" in val) return val.doubleValue;
    if ("stringValue" in val) return val.stringValue;
    if ("arrayValue" in val) {
        const arr = (val.arrayValue as any)?.values ?? [];
        return arr.map(decodeValue);
    }
    if ("mapValue" in val) {
        return decodeFields((val.mapValue as any)?.fields ?? {});
    }
    return null;
}

function decodeFields(fields: Record<string, unknown>): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(fields)) {
        out[k] = decodeValue(v as Record<string, unknown>);
    }
    return out;
}

function docToObject(doc: any) {
    const id = doc.name?.split("/").pop() ?? "";
    return { id, ...decodeFields(doc.fields ?? {}) };
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Get all documents in a collection */
export async function listDocs(collection: string): Promise<any[]> {
    const url = `${BASE}/${collection}?key=${API_KEY}&pageSize=100`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    return (json.documents ?? []).map(docToObject);
}

/** Get a single document */
export async function getDoc(collection: string, docId: string): Promise<any | null> {
    const url = `${BASE}/${collection}/${docId}?key=${API_KEY}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return docToObject(json);
}

/** Get a single document from the cms collection */
export async function getCmsDoc(section: string): Promise<any | null> {
    return getDoc("cms", section);
}

/** Set / overwrite a document */
export async function setDoc(collection: string, docId: string, data: Record<string, unknown>): Promise<void> {
    const { id: _id, ...rest } = data;
    const url = `${BASE}/${collection}/${docId}?key=${API_KEY}`;
    await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: encodeFields(rest) }),
    });
}

/** Set a CMS section document */
export async function setCmsDoc(section: string, data: Record<string, unknown>): Promise<void> {
    await setDoc("cms", section, data);
}

/** Add a new document (auto-ID) */
export async function addDoc(collection: string, data: Record<string, unknown>): Promise<string> {
    const { id: _id, ...rest } = data;
    const url = `${BASE}/${collection}?key=${API_KEY}`;
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: encodeFields(rest) }),
    });
    const json = await res.json();
    return json.name?.split("/").pop() ?? "";
}

/** Delete a document */
export async function deleteDoc(collection: string, docId: string): Promise<void> {
    const url = `${BASE}/${collection}/${docId}?key=${API_KEY}`;
    await fetch(url, { method: "DELETE" });
}
