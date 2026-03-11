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
    description?: string;
    buttonText?: string;
    imageOnly?: boolean;
}

interface BannerSliderProps {
    banners: Banner[];
}

const BannerSlider = ({ banners }: BannerSliderProps) => {

    return (
        <div className="w-full max-w-7xl mx-auto mb-16 relative group px-4 md:px-8">
            <style jsx global>{`
                .banner-swiper .swiper-pagination-bullet {
                    background: rgba(255,255,255,0.3);
                    opacity: 1;
                    width: 40px;
                    height: 4px;
                    border-radius: 2px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .banner-swiper .swiper-pagination-bullet-active {
                    background: #ffe491;
                    width: 60px;
                    box-shadow: 0 0 15px rgba(255, 228, 145, 0.6);
                }
                .banner-swiper .swiper-button-next,
                .banner-swiper .swiper-button-prev {
                    color: #fff !important;
                    background: rgba(0,0,0,0.3);
                    backdrop-filter: blur(8px);
                    width: 50px !important;
                    height: 50px !important;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.1);
                    opacity: 0;
                    transition: all 0.3s;
                }
                .group:hover .banner-swiper .swiper-button-next,
                .group:hover .banner-swiper .swiper-button-prev {
                    opacity: 1;
                }
                .banner-swiper .swiper-button-next:after,
                .banner-swiper .swiper-button-prev:after {
                    font-size: 20px !important;
                    font-weight: bold;
                }
                .banner-swiper .swiper-button-next:hover,
                .banner-swiper .swiper-button-prev:hover {
                    background: #ffe491;
                    border-color: #ffe491;
                    color: #000 !important;
                }
            `}</style>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="banner-swiper rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] h-[300px] md:h-[550px] border border-white/5"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="relative w-full h-full">
                        <div className="w-full h-full relative">
                            <Image
                                src={banner.image}
                                alt={banner.title}
                                fill
                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                priority
                                quality={100}
                                sizes="100vw"
                            />

                            {/* Premium Gradation - Only if not image only */}
                            {!banner.imageOnly && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                                    {/* Animated Content */}
                                    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 max-w-4xl">
                                        <div className="overflow-hidden mb-2">
                                            <span className="block text-primary font-black uppercase tracking-[0.4em] text-xs md:text-sm animate-in slide-in-from-bottom duration-700">
                                                Ultimate Gaming Experience
                                            </span>
                                        </div>
                                        <h2 className="text-4xl md:text-7xl font-bold text-white uppercase font-heading tracking-tighter leading-none mb-8 animate-in fade-in slide-in-from-left duration-1000">
                                            {banner.title.split(' ').map((word, i) => (
                                                <span key={i} className={i % 2 === 1 ? "text-primary" : ""}>
                                                    {word}{' '}
                                                </span>
                                            ))}
                                        </h2>
                                        {banner.description && (
                                            <p className="text-gray-300 text-sm md:text-lg font-medium mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                                                {banner.description}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                                            <Link href={banner.link || "https://www.bigwin959.com/register"} target={banner.link?.startsWith("http") ? "_blank" : "_self"} className="btn-primary flex items-center !px-10">
                                                {banner.buttonText || "Join Now & Get Bonus"}
                                            </Link>
                                            <Link href="/promotions" className="btn-outline !bg-white/10 backdrop-blur-md">
                                                View Offers
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default BannerSlider;
