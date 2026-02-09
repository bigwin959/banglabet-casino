"use client";

import { blogPosts as staticPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";

export default function BlogPage() {
    const [allPosts, setAllPosts] = useState<any[]>([]);

    useEffect(() => {
        const localPosts = localStorage.getItem("blogPosts");
        if (localPosts) {
            setAllPosts(JSON.parse(localPosts));
        }
    }, []);

    const categories = [
        "All", "Gaming Tips", "Promotions", "News", "Guides", "Announcements"
    ];

    return (
        <div className="min-h-screen pb-20 pt-24 md:pt-28">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {allPosts.length === 0 ? (
                            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                                <h2 className="text-2xl font-heading text-white mb-4 uppercase">No posts found</h2>
                                <p className="text-gray-500">Check back later for new updates from BigWin959.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-fit">
                                {allPosts.map((post) => (
                                    <article
                                        key={post.id}
                                        className="group flex flex-col h-full bg-[#111] overflow-hidden rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-500"
                                    >
                                        {/* Image Container */}
                                        <div className="relative w-full h-56 bg-surface overflow-hidden">
                                            {post.image ? (
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                                                    <div className="text-5xl opacity-20 text-primary">📰</div>
                                                </div>
                                            )}
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase italic tracking-tighter shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-1 p-8">
                                            <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
                                                <span className="flex items-center space-x-2">
                                                    <Calendar size={14} className="text-primary" />
                                                    <span>{post.date}</span>
                                                </span>
                                            </div>

                                            <h2 className="text-2xl font-bold text-white group-hover:text-primary mb-4 transition-all leading-tight font-heading uppercase tracking-tight">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                                                {post.excerpt}
                                            </p>
                                            
                                            <div className="mt-auto">
                                                <Link
                                                    href={`/blog/${post.id}`}
                                                    className="inline-flex items-center text-primary font-black text-[10px] uppercase tracking-[0.3em] group/link"
                                                >
                                                    Read Full Story <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-10">
                        {/* Categories and Newsletter in a single sticky container to prevent collision */}
                        <div className="sticky top-28 space-y-10">
                            {/* Categories */}
                            <div className="bg-surface/50 p-8 rounded-[2rem] border border-white/5">
                                <h3 className="text-lg font-black text-white mb-8 uppercase font-heading tracking-widest relative inline-block">
                                    Archive
                                    <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary" />
                                </h3>
                                <ul className="space-y-4">
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button className="flex items-center justify-between w-full text-gray-400 hover:text-white transition-colors group text-sm font-bold uppercase tracking-widest">
                                                <span>{cat}</span>
                                                <span className="bg-white/5 px-2 py-0.5 rounded-full text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter / Subscribe */}
                            <div className="bg-primary p-8 rounded-[2rem] text-center shadow-xl shadow-primary/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                                <h3 className="text-xl font-black text-white mb-4 uppercase font-heading tracking-widest relative z-10">Subscribe</h3>
                                <p className="text-sm text-white/80 mb-8 font-medium relative z-10">
                                    Get premium strategies and exclusive bonuses directly in your inbox.
                                </p>
                                <div className="space-y-4 relative z-10">
                                    <input 
                                        type="email" 
                                        placeholder="YOUR EMAIL" 
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-xs font-bold focus:outline-none focus:bg-white/20 transition-all placeholder:text-white/40 uppercase tracking-widest" 
                                    />
                                    <button className="w-full bg-white text-primary font-black py-4 rounded-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-xs shadow-lg">
                                        Join Circle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}


