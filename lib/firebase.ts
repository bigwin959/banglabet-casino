import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Prevent re-initializing the Firebase app on hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Use experimentalForceLongPolling so Firestore works properly inside
// Next.js API routes (Node.js server) without WebSocket 504 timeouts.
// On first call we use initializeFirestore; on subsequent hot reloads
// getFirestore() returns the already-configured instance.
let db: ReturnType<typeof getFirestore>;
try {
    db = initializeFirestore(app, { experimentalForceLongPolling: true });
} catch {
    // Already initialised (hot reload) – just grab the existing instance
    db = getFirestore(app);
}

export { db };
export default app;
