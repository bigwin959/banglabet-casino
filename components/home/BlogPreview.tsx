"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { cms, HomeBlogSettings } from "@/lib/cms";

interface BlogPreviewProps {
    settings?: HomeBlogSettings;
}

export default function BlogPreview({ settings }: BlogPreviewProps) {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        cms.blogPosts.get().then((allPosts) => {
            if (allPosts && allPosts.length > 0) {
                // Apply filtering based on settings
                if (settings?.filterType === "trending") {
                    // Random shuffle for "trending" simulation
                    allPosts = [...allPosts].sort(() => 0.5 - Math.random());
                } else if (settings?.filterType === "hottest") {
                    // Assume logic for "hottest" or just reverse
                    allPosts = [...allPosts].reverse();
                }
                // "latest" is default (assuming saved in order)

                setPosts(allPosts.slice(0, 3));
            }
        });
    }, [settings]);

    if (posts.length === 0) return null;

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="w-10 h-0.5 bg-primary" />
                            <span className="text-primary font-black uppercase tracking-[.4em] text-xs">Inside BigWin959</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase font-heading tracking-tighter leading-none">
                            {settings?.title ? (
                                <span className="text-primary italic">{settings.title}</span>
                            ) : (
                                <>Latest from <span className="text-primary italic">Our Blog</span></>
                            )}
                        </h2>
                    </div>
                    <Link href="/blog" className="btn-outline flex items-center group">
                        Explore All Stories
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <Link
                            href={`/blog/${post.id}`}
                            key={post.id}
                            className="group flex flex-col bg-surface/50 border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.1)]"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                                        <div className="text-5xl opacity-20 text-primary">📰</div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase italic tracking-tighter shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                                    <Calendar size={14} className="mr-2 text-primary" />
                                    {post.date}
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase font-heading tracking-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                                    Read Article <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

