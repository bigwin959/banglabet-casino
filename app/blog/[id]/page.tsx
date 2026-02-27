"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cms } from "@/lib/cms";
import { Calendar, Tag, ChevronLeft, Share2, MessageCircle, Heart } from "lucide-react";

export default function BlogPostDetail() {
    const params = useParams();
    const router = useRouter();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = params.id;
        cms.blogPosts.get().then((posts) => {
            if (posts && posts.length > 0) {
                const foundPost = posts.find((p: any) => p.id.toString() === id);
                if (foundPost) {
                    setPost(foundPost);
                }
            }
            setLoading(false);
        });
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-heading text-white mb-6 uppercase tracking-widest">Article Lost</h1>
                <p className="text-gray-500 mb-10">This intelligence report has been redacted or removed from the archive.</p>
                <Link href="/blog" className="btn-primary !px-10 !py-4 rounded-full flex items-center gap-3">
                    <ChevronLeft size={20} />
                    <span>Back to Archive</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-32">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
                {post.image ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <span className="text-9xl opacity-10">📰</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 pb-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-primary text-black text-[10px] font-black px-5 py-2 rounded-full uppercase italic tracking-widest shadow-xl">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-2 text-white/60 text-[10px] uppercase font-bold tracking-[0.2em]">
                                <Calendar size={14} className="text-primary" />
                                <span>{post.date}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4 neon-text-subtle">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <div className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-8 md:p-16 shadow-2xl">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between mb-16 pb-8 border-b border-white/5">
                        <div className="flex items-center gap-10">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Author</span>
                                <span className="text-white font-black uppercase text-sm italic">{post.author || "Elite Staff"}</span>
                            </div>
                            <div className="hidden md:flex flex-col">
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Time</span>
                                <span className="text-white font-black uppercase text-sm italic">{post.readTime || "5 Min Read"}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-4 bg-white/5 text-gray-400 hover:text-primary rounded-2xl transition-all">
                                <Share2 size={20} />
                            </button>
                            <button className="p-4 bg-white/5 text-gray-400 hover:text-red-500 rounded-2xl transition-all">
                                <Heart size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed italic mb-12 first-letter:text-7xl first-letter:font-heading first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                            {post.excerpt}
                        </p>

                        {/* Dynamic Content */}
                        <div className="text-gray-400 text-lg leading-relaxed space-y-8 font-medium">
                            <p className="whitespace-pre-wrap">
                                {post.content}
                            </p>

                            {post.highlightBox && (
                                <div className="bg-primary/5 border-l-4 border-primary p-10 rounded-r-3xl my-12">
                                    <h3 className="text-primary font-heading font-black text-xl uppercase mb-4 tracking-widest">Insider Briefing</h3>
                                    <p className="text-gray-300 italic text-xl">
                                        "{post.highlightBox}"
                                    </p>
                                </div>
                            )}

                            {(post.subHeading || post.subContent) && (
                                <>
                                    {post.subHeading && (
                                        <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mt-16 mb-8 group flex items-center gap-4">
                                            <span className="w-12 h-1 bg-primary rounded-full group-hover:w-20 transition-all" />
                                            {post.subHeading}
                                        </h2>
                                    )}
                                    {post.subContent && (
                                        <p className="whitespace-pre-wrap">
                                            {post.subContent}
                                        </p>
                                    )}
                                </>
                            )}

                            {post.footerNote && (
                                <blockquote className="border-l-4 border-white/10 pl-8 my-10 text-gray-400 italic">
                                    {post.footerNote}
                                </blockquote>
                            )}

                            <p>
                                Stay tuned for more updates as we continue to evolve. The future of gaming is here, and with BigWin959, you're always one step ahead of the curve.
                            </p>
                        </div>
                    </div>

                    {/* Footer / Call to Action */}
                    <div className="mt-20 pt-16 border-t border-white/5 text-center">
                        <h4 className="text-2xl font-heading font-black text-white uppercase tracking-widest mb-8">Ready to Transmit?</h4>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link href="https://www.bigwin959.com/register" target="_blank" className="btn-primary !px-12 !py-5 rounded-3xl !text-black shadow-2xl shadow-primary/20 w-full md:w-auto">
                                Start Winning Now
                            </Link>
                            <Link href="/blog" className="px-12 py-5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all font-bold uppercase tracking-widest text-sm rounded-3xl w-full md:w-auto">
                                View More Reports
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Return button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-3 text-gray-500 hover:text-primary transition-all font-black uppercase tracking-[0.4em] text-[10px]"
                    >
                        <ChevronLeft size={16} />
                        Back to Previous Sector
                    </button>
                </div>
            </div>
        </div>
    );
}
