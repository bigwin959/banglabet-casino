"use client";

import { blogPosts as staticPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";

export default function BlogPage() {
    const [allPosts, setAllPosts] = useState<any[]>(staticPosts);

    useEffect(() => {
        const localPosts = localStorage.getItem("blogPosts");
        if (localPosts) {
            const parsedPosts = JSON.parse(localPosts);
            // Merge local posts with static posts
            // We can put local posts first
            setAllPosts([...parsedPosts, ...staticPosts]);
        }
    }, []);

    const categories = [
        "All", "Gaming Tips", "Promotions", "News", "Guides", "Announcements"
    ];

    return (
        <div className="min-h-screen pb-20 pt-24 md:pt-28">


            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 h-fit">
                        {allPosts.map((post) => (
                            <article
                                key={post.id}
                                className="card group hover:border-primary/40 flex flex-col h-full bg-[#111] overflow-hidden"
                            >
                                {/* Image Placeholder */}
                                <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 
                                mb-4 overflow-hidden">
                                    {post.image && post.image !== "/images/game-placeholder.svg" ? (
                                        <div className="relative w-full h-full">
                                            {/* Note: In a real app with dynamic images, we'd use Next.js Image properly. 
                                                For local storage base64 or urls, simple img tag or configured Next Image.
                                                Here we assume static path or placeholder. */}
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-5xl opacity-20">📰</div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 p-4 pt-0">
                                    <div className="flex items-center space-x-4 text-xs text-text/50 mb-3">
                                        <span className="flex items-center space-x-1">
                                            <Calendar size={12} />
                                            <span>{post.date}</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <Tag size={12} />
                                            <span>{post.category}</span>
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-heading text-primary group-hover:neon-glow mb-3 transition-all leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-text/70 text-sm mb-4 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="p-4 pt-0 mt-auto">
                                    <Link
                                        href={`#`}
                                        className="text-cta hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider block"
                                    >
                                        Read More &rarr;
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8 h-fit">
                        {/* Categories */}
                        <div className="bg-background/50 p-6 rounded-xl border border-primary/20 sticky top-24">
                            <h3 className="text-xl font-heading text-primary mb-6">Categories</h3>
                            <ul className="space-y-3">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button className="flex items-center justify-between w-full text-text/70 hover:text-primary transition-colors group">
                                            <span className="text-sm font-medium">{cat}</span>
                                            {/* Random counts for demo */}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gradient-to-br from-primary/20 to-cta/20 p-6 rounded-xl border border-primary/20 text-center sticky top-[400px]">
                            <h3 className="text-xl font-heading text-white mb-4">Subscribe</h3>
                            <p className="text-sm text-text/80 mb-4">
                                Get the latest news and promotions directly in your inbox.
                            </p>
                            <input type="email" placeholder="Your email" className="input w-full mb-3 text-sm" />
                            <button className="btn-primary w-full text-sm">Sign Up</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

