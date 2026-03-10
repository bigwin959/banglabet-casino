"use client";

import { Shield, Users, Award, Headphones, Zap, Globe, Gift } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cms, AboutPageData } from "@/lib/cms";
import Link from "next/link";

export default function AboutPage() {
    const [data, setData] = useState<AboutPageData | null>(null);

    useEffect(() => {
        setData(cms.aboutPage.get());
    }, []);

    const iconMap: { [key: string]: any } = {
        Shield, Users, Award, Headphones, Zap, Globe, Gift
    };

    if (!data) return null;

    // Fallback for transition period if data keys are missing
    const heroImage = data.heroImage || "https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000514/Security-Technology.png";
    const securedByText = data.securedByText || "Secured BY<br />959 SHIELD";
    const whyChooseUs = data.whyChooseUs || data.features || [];
    const communityCta = data.communityCta || {
        title: "Join Our Community Today",
        description: "Experience the difference with BigWin959. Sign up now and claim your welcome bonus.",
        buttonText: "Get Started",
        buttonLink: "/signup"
    };

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background z-0"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-heading mb-6 neon-glow leading-tight" dangerouslySetInnerHTML={{ __html: data.heroTitle }}>
                        </h1>
                        <p className="text-xl text-text/80 mb-8">
                            {data.heroSubtitle}
                        </p>
                        <div className="flex space-x-4">
                            {data.stats.map((stat, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="text-center px-4">
                                        <div className="text-3xl font-heading text-primary">{stat.value}</div>
                                        <div className="text-sm text-text/60">{stat.label}</div>
                                    </div>
                                    {i < data.stats.length - 1 && <div className="w-px h-12 bg-text/20"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface shadow-2xl flex items-center justify-center group">
                            <Image
                                src={heroImage}
                                alt="About Us Hero"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#111] border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl group hover:border-primary/50 transition-colors z-20">
                            <Shield className="text-primary mb-2 group-hover:scale-110 transition-transform" size={32} />
                            <span
                                className="text-[10px] font-black uppercase tracking-widest text-center text-gray-500"
                                dangerouslySetInnerHTML={{ __html: securedByText }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 px-4 bg-background/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-heading text-center mb-8 text-primary">
                        {data.missionTitle}
                    </h2>
                    <p className="text-xl text-text/80 leading-relaxed">
                        {data.missionText}
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-16 text-primary neon-glow">
                        Why Choose BigWin959
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((feature: any, index: number) => {
                            const IconComponent = iconMap[feature.icon] || Shield;
                            return (
                                <div key={index} className="card text-center hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="text-xl font-heading mb-4 text-white">{feature.title}</h3>
                                    <p className="text-text/70 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-cta/20 crt-scanlines">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-heading mb-6 text-white">
                        {communityCta.title}
                    </h2>
                    <p className="text-lg text-text/80 mb-8">
                        {communityCta.description}
                    </p>
                    <Link href={communityCta.buttonLink}>
                        <button className="btn-primary neon-glow-cta px-8 py-3">
                            {communityCta.buttonText}
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
