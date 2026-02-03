"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Banner {
    id: string;
    image: string;
    title: string;
    link: string;
}

interface BannerSliderProps {
    banners: Banner[];
}

const BannerSlider = ({ banners }: BannerSliderProps) => {
    return (
        <div className="w-full max-w-[1080px] mx-auto mb-8 relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="rounded-lg overflow-hidden shadow-lg h-[200px] md:h-[400px]"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="relative w-full h-full">
                        <Link href={banner.link} className="block w-full h-full relative">
                            {/* 
                     For simplicity and safety, I'll use a placeholder colored background or text if image fails. 
                     In a real scenario, we'd use the actual image URLs. 
                     The reference script fetched images dynamically. 
                     Here we will use the 'banner.image' passed from props.
                 */}
                            <div className="w-full h-full relative">
                                <Image
                                    src={banner.image}
                                    alt={banner.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 1080px"
                                />
                                {/* Overlay for text legibility if needed, keeping it minimal for now */}
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
                                        {banner.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
