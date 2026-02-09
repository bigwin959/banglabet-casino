"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { blogPosts as defaultBlogs, promotions as defaultPromos } from "@/lib/data";
import { Lock, Plus, Trash2, LogOut, LayoutDashboard, FileText, Gift, Trophy, ShieldCheck, Image as ImageIcon, Edit, X } from "lucide-react";

export default function GlobalAdmin() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    // Active Tab
    const [activeTab, setActiveTab] = useState<"blog" | "live" | "sports" | "general">("blog");

    // Form states
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState(""); // For promotions (discount)
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("News");
    const [image, setImage] = useState("");
    const [btnText, setBtnText] = useState("");
    const [btnUrl, setBtnUrl] = useState("");

    // Editing State
    const [editingId, setEditingId] = useState<number | null>(null);
    
    // Data states
    const [blogPosts, setBlogPosts] = useState<any[]>([]);
    const [livePromos, setLivePromos] = useState<any[]>([]);
    const [sportsPromos, setSportsPromos] = useState<any[]>([]);
    const [generalPromos, setGeneralPromos] = useState<any[]>([]);

    // Media Library State
    const [mediaLibraryOpen, setMediaLibraryOpen] = useState(false);
    const [systemImages, setSystemImages] = useState<string[]>([]);
    const [activeImages, setActiveImages] = useState<string[]>([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = () => {
        // Fetch system images
        fetch('/api/images')
            .then(res => res.json())
            .then(data => {
                if (data.images) setSystemImages(data.images);
            })
            .catch(err => console.error("Failed to load system images", err));
    };

    const handleLibraryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/images', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                fetchImages();
                alert("Upload Successful: Asset Securely Stored");
            } else {
                alert("Upload Failed: " + data.error);
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Upload Error: Transmission Interrupted");
        }
    };

    const handleLibraryDelete = async (filename: string) => {
        if (!confirm("Are you sure you want to permanently delete this asset?")) return;

        try {
            const res = await fetch('/api/images', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filename }),
            });
            const data = await res.json();
            if (data.success) {
                fetchImages();
            } else {
                alert("Delete Failed: " + data.error);
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("Delete Error: Removal Failed");
        }
    };

    // Update active images whenever data changes
    useEffect(() => {
        const allImages = new Set<string>();
        [...blogPosts, ...livePromos, ...sportsPromos, ...generalPromos].forEach(item => {
            if (item.image) allImages.add(item.image);
        });
        setActiveImages(Array.from(allImages));
    }, [blogPosts, livePromos, sportsPromos, generalPromos]);

    useEffect(() => {
        const auth = sessionStorage.getItem("adminAuth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }

        // Initialize Blog Data if empty
        const savedBlogs = localStorage.getItem("blogPosts");
        if (!savedBlogs || JSON.parse(savedBlogs).length === 0) {
            localStorage.setItem("blogPosts", JSON.stringify(defaultBlogs));
            setBlogPosts(defaultBlogs);
        } else {
            setBlogPosts(JSON.parse(savedBlogs));
        }

        // Initialize Live Casino Promo Data if empty
        const savedLive = localStorage.getItem("liveCasinoPromotions");
        if (!savedLive || JSON.parse(savedLive).length === 0) {
            const defaults = [
                {
                    id: 1,
                    image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
                    title: "Live Casino Welcome",
                    discount: "100%",
                    description: "Experience the thrill of real casino games with a 100% welcome bonus.",
                    ctaText: "Sign Up",
                    ctaLink: "/register"
                },
                {
                    id: 2,
                    image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_ALL_Rescue%20Bonus_CTL_PROMOTION.jpg",
                    title: "High Roller Cashback",
                    discount: "20%",
                    description: "Exclusive 20% cashback for VIP players on all live dealer tables.",
                    ctaText: "Sign Up",
                    ctaLink: "/register"
                },
            ];
            localStorage.setItem("liveCasinoPromotions", JSON.stringify(defaults));
            setLivePromos(defaults);
        } else {
            setLivePromos(JSON.parse(savedLive));
        }

        // Initialize Sportsbook Promo Data if empty
        const savedSports = localStorage.getItem("sportsbookPromotions");
        if (!savedSports || JSON.parse(savedSports).length === 0) {
            const defaults = [
                {
                    id: 1,
                    image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
                    title: "First Bet Bonus",
                    discount: "$50",
                    description: "Place your first bet risk-free up to $50. If you lose, we refund you.",
                    ctaText: "Bet Now",
                    ctaLink: "/sports"
                },
                {
                    id: 2,
                    image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
                    title: "Accumulator Boost",
                    discount: "50%",
                    description: "Get up to 50% extra winnings on your accumulator bets.",
                    ctaText: "Bet Now",
                    ctaLink: "/sports"
                },
            ];
            localStorage.setItem("sportsbookPromotions", JSON.stringify(defaults));
            setSportsPromos(defaults);
        } else {
            setSportsPromos(JSON.parse(savedSports));
        }

        // Initialize General Promo Data if empty
        const savedGeneral = localStorage.getItem("generalPromotions");
        if (!savedGeneral || JSON.parse(savedGeneral).length === 0) {
            localStorage.setItem("generalPromotions", JSON.stringify(defaultPromos));
            setGeneralPromos(defaultPromos);
        } else {
            setGeneralPromos(JSON.parse(savedGeneral));
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            sessionStorage.setItem("adminAuth", "true");
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Access Refused: Invalid Signature");
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("adminAuth");
        setIsAuthenticated(false);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    
                    // Max width/height 800px to save storage
                    const MAX_SIZE = 800;
                    if (width > height) {
                        if (width > MAX_SIZE) {
                            height *= MAX_SIZE / width;
                            width = MAX_SIZE;
                        }
                    } else {
                        if (height > MAX_SIZE) {
                            width *= MAX_SIZE / height;
                            height = MAX_SIZE;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);
                    
                    // Compress to JPEG with 0.7 quality
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    setImage(dataUrl);
                };
                img.src = event.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    };

    const resetForm = () => {
        setTitle("");
        setSubtitle("");
        setContent("");
        setImage("");
        setBtnText("");
        setBtnUrl("");
        setEditingId(null);
    };

    const startEditing = (item: any) => {
        setEditingId(item.id);
        setTitle(item.title);
        setSubtitle(item.discount || "");
        setContent(item.excerpt || item.description || "");
        setCategory(item.category || "News");
        setImage(item.image || "");
        setBtnText(item.ctaText || "");
        setBtnUrl(item.ctaLink || "");
        
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        const id = editingId || Date.now();
        const date = new Date().toISOString().split('T')[0];

        try {
            if (activeTab === "blog") {
                const newItem = { id, title, excerpt: content, category, image, date };
                let updated;
                if (editingId) {
                    updated = blogPosts.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...blogPosts];
                }
                localStorage.setItem("blogPosts", JSON.stringify(updated));
                setBlogPosts(updated);
            } else if (activeTab === "live") {
                const newItem = { id, title, discount: subtitle, description: content, image, ctaText: btnText || "Claim Now", ctaLink: btnUrl || "#" };
                let updated;
                if (editingId) {
                    updated = livePromos.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...livePromos];
                }
                localStorage.setItem("liveCasinoPromotions", JSON.stringify(updated));
                setLivePromos(updated);
            } else if (activeTab === "sports") {
                const newItem = { id, title, discount: subtitle, description: content, image, ctaText: btnText || "Bet Now", ctaLink: btnUrl || "#" };
                let updated;
                if (editingId) {
                    updated = sportsPromos.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...sportsPromos];
                }
                localStorage.setItem("sportsbookPromotions", JSON.stringify(updated));
                setSportsPromos(updated);
            } else {
                const newItem = { id, title, discount: subtitle, description: content, image, ctaText: btnText || "Learn More", ctaLink: btnUrl || "#" };
                let updated;
                if (editingId) {
                    updated = generalPromos.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...generalPromos];
                }
                localStorage.setItem("generalPromotions", JSON.stringify(updated));
                setGeneralPromos(updated);
            }

            resetForm();
            alert(editingId ? "Operation Successful: Database Updated" : "Transmission Complete: Data Synchronized");
        } catch (error) {
            console.error("Storage Error:", error);
            alert("STORAGE FULL: The database cannot accept more data. Please delete old items or use smaller images to free up space.");
        }
    };

    const handleDelete = (id: number) => {
        if (!confirm("Are you sure you want to terminate this data?")) return;

        if (activeTab === "blog") {
            const updated = blogPosts.filter(p => p.id !== id);
            setBlogPosts(updated);
            localStorage.setItem("blogPosts", JSON.stringify(updated));
        } else if (activeTab === "live") {
            const updated = livePromos.filter(p => p.id !== id);
            setLivePromos(updated);
            localStorage.setItem("liveCasinoPromotions", JSON.stringify(updated));
        } else if (activeTab === "sports") {
            const updated = sportsPromos.filter(p => p.id !== id);
            setSportsPromos(updated);
            localStorage.setItem("sportsbookPromotions", JSON.stringify(updated));
        } else {
            const updated = generalPromos.filter(p => p.id !== id);
            setGeneralPromos(updated);
            localStorage.setItem("generalPromotions", JSON.stringify(updated));
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black p-4">
                <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent pointer-events-none" />
                <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 shadow-[0_0_100px_rgba(255,228,145,0.05)] relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,228,145,0.2)]">
                            <ShieldCheck size={40} />
                        </div>
                        <h1 className="text-3xl font-black text-white uppercase font-heading tracking-tighter">BigWin959 <span className="text-primary italic">Vault</span></h1>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-3">Authorized Personnel Only</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Signature ID</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                placeholder="Operator ID"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Security Key</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && <p className="text-primary text-[10px] text-center font-black uppercase tracking-widest animate-pulse">{error}</p>}

                        <button type="submit" className="btn-primary w-full !py-5 !rounded-2xl !text-black shadow-2xl shadow-primary/20 flex items-center justify-center gap-3">
                            <Lock size={18} />
                            <span>Unlock Mainframe</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container-custom max-w-7xl">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <span className="w-12 h-1 bg-primary rounded-full" />
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Command Center</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter">BigWin959 <span className="text-primary italic">Admin</span></h1>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 bg-surface rounded-[2rem] p-2 border border-white/5">
                        <button 
                            onClick={() => { setActiveTab("blog"); resetForm(); }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-[1.5rem] transition-all font-bold uppercase text-[10px] tracking-widest ${activeTab === "blog" ? "bg-primary text-black" : "text-gray-500 hover:text-white"}`}
                        >
                            <FileText size={16} /> Blog
                        </button>
                        <button 
                            onClick={() => { setActiveTab("live"); resetForm(); }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-[1.5rem] transition-all font-bold uppercase text-[10px] tracking-widest ${activeTab === "live" ? "bg-primary text-black" : "text-gray-500 hover:text-white"}`}
                        >
                            <Gift size={16} /> Live Casino
                        </button>
                        <button 
                            onClick={() => { setActiveTab("sports"); resetForm(); }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-[1.5rem] transition-all font-bold uppercase text-[10px] tracking-widest ${activeTab === "sports" ? "bg-primary text-black" : "text-gray-500 hover:text-white"}`}
                        >
                            <Trophy size={16} /> Sportsbook
                        </button>
                        <button 
                            onClick={() => { setActiveTab("general"); resetForm(); }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-[1.5rem] transition-all font-bold uppercase text-[10px] tracking-widest ${activeTab === "general" ? "bg-primary text-black" : "text-gray-500 hover:text-white"}`}
                        >
                            <LayoutDashboard size={16} /> Promo Cards
                        </button>
                        <div className="w-px h-8 bg-white/10 mx-2" />
                        <button onClick={handleLogout} className="p-3 text-red-500 hover:bg-red-500/10 rounded-full transition-all">
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Create Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                            
                             <h2 className="text-2xl font-black text-white mb-10 uppercase flex items-center justify-between font-heading tracking-widest">
                                <div className="flex items-center gap-4">
                                    {editingId ? <Edit size={32} className="text-primary" /> : <Plus size={32} className="text-primary" />} 
                                    {editingId ? "Modify Entry" : (activeTab === "blog" ? "New Article" : "New Promotion")}
                                </div>
                                {editingId && (
                                    <button onClick={resetForm} className="text-gray-500 hover:text-white transition-colors">
                                        <X size={24} />
                                    </button>
                                )}
                            </h2>
                            
                            <form onSubmit={handleCreate} className="space-y-8 relative z-10">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">
                                        {activeTab === "blog" ? "Article Headline" : "Promotion Title"}
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all font-bold placeholder:text-white/5"
                                        placeholder={activeTab === "blog" ? "Enter catchy title..." : "e.g. 100% Welcome Bonus"}
                                    />
                                </div>

                                {activeTab !== "blog" && (
                                    <div className="space-y-2">
                                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Offer Badge (e.g. 100% OFF)</label>
                                        <input
                                            type="text"
                                            value={subtitle}
                                            onChange={(e) => setSubtitle(e.target.value)}
                                            required
                                            className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all font-bold placeholder:text-white/5"
                                            placeholder="100% OFF / EXCLUSIVE"
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {activeTab === "blog" && (
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Section</label>
                                            <select
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all font-bold appearance-none"
                                            >
                                                <option value="News">News</option>
                                                <option value="Tips">Tips</option>
                                                <option value="Guides">Guides</option>
                                            </select>
                                        </div>
                                    )}
                                    <div className="space-y-2 col-span-1 md:col-span-full">
                                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Visual Asset</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative group/upload">
                                                <input type="file" onChange={handleImageUpload} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                                <div className="w-full bg-black border border-dashed border-white/10 rounded-2xl px-4 py-8 text-gray-500 text-[10px] font-black uppercase tracking-[.2em] text-center group-hover/upload:border-primary/50 group-hover/upload:text-primary transition-all flex flex-col items-center gap-3 h-full justify-center">
                                                    <ImageIcon size={24} className="opacity-20 group-hover/upload:opacity-100 transition-opacity" />
                                                    <span>Upload New</span>
                                                </div>
                                            </div>
                                            <button 
                                                type="button"
                                                onClick={() => setMediaLibraryOpen(true)}
                                                className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-8 text-gray-400 text-[10px] font-black uppercase tracking-[.2em] text-center hover:bg-white/10 hover:text-white transition-all flex flex-col items-center gap-3 h-full justify-center"
                                            >
                                                <LayoutDashboard size={24} />
                                                <span>Select Existing</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {image && (
                                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black group/preview">
                                        <img src={image} alt="Preview" className="w-full h-full object-cover transition-transform duration-1000 group-hover/preview:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-4 left-6 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                            <span className="text-[9px] font-black text-white uppercase tracking-widest">Asset Sync Active</span>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Data Briefing</label>
                                    <textarea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                        rows={4}
                                        className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all resize-none font-medium text-sm leading-relaxed placeholder:text-white/5"
                                        placeholder="Describe the content..."
                                    />
                                </div>

                                {activeTab !== "blog" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Button Label</label>
                                            <input
                                                type="text"
                                                value={btnText}
                                                onChange={(e) => setBtnText(e.target.value)}
                                                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all font-bold placeholder:text-white/5"
                                                placeholder="e.g. CLAIM NOW"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Target URL</label>
                                            <input
                                                type="text"
                                                value={btnUrl}
                                                onChange={(e) => setBtnUrl(e.target.value)}
                                                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all font-bold placeholder:text-white/5"
                                                placeholder="e.g. /register or https://..."
                                            />
                                        </div>
                                    </div>
                                )}

                                 <button type="submit" className="btn-primary w-full !py-6 !rounded-[2rem] shadow-2xl shadow-primary/20 flex items-center justify-center gap-3">
                                    <span>{editingId ? "Update Intelligence" : "Sync Intelligence"}</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Content List */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <LayoutDashboard size={24} className="text-primary" />
                                <h2 className="text-2xl font-black text-white uppercase font-heading tracking-widest">Active Data</h2>
                            </div>
                            <span className="bg-white/5 px-6 py-2 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-widest border border-white/5">
                                {activeTab === "blog" ? blogPosts.length : activeTab === "live" ? livePromos.length : activeTab === "sports" ? sportsPromos.length : generalPromos.length} Items Indexed
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {(activeTab === "blog" ? blogPosts : activeTab === "live" ? livePromos : activeTab === "sports" ? sportsPromos : generalPromos).length === 0 ? (
                                <div className="bg-surface/30 border border-dashed border-white/5 rounded-[3rem] p-32 text-center group">
                                    <div className="text-primary/20 group-hover:text-primary/40 transition-colors mb-6 flex justify-center">
                                        <div className="w-20 h-20 rounded-full border-2 border-current flex items-center justify-center">
                                            <FileText size={40} />
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">Sector Empty: Awaiting Input</p>
                                </div>
                            ) : (
                                (activeTab === "blog" ? blogPosts : activeTab === "live" ? livePromos : activeTab === "sports" ? sportsPromos : generalPromos).map((item: any) => (
                                    <div key={item.id} className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-6 flex flex-col md:flex-row items-center gap-8 hover:border-primary/30 transition-all group/item relative overflow-hidden shadow-xl">
                                        <div className="w-full md:w-40 aspect-video md:aspect-square shrink-0 rounded-2xl overflow-hidden bg-black border border-white/5 relative">
                                            <img src={item.image} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-1000" alt="" />
                                            {item.discount && (
                                                <div className="absolute top-2 right-2 bg-primary text-black text-[8px] font-black px-2 py-1 rounded-full uppercase italic">
                                                    {item.discount}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex-1 min-w-0 py-2">
                                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                                <span className="bg-primary/5 text-primary text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-primary/10">
                                                    {item.category || (activeTab === "live" ? "Live Promo" : activeTab === "sports" ? "Sports Promo" : "General Promo")}
                                                </span>
                                                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest italic">{item.date || "Active"}</span>
                                            </div>
                                            <h3 className="font-black text-xl text-white mb-3 uppercase font-heading tracking-tight truncate group-hover/item:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-gray-500 text-[11px] font-medium line-clamp-2 leading-relaxed max-w-lg italic">
                                                {item.excerpt || item.description}
                                            </p>
                                        </div>

                                         <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => startEditing(item)}
                                                className="bg-white/5 text-gray-400 hover:bg-primary hover:text-black transition-all p-5 rounded-[1.5rem] md:self-center shadow-lg border border-white/5"
                                            >
                                                <Edit size={24} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="bg-white/5 text-gray-500 hover:bg-red-500 hover:text-white transition-all p-5 rounded-[1.5rem] md:self-center shadow-lg border border-white/5"
                                            >
                                                <Trash2 size={24} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Media Library Modal */}
            {mediaLibraryOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
                        <div className="p-8 border-b border-white/10 flex items-center justify-between bg-black">
                            <div>
                                <h3 className="text-2xl font-black text-white uppercase font-heading tracking-widest">Media Archive</h3>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Select an asset to deploy</p>
                            </div>
                            <button onClick={() => setMediaLibraryOpen(false)} className="bg-white/5 p-3 rounded-full text-white hover:bg-red-500 hover:text-white transition-all">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            <div className="space-y-10">
                                {/* System Assets */}
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-primary text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3">
                                            <span className="w-8 h-px bg-primary/50"></span> System Assets <span className="w-8 h-px bg-primary/10"></span>
                                        </h4>
                                        <div className="relative overflow-hidden">
                                            <input type="file" onChange={handleLibraryUpload} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-black transition-all">
                                                <Plus size={14} /> Add Asset
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {systemImages.map((img, i) => (
                                            <div key={`sys-${i}`} className="group relative aspect-square rounded-xl overflow-hidden border border-white/5 hover:border-primary transition-all">
                                                <button
                                                    onClick={() => { setImage(img); setMediaLibraryOpen(false); }}
                                                    className="w-full h-full relative z-0"
                                                >
                                                    <img src={img} alt="Asset" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-primary/20 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/30">Select</span>
                                                    </div>
                                                </button>
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); handleLibraryDelete(img); }}
                                                    className="absolute top-2 right-2 z-10 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all backdrop-blur-md border border-white/10"
                                                    title="Delete Asset"
                                                >
                                                    <Trash2 size={12} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Active Assets */}
                                {activeImages.length > 0 && (
                                    <div>
                                        <h4 className="text-green-500 text-xs font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-green-500/50"></span> Active Streams <span className="w-full h-px bg-green-500/10"></span>
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                            {activeImages.filter(img => !systemImages.includes(img)).map((img, i) => (
                                                <button
                                                    key={`act-${i}`}
                                                    onClick={() => { setImage(img); setMediaLibraryOpen(false); }}
                                                    className="group aspect-square rounded-xl overflow-hidden border border-white/5 relative hover:border-green-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                                                >
                                                    <img src={img} alt="Active Asset" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-green-500/20 px-3 py-1 rounded-full backdrop-blur-sm border border-green-500/30">Select</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

