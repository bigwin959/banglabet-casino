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
        <div className="w-full max-w-[1080px] mx-auto mb-12 relative group">
            <style jsx global>{`
                .banner-swiper .swiper-pagination-bullet {
                    background: #fff;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s;
                }
                .banner-swiper .swiper-pagination-bullet-active {
                    background: #dc2626;
                    opacity: 1;
                    width: 30px;
                    border-radius: 5px;
                }
                .banner-swiper .swiper-button-next,
                .banner-swiper .swiper-button-prev {
                    color: #dc2626 !important;
                    background: transparent;
                }
                .banner-swiper .swiper-button-next:after,
                .banner-swiper .swiper-button-prev:after {
                    font-size: 32px !important;
                    font-weight: bold;
                    text-shadow: 0 0 10px rgba(0,0,0,0.5);
                }
            `}</style>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="banner-swiper rounded-xl overflow-hidden shadow-2xl h-[250px] md:h-[450px] border border-white/10"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="relative w-full h-full">
                        <Link href={banner.link} className="block w-full h-full relative">
                            <div className="w-full h-full relative">
                                <Image
                                    src={banner.image}
                                    alt={banner.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, 1200px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
