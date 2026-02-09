"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Plus, Trash2, LogOut } from "lucide-react";

export default function BlogAdmin() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Post form state
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [category, setCategory] = useState("News");
    const [image, setImage] = useState("/images/game-placeholder.svg"); // Default image
    const [localPosts, setLocalPosts] = useState<any[]>([]);

    useEffect(() => {
        // Check session storage for mock auth
        const auth = sessionStorage.getItem("adminAuth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }

        // Load local posts
        const savedPosts = localStorage.getItem("blogPosts");
        if (savedPosts) {
            setLocalPosts(JSON.parse(savedPosts));
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock credentials
        if (username === "admin" && password === "admin123") {
            sessionStorage.setItem("adminAuth", "true");
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Invalid credentials");
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("adminAuth");
        setIsAuthenticated(false);
    };

    const handleCreatePost = (e: React.FormEvent) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(), // Unique ID
            title,
            excerpt,
            category,
            image,
            date: new Date().toISOString().split('T')[0],
            isLocal: true
        };

        const updatedPosts = [newPost, ...localPosts];
        setLocalPosts(updatedPosts);
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

        // Reset form
        setTitle("");
        setExcerpt("");
        setCategory("News");
        setImage("/images/game-placeholder.svg");

        alert("Post created successfully!");
    };

    const handleDeletePost = (id: number) => {
        const updatedPosts = localPosts.filter((p: any) => p.id !== id);
        setLocalPosts(updatedPosts);
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black p-4 z-50 relative">
                <div className="w-full max-w-md bg-[#111] border border-white/10 rounded-xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-white uppercase font-heading">Admin Access</h1>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                placeholder="admin"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                placeholder="admin123"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors uppercase tracking-wider">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-4">
            <div className="container-custom max-w-5xl">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-heading font-bold text-white uppercase">Blog Management</h1>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
                        <LogOut size={20} /> Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Create Post Form */}
                    <div className="bg-[#111] border border-white/10 rounded-xl p-8 h-fit">
                        <h2 className="text-xl font-bold text-white mb-6 uppercase flex items-center gap-2">
                            <Plus size={20} className="text-primary" /> Create New Post
                        </h2>
                        <form onSubmit={handleCreatePost} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                >
                                    <option value="News">News</option>
                                    <option value="Tips">Tips</option>
                                    <option value="Strategy">Strategy</option>
                                    <option value="Announcements">Announcements</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Excerpt / Content</label>
                                <textarea
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    required
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors uppercase tracking-wider">
                                Publish Post
                            </button>
                        </form>
                    </div>

                    {/* Post List */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white uppercase">Your Posts ({localPosts.length})</h2>

                        {localPosts.length === 0 ? (
                            <p className="text-gray-500 italic">No posts created yet.</p>
                        ) : (
                            <div className="space-y-4">
                                {localPosts.map((post: any) => (
                                    <div key={post.id} className="bg-[#111] border border-white/10 rounded-xl p-5 flex justify-between items-start gap-4 hover:border-primary/30 transition-colors">
                                        <div>
                                            <h3 className="font-bold text-white mb-2">{post.title}</h3>
                                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                                <span className="bg-primary/20 text-primary px-2 py-1 rounded">{post.category}</span>
                                                <span>{post.date}</span>
                                            </div>
                                            <p className="text-gray-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                                        </div>
                                        <button
                                            onClick={() => handleDeletePost(post.id)}
                                            className="text-gray-500 hover:text-red-500 transition-colors p-2"
                                            title="Delete Post"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
