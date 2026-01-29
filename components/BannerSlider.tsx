"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Banner } from "@/lib/data";

interface BannerSliderProps {
    banners: Banner[];
}

const BannerSlider = ({ banners }: BannerSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % banners.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused, banners.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl crt-scanlines"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Banner Container */}
            <div className="relative aspect-[760/325] bg-background/50">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Link href={banner.link} className="block w-full h-full">
                            <div className="relative w-full h-full bg-gradient-to-r from-primary/20 to-cta/20">
                                {/* Placeholder for banner image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center space-y-4 p-8">
                                        <h2 className="text-4xl md:text-5xl font-heading neon-glow">
                                            {banner.title}
                                        </h2>
                                        <p className="text-lg md:text-xl text-text/80">
                                            {banner.description}
                                        </p>
                                        <button className="btn-primary neon-glow-cta mt-4">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm 
                   p-2 rounded-full hover:bg-primary/20 transition-colors duration-200 cursor-pointer"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} className="text-text" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm 
                   p-2 rounded-full hover:bg-primary/20 transition-colors duration-200 cursor-pointer"
                aria-label="Next slide"
            >
                <ChevronRight size={24} className="text-text" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${index === currentIndex
                                ? "bg-primary w-8"
                                : "bg-text/30 hover:bg-text/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
