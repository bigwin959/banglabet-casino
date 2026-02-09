"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogAdminRedirect() {
    const router = useRouter();
    
    useEffect(() => {
        router.replace("/admin");
    }, [router]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-primary font-black uppercase tracking-[0.5em] animate-pulse">
                Redirecting to Global Command Center...
            </div>
        </div>
    );
}


