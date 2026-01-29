import { blogPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

export default function BlogPage() {
    const categories = [
        "All", "Gaming Tips", "Promotions", "News", "Guides", "Announcements"
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-background border-b border-primary/20">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-heading mb-6 neon-glow">
                        Latest News & Tips
                    </h1>
                    <p className="text-xl text-text/80 max-w-2xl mx-auto">
                        Stay updated with the latest gaming strategies, platform news,
                        and exclusive promotion announcements.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="card group hover:border-primary/40 flex flex-col h-full"
                            >
                                {/* Image Placeholder */}
                                <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 
                                rounded-lg mb-4 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-5xl opacity-20">📰</div>
                                    </div>
                                </div>

                                <div className="flex-1">
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

                                    <h2 className="text-xl font-heading text-primary group-hover:neon-glow mb-3 transition-all">
                                        {post.title}
                                    </h2>
                                    <p className="text-text/70 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <Link
                                    href={`#`}
                                    className="text-cta hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider mt-auto"
                                >
                                    Read More &rarr;
                                </Link>
                            </article>
                        ))}

                        {/* Additional Placeholders to fill grid */}
                        {[4, 5, 6].map((i) => (
                            <article
                                key={i}
                                className="card group hover:border-primary/40 flex flex-col h-full"
                            >
                                <div className="relative w-full h-48 bg-gradient-to-br from-primary/5 to-secondary/5 
                                rounded-lg mb-4 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-5xl opacity-10">📰</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-24 h-4 bg-primary/10 rounded mb-4"></div>
                                    <div className="w-full h-6 bg-primary/10 rounded mb-2"></div>
                                    <div className="w-2/3 h-6 bg-primary/10 rounded mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="w-full h-3 bg-text/10 rounded"></div>
                                        <div className="w-full h-3 bg-text/10 rounded"></div>
                                        <div className="w-4/5 h-3 bg-text/10 rounded"></div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Categories */}
                        <div className="bg-background/50 p-6 rounded-xl border border-primary/20">
                            <h3 className="text-xl font-heading text-primary mb-6">Categories</h3>
                            <ul className="space-y-3">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button className="flex items-center justify-between w-full text-text/70 hover:text-primary transition-colors group">
                                            <span>{cat}</span>
                                            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs group-hover:bg-primary group-hover:text-white transition-colors">
                                                {Math.floor(Math.random() * 20) + 1}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gradient-to-br from-primary/20 to-cta/20 p-6 rounded-xl border border-primary/20 text-center">
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
