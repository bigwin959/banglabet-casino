"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
    id: string;
    type: ToastType;
    message: string;
    duration?: number;
}

interface ToastContextType {
    toast: (message: string, type?: ToastType, duration?: number) => void;
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const addToast = useCallback((message: string, type: ToastType = "info", duration = 4000) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, type, message, duration }]);

        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
    }, [removeToast]);

    const success = (message: string, duration?: number) => addToast(message, "success", duration);
    const error = (message: string, duration?: number) => addToast(message, "error", duration);
    const warning = (message: string, duration?: number) => addToast(message, "warning", duration);
    const info = (message: string, duration?: number) => addToast(message, "info", duration);

    return (
        <ToastContext.Provider value={{ toast: addToast, success, error, warning, info }}>
            {children}
            <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onClose }: { toast: Toast; onClose: () => void }) => {
    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-400" />,
        error: <AlertCircle className="w-5 h-5 text-red-400" />,
        warning: <AlertTriangle className="w-5 h-5 text-yellow-400" />,
        info: <Info className="w-5 h-5 text-blue-400" />,
    };

    const borderColors = {
        success: "border-green-500/20",
        error: "border-red-500/20",
        warning: "border-yellow-500/20",
        info: "border-blue-500/20",
    };

    const bgColors = {
        success: "bg-green-500/5",
        error: "bg-red-500/5",
        warning: "bg-yellow-500/5",
        info: "bg-blue-500/5",
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            layout
            className={cn(
                "pointer-events-auto w-full max-w-sm flex items-start gap-4 p-4 rounded-xl border backdrop-blur-xl shadow-2xl shadow-black/50 select-none",
                "bg-[#0a0a0a]/90 text-white",
                borderColors[toast.type],
                bgColors[toast.type]
            )}
        >
            <div className="mt-0.5 shrink-0">{icons[toast.type]}</div>
            <div className="flex-1 text-sm font-medium leading-relaxed pt-0.5">{toast.message}</div>
            <button
                onClick={onClose}
                className="shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors -mr-1 -mt-1 text-white/40 hover:text-white"
            >
                <X size={16} />
            </button>
        </motion.div>
    );
};
