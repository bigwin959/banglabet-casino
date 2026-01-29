"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState<"en" | "bn">("en");

    const languages = [
        { code: "en", name: "English", flag: "🇬🇧" },
        { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    ];

    const handleLanguageChange = (code: "en" | "bn") => {
        setLanguage(code);
        setIsOpen(false);
        // Store in localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem("language", code);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-primary/20 
                   hover:border-primary/40 transition-colors duration-200 bg-background/50"
            >
                <span className="text-lg">
                    {languages.find((lang) => lang.code === language)?.flag}
                </span>
                <span className="text-sm font-medium text-text">
                    {language.toUpperCase()}
                </span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-background/95 backdrop-blur-md 
                        border border-primary/20 rounded-lg shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code as "en" | "bn")}
                            className={`w-full flex items-center space-x-3 px-4 py-3 
                         hover:bg-primary/10 transition-colors duration-200
                         ${language === lang.code ? "bg-primary/20" : ""}`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-sm font-medium text-text">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
