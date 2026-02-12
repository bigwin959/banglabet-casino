"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cms, SiteSettings, FeaturedContent, DiamondLobbyItem, HomeBlogSettings, PageContentLiveCasino, ContactMessage } from "@/lib/cms";
import {
    Users,
    Settings,
    ShieldCheck,
    Lock,
    Unlock,
    LogOut,
    Search,
    Filter,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Edit,
    Trash2,
    Plus,
    Save,
    X,
    Image as ImageIcon,
    LayoutDashboard,
    FileText,
    Gift,
    Trophy,
    LayoutTemplate,
    Upload,
    Archive,
    Menu,
    ChevronDown,
    Zap,
    Target,
    User,
    ExternalLink,
    Home,
    MessageSquare,
    Globe,
    Mail
} from 'lucide-react';
import { useToast } from "@/context/ToastContext";
import { motion, AnimatePresence } from "framer-motion";


export default function GlobalAdmin() {
    const router = useRouter();
    const { success, error: toastError, info, warning } = useToast();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Active Tab
    const [activeTab, setActiveTab] = useState<"blog" | "live" | "sports" | "general" | "banners" | "home" | "pages" | "global" | "inbox">("blog");

    // Form states
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState(""); // For promotions (discount)
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("News");
    const [author, setAuthor] = useState("Elite Staff");
    const [readTime, setReadTime] = useState("5 Min Read");

    // Blog Advanced Fields
    const [highlightBox, setHighlightBox] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [subContent, setSubContent] = useState("");
    const [footerNote, setFooterNote] = useState("");

    const [image, setImage] = useState("");
    const [btnText, setBtnText] = useState("");
    const [btnUrl, setBtnUrl] = useState("");

    // Banner specific states
    const [bannerTitle, setBannerTitle] = useState("");
    const [bannerDesc, setBannerDesc] = useState("");
    const [bannerBtnText, setBannerBtnText] = useState("");
    const [bannerBtnLink, setBannerBtnLink] = useState("");
    const [bannerImageOnly, setBannerImageOnly] = useState(false);

    // CMS States
    const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
    const [featuredContent, setFeaturedContent] = useState<FeaturedContent[]>([]);
    const [diamondLobby, setDiamondLobby] = useState<DiamondLobbyItem[]>([]);
    const [homeBlogSettings, setHomeBlogSettings] = useState<HomeBlogSettings | null>(null);
    const [liveCasinoContent, setLiveCasinoContent] = useState<PageContentLiveCasino | null>(null);
    const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
    const [subscribers, setSubscribers] = useState<string[]>([]);
    const [blogCategories, setBlogCategories] = useState<string[]>([]);
    const [selectedPage, setSelectedPage] = useState<"live-casino" | "contact">("live-casino");

    // Editing State
    const [editingId, setEditingId] = useState<number | null>(null);

    // Data states
    const [blogPosts, setBlogPosts] = useState<any[]>([]);
    const [livePromos, setLivePromos] = useState<any[]>([]);
    const [sportsPromos, setSportsPromos] = useState<any[]>([]);
    const [generalPromos, setGeneralPromos] = useState<any[]>([]);
    const [homeBanners, setHomeBanners] = useState<any[]>([]);

    // Media Library State
    const [mediaLibraryOpen, setMediaLibraryOpen] = useState(false);
    const [systemImages, setSystemImages] = useState<string[]>([]);
    const [activeImages, setActiveImages] = useState<string[]>([]);

    // Mobile Menu State
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetchImages();
        loadCMSData();
    }, []);

    const loadCMSData = () => {
        setSiteSettings(cms.siteSettings.get());
        setFeaturedContent(cms.featuredContent.get());
        setDiamondLobby(cms.diamondLobby.get());
        setHomeBlogSettings(cms.homeBlog.get());
        setLiveCasinoContent(cms.liveCasino.get());
        setContactMessages(cms.contactMessages.get());
        setSubscribers(cms.subscribers.get());
        setBlogCategories(cms.blogCategories.get());
    };

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
                success("Asset Securely Stored");
            } else {
                toastError("Upload Failed: " + data.error);
            }
        } catch (error) {
            console.error("Upload error:", error);
            toastError("Upload Error: Transmission Interrupted");
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
                info("Asset Deleted from Archives");
            } else {
                toastError("Delete Failed: " + data.error);
            }
        } catch (error) {
            console.error("Delete error:", error);
            toastError("Delete Error: Removal Failed");
        }
    };

    // Update active images whenever data changes
    useEffect(() => {
        const allImages = new Set<string>();
        [...blogPosts, ...livePromos, ...sportsPromos, ...generalPromos, ...homeBanners].forEach(item => {
            if (item.image) allImages.add(item.image);
        });
        setActiveImages(Array.from(allImages));
    }, [blogPosts, livePromos, sportsPromos, generalPromos, homeBanners]);

    useEffect(() => {
        const auth = sessionStorage.getItem("adminAuth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }

        // Initialize Blog Data if empty
        const savedBlogs = localStorage.getItem("blogPosts");
        if (!savedBlogs || JSON.parse(savedBlogs).length === 0) {
            // Default blogs from lib/data logic would be here, skipping import to avoid errors
            const defaults: any[] = [];
            setBlogPosts(defaults);
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
            const defaults: any[] = []; // Skipping import default logic
            setGeneralPromos(defaults);
        } else {
            setGeneralPromos(JSON.parse(savedGeneral));
        }

        // Initialize Home Banners
        const savedBanners = localStorage.getItem("homeBanners");
        if (!savedBanners || JSON.parse(savedBanners).length === 0) {
            const defaults = [
                {
                    id: "1",
                    image: "/images/hero-1.jpg",
                    title: "Ultimate Casino Experience",
                    description: "Experience the thrill of real casino games.",
                    buttonText: "Join Now",
                    link: "/register",
                    imageOnly: false
                },
                {
                    id: "2",
                    image: "/images/hero-2.jpg",
                    title: "Future of Gaming is Here",
                    description: "Join the future of online gaming today.",
                    buttonText: "Join Now",
                    link: "/register",
                    imageOnly: false
                }
            ];
            localStorage.setItem("homeBanners", JSON.stringify(defaults));
            setHomeBanners(defaults);
        } else {
            setHomeBanners(JSON.parse(savedBanners));
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
        setCategory("News");
        setImage("");
        setBtnText("");
        setBtnUrl("");

        // Reset Blog Fields
        setAuthor("Elite Staff");
        setReadTime("5 Min Read");
        setHighlightBox("");
        setSubHeading("");
        setSubContent("");
        setFooterNote("");

        setBannerTitle("");
        setBannerDesc("");
        setBannerBtnText("");
        setBannerBtnLink("");
        setBannerImageOnly(false);

        setEditingId(null);
    };

    const startEditing = (item: any) => {
        setEditingId(item.id);
        setTitle(item.title);
        setSubtitle(item.discount || "");
        setContent(item.excerpt || item.description || item.content || "");
        setCategory(item.category || "News");
        setImage(item.image || "");
        setBtnText(item.ctaText || "");
        setBtnUrl(item.ctaLink || "");

        if (activeTab === "blog") {
            setAuthor(item.author || "Elite Staff");
            setReadTime(item.readTime || "5 Min Read");
            setHighlightBox(item.highlightBox || "");
            setSubHeading(item.subHeading || "");
            setSubContent(item.subContent || "");
            setFooterNote(item.footerNote || "");
            // For editing, use real content not just excerpt if available
            if (item.content && item.content.length > (item.excerpt ? item.excerpt.length : 0)) {
                setContent(item.content);
            }
        } else {
            // Reset excessive fields for other tabs to avoid confusion in state
            setAuthor("Elite Staff");
            setReadTime("5 Min Read");
            setHighlightBox("");
            setSubHeading("");
            setSubContent("");
            setFooterNote("");
        }

        if (activeTab === "banners") {
            setBannerTitle(item.title || "");
            setBannerDesc(item.description || "");
            setBannerBtnText(item.buttonText || "");
            setBannerBtnLink(item.link || "");
            setBannerImageOnly(item.imageOnly || false);
        }

        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        const id = editingId || Date.now();
        const date = new Date().toISOString().split('T')[0];

        try {
            if (activeTab === "blog") {
                const newItem = {
                    id,
                    title,
                    excerpt: content.substring(0, 150) + (content.length > 150 ? "..." : ""),
                    content,
                    category,
                    image,
                    date,
                    author,
                    readTime,
                    highlightBox,
                    subHeading,
                    subContent,
                    footerNote
                };
                let updated;
                if (editingId) {
                    updated = blogPosts.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...blogPosts];
                }
                localStorage.setItem("blogPosts", JSON.stringify(updated));
                setBlogPosts(updated);
            } else if (activeTab === "live") {
                const newItem = { id, title, discount: subtitle, description: content, ctaText: btnText, ctaLink: btnUrl, image };
                let updated;
                if (editingId) {
                    updated = livePromos.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...livePromos];
                }
                localStorage.setItem("liveCasinoPromotions", JSON.stringify(updated));
                setLivePromos(updated);
            } else if (activeTab === "sports") {
                const newItem = { id, title, discount: subtitle, description: content, ctaText: btnText, ctaLink: btnUrl, image };
                let updated;
                if (editingId) {
                    updated = sportsPromos.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...sportsPromos];
                }
                localStorage.setItem("sportsbookPromotions", JSON.stringify(updated));
                setSportsPromos(updated);
            } else if (activeTab === "banners") {
                const newItem = {
                    id: String(id),
                    title: bannerTitle,
                    description: bannerDesc,
                    buttonText: bannerBtnText,
                    link: bannerBtnLink,
                    image,
                    imageOnly: bannerImageOnly
                };
                let updated;
                if (editingId) {
                    updated = homeBanners.map(p => p.id === String(editingId) ? newItem : p);
                } else {
                    updated = [newItem, ...homeBanners];
                }
                localStorage.setItem("homeBanners", JSON.stringify(updated));
                setHomeBanners(updated);
            } else {
                const newItem = { id, title, discount: subtitle, description: content, ctaText: btnText, ctaLink: btnUrl, image };
                let updated;
                if (editingId) {
                    updated = generalPromos.map(p => p.id === editingId ? newItem : p);
                } else {
                    updated = [newItem, ...generalPromos];
                }
                localStorage.setItem("generalPromotions", JSON.stringify(updated));
                setGeneralPromos(updated);
            }

            success(editingId ? "Entry Updated Successfully" : "New Entry Created Successfully");
            resetForm();
        } catch (err) {
            console.error(err);
            toastError("Operation Failed");
        }
    };

    const handleDelete = (id: number | string) => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        if (activeTab === "blog") {
            const updated = blogPosts.filter(p => p.id !== id);
            localStorage.setItem("blogPosts", JSON.stringify(updated));
            setBlogPosts(updated);
        } else if (activeTab === "live") {
            const updated = livePromos.filter(p => p.id !== id);
            localStorage.setItem("liveCasinoPromotions", JSON.stringify(updated));
            setLivePromos(updated);
        } else if (activeTab === "sports") {
            const updated = sportsPromos.filter(p => p.id !== id);
            localStorage.setItem("sportsbookPromotions", JSON.stringify(updated));
            setSportsPromos(updated);
        } else if (activeTab === "banners") {
            const updated = homeBanners.filter(p => p.id !== String(id));
            localStorage.setItem("homeBanners", JSON.stringify(updated));
            setHomeBanners(updated);
        } else {
            const updated = generalPromos.filter(p => p.id !== id);
            localStorage.setItem("generalPromotions", JSON.stringify(updated));
            setGeneralPromos(updated);
        }
        success("Entry Removed");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-2">
                        <div className="w-20 h-20 bg-primary rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,228,145,0.2)]">
                            <ShieldCheck size={40} className="text-black" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tighter uppercase font-heading">
                            Command Center
                        </h1>
                        <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">Restricted Access // Auth Required</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-xs font-bold text-center uppercase tracking-widest">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2 relative">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Username</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 font-bold"
                                    placeholder="Enter ID"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 relative">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 font-bold"
                                    placeholder="Enter Key"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-black font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_30px_rgba(255,228,145,0.3)] transition-all mt-4"
                        >
                            Declassify System
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Return early if not authenticated
    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <AnimatePresence>
                {/* Mobile Overlay */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            <aside className={`
                fixed md:sticky top-0 left-0 h-screen w-72 bg-[#050505] border-r border-white/5 z-50 transform transition-transform duration-300 ease-in-out
                ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="p-8 space-y-8 flex flex-col h-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <ShieldCheck size={20} className="text-black" />
                        </div>
                        <div>
                            <h2 className="font-heading font-black text-xl tracking-tight leading-none text-white">ADMIN</h2>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Panel v2.0</p>
                        </div>
                    </div>

                    <nav className="space-y-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {[
                            { id: "blog", icon: FileText, label: "Blog Posts" },
                            { id: "live", icon: Zap, label: "Live Casino" },
                            { id: "sports", icon: Target, label: "Sportsbook" },
                            { id: "general", icon: Settings, label: "General Promos" },
                            { id: "banners", icon: LayoutTemplate, label: "Home Banners" },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id as any); setMobileMenuOpen(false); resetForm(); }}
                                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all group ${activeTab === item.id ? "bg-primary text-black shadow-[0_0_20px_rgba(255,228,145,0.15)]" : "text-gray-500 hover:bg-white/5 hover:text-white"}`}
                            >
                                <item.icon size={18} className={activeTab === item.id ? "text-black" : "group-hover:text-primary transition-colors"} />
                                <span className="font-bold uppercase tracking-widest text-xs">{item.label}</span>
                            </button>
                        ))}

                        <div className="pt-4 pb-2">
                            <p className="px-4 text-[10px] font-black uppercase tracking-widest text-gray-600">CMS Management</p>
                        </div>

                        {[
                            { id: "home", icon: Home, label: "Home Page" },
                            { id: "pages", icon: FileText, label: "Page Content" },
                            { id: "global", icon: Globe, label: "Global Settings" },
                            { id: "inbox", icon: Mail, label: "Inbox & Leads" },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id as any); setMobileMenuOpen(false); resetForm(); }}
                                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all group ${activeTab === item.id ? "bg-primary text-black shadow-[0_0_20px_rgba(255,228,145,0.15)]" : "text-gray-500 hover:bg-white/5 hover:text-white"}`}
                            >
                                <item.icon size={18} className={activeTab === item.id ? "text-black" : "group-hover:text-primary transition-colors"} />
                                <span className="font-bold uppercase tracking-widest text-xs">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="pt-8 border-t border-white/5 space-y-4">
                        <div className="bg-[#0a0a0a] rounded-2xl p-4 border border-white/5">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">System Status</span>
                            </div>
                            <p className="text-xs font-bold text-white">All Systems Operational</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
                        >
                            <LogOut size={16} />
                            <span>Secure Logout</span>
                        </button>
                    </div>
                </div>
            </aside>



            {/* Main Content Area */}
            <main className="flex-1 lg:ml-80 p-4 lg:p-10 min-w-0">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Top Bar (Mobile Toggle + Page Title) */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tight">
                                {activeTab === "blog" ? "Blog Management" :
                                    activeTab === "live" ? "Live Casino Promotions" :
                                        activeTab === "sports" ? "Sportsbook Promotions" :
                                            activeTab === "banners" ? "Homepage Banners" :
                                                activeTab === "home" ? "Home Page Manager" :
                                                    activeTab === "pages" ? "Page Content Editor" :
                                                        activeTab === "global" ? "Global Settings" :
                                                            activeTab === "inbox" ? "Inbox & Leads" :
                                                                "General Cards"}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {activeTab === "blog" ? "Create and Edit Articles" :
                                    activeTab === "home" ? "Featured Content & Diamond Lobby" :
                                        activeTab === "pages" ? "Edit Static Page Content" :
                                            activeTab === "global" ? "Site Meta & Contact Info" :
                                                activeTab === "inbox" ? "View Messages & Subscribers" :
                                                    "Manage Active Campaigns"}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Online</span>
                            </div>

                            <Link
                                href="/"
                                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full transition-all text-[10px] font-black uppercase tracking-widest"
                                target="_blank"
                            >
                                <span>View Site</span>
                                <ExternalLink size={14} />
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-full transition-all text-[10px] font-black uppercase tracking-widest"
                            >
                                <span>Logout</span>
                                <LogOut size={14} />
                            </button>

                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="lg:hidden p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            >
                                <LayoutDashboard size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Global Settings Content */}
                    {activeTab === "global" && siteSettings && (
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Contact Info */}
                                <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8">
                                    <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-tight flex items-center">
                                        <Globe size={20} className="mr-3 text-primary" />
                                        Contact Information
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Public Contact Email</label>
                                            <input
                                                type="email"
                                                value={siteSettings.contactEmail}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
                                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Public Phone Number</label>
                                            <input
                                                type="text"
                                                value={siteSettings.contactPhone}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, contactPhone: e.target.value })}
                                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Office Address</label>
                                            <textarea
                                                rows={3}
                                                value={siteSettings.address}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* System Settings */}
                                <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8">
                                    <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-tight flex items-center">
                                        <Settings size={20} className="mr-3 text-primary" />
                                        System Settings
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Admin Notification Email</label>
                                            <input
                                                type="email"
                                                value={siteSettings.adminEmail}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, adminEmail: e.target.value })}
                                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                            />
                                            <p className="text-xs text-gray-600 pl-2">System alerts will be sent here.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Lead Notification Email</label>
                                            <input
                                                type="email"
                                                value={siteSettings.notificationEmail}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, notificationEmail: e.target.value })}
                                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                            />
                                            <p className="text-xs text-gray-600 pl-2">Contact form submissions will be sent here.</p>
                                        </div>

                                        <div className="pt-6 border-t border-white/5">
                                            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Blog Categories</h4>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {blogCategories.map((cat, i) => (
                                                    <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-white flex items-center">
                                                        {cat}
                                                        <button
                                                            onClick={() => {
                                                                const newCats = blogCategories.filter(c => c !== cat);
                                                                setBlogCategories(newCats);
                                                                cms.blogCategories.save(newCats);
                                                            }}
                                                            className="ml-2 hover:text-red-500"
                                                        >
                                                            <X size={12} />
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex gap-2">
                                                <input
                                                    id="new-category"
                                                    type="text"
                                                    placeholder="Add Category"
                                                    className="bg-black border border-white/5 rounded-xl px-4 py-2 text-sm text-white focus:border-primary/50 focus:outline-none flex-1"
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            const val = e.currentTarget.value.trim();
                                                            if (val && !blogCategories.includes(val)) {
                                                                const newCats = [...blogCategories, val];
                                                                setBlogCategories(newCats);
                                                                cms.blogCategories.save(newCats);
                                                                e.currentTarget.value = "";
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={() => {
                                        cms.siteSettings.save(siteSettings);
                                        success("Global settings saved successfully!");
                                    }}
                                    className="bg-primary text-black font-black px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-lg shadow-primary/20 flex items-center space-x-2"
                                >
                                    <Save size={18} />
                                    <span>Save All Settings</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Inbox Content */}
                    {activeTab === "inbox" && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Messages */}
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-tight flex items-center">
                                    <MessageSquare size={20} className="mr-3 text-primary" />
                                    Contact Messages
                                </h3>
                                {contactMessages.length === 0 ? (
                                    <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-12 text-center text-gray-500">
                                        No messages received yet.
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {contactMessages.map((msg) => (
                                            <div key={msg.id} className={`bg-[#0a0a0a] rounded-2xl border ${msg.read ? 'border-white/5 opacity-70' : 'border-primary/30'} p-6 transition-all hover:bg-white/5`}>
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="text-white font-bold">{msg.subject}</h4>
                                                        <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">From: {msg.name} ({msg.email})</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-xs text-gray-500 font-mono">{msg.date}</span>
                                                        {!msg.read && (
                                                            <button
                                                                onClick={() => {
                                                                    cms.contactMessages.markRead(msg.id);
                                                                    setContactMessages(cms.contactMessages.get());
                                                                }}
                                                                className="block mt-2 text-[10px] text-primary hover:underline cursor-pointer"
                                                            >
                                                                Mark Read
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                                    {msg.message}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Subscribers */}
                            <div>
                                <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 sticky top-8">
                                    <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-tight flex items-center">
                                        <Users size={20} className="mr-3 text-primary" />
                                        Subscribers
                                    </h3>
                                    <div className="mb-6">
                                        <div className="text-4xl font-black text-white">{subscribers.length}</div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">Active Email Subs</p>
                                    </div>
                                    <div className="max-h-[500px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                                        {subscribers.map((email, i) => (
                                            <div key={i} className="flex items-center justify-between bg-black/50 p-3 rounded-xl border border-white/5">
                                                <span className="text-xs text-gray-300 font-mono">{email}</span>
                                                <button className="text-gray-600 hover:text-red-500">
                                                    <Trash2 size={12} />
                                                </button>
                                            </div>
                                        ))}
                                        {subscribers.length === 0 && (
                                            <p className="text-center text-gray-600 text-xs py-4">No subscribers yet.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Home Page Manager */}
                    {activeTab === "home" && (
                        <div className="space-y-12">
                            {/* Featured Content Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-[#0a0a0a] p-6 rounded-3xl border border-white/5">
                                    <h4 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Featured Items</h4>
                                    <div className="text-3xl font-black text-white">{featuredContent.length} / 3</div>
                                </div>
                                <div className="bg-[#0a0a0a] p-6 rounded-3xl border border-white/5">
                                    <h4 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Lobby Items</h4>
                                    <div className="text-3xl font-black text-white">{diamondLobby.length}</div>
                                </div>
                                <div className="bg-[#0a0a0a] p-6 rounded-3xl border border-white/5">
                                    <h4 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Blog Filter</h4>
                                    <div className="text-3xl font-black text-primary capitalize">{homeBlogSettings?.filterType}</div>
                                </div>
                            </div>

                            {/* Featured Content Editor */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight border-b border-white/5 pb-4">Featured Content Section</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {featuredContent.map((item, i) => (
                                        <div key={item.id} className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 relative group hover:border-primary/30 transition-all">
                                            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 w-auto bg-black/50 p-1 rounded-full">
                                                <button
                                                    onClick={() => {
                                                        const newContent = featuredContent.filter(c => c.id !== item.id);
                                                        setFeaturedContent(newContent);
                                                        cms.featuredContent.save(newContent);
                                                    }}
                                                    className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-full"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                            <div className="h-40 w-full relative rounded-2xl overflow-hidden mb-4 bg-black">
                                                <img src={item.image} className="object-cover w-full h-full opacity-60" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="bg-black/50 px-3 py-1 rounded text-xs text-white">Item {i + 1}</span>
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                                        </div>
                                    ))}
                                    {featuredContent.length < 3 && (
                                        <button
                                            className="bg-[#0a0a0a] border border-white/5 border-dashed rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-gray-600 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all min-h-[300px]"
                                            onClick={() => {
                                                const newItem: FeaturedContent = {
                                                    id: Date.now().toString(),
                                                    title: "New Featured Content",
                                                    description: "Description goes here...",
                                                    image: "/images/placeholder.jpg",
                                                    cta: "Explore",
                                                    link: "/promotions"
                                                };
                                                const newContent = [...featuredContent, newItem];
                                                setFeaturedContent(newContent);
                                                cms.featuredContent.save(newContent);
                                            }}
                                        >
                                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                                <Plus size={32} />
                                            </div>
                                            <span className="font-bold uppercase tracking-widest text-xs">Add Featured Item</span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Diamond Lobby Editor */}
                            <div className="space-y-6 pt-8 border-t border-white/5">
                                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight border-b border-white/5 pb-4">Diamond Lobby Items</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {diamondLobby.map((item) => (
                                        <div key={item.id} className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 relative group hover:border-primary/30 transition-all">
                                            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                                <button
                                                    onClick={() => {
                                                        const newLobby = diamondLobby.filter(l => l.id !== item.id);
                                                        setDiamondLobby(newLobby);
                                                        cms.diamondLobby.save(newLobby);
                                                    }}
                                                    className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-full"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                            <div className="aspect-square w-full relative rounded-2xl overflow-hidden mb-4 bg-black">
                                                <img src={item.image} className="object-cover w-full h-full" />
                                            </div>
                                            <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                                        </div>
                                    ))}
                                    <button
                                        className="bg-[#0a0a0a] border border-white/5 border-dashed rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-gray-600 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all aspect-square"
                                        onClick={() => {
                                            const newItem: DiamondLobbyItem = {
                                                id: Date.now().toString(),
                                                title: "New Lobby Game",
                                                description: "Description...",
                                                image: "/images/live-baccarat.png",
                                                link: "/live-casino"
                                            };
                                            const newLobby = [...diamondLobby, newItem];
                                            setDiamondLobby(newLobby);
                                            cms.diamondLobby.save(newLobby);
                                        }}
                                    >
                                        <Plus size={24} />
                                        <span className="text-[10px] font-bold uppercase">Add Game</span>
                                    </button>
                                </div>
                            </div>

                            {/* Blog Settings */}
                            <div className="space-y-6 pt-8 border-t border-white/5">
                                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight border-b border-white/5 pb-4">Home Blog Section</h3>
                                {homeBlogSettings && (
                                    <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 max-w-xl">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Section Title</label>
                                                <input
                                                    type="text"
                                                    value={homeBlogSettings.title}
                                                    onChange={(e) => setHomeBlogSettings({ ...homeBlogSettings, title: e.target.value })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Filter / Sort By</label>
                                                <select
                                                    value={homeBlogSettings.filterType}
                                                    onChange={(e) => setHomeBlogSettings({ ...homeBlogSettings, filterType: e.target.value as any })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                                >
                                                    <option value="latest">Latest Posts</option>
                                                    <option value="trending">Trending (Random for now)</option>
                                                    <option value="hottest">Hottest</option>
                                                </select>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    cms.homeBlog.save(homeBlogSettings);
                                                    success("Blog settings saved!");
                                                }}
                                                className="w-full bg-white/5 text-white font-bold py-4 rounded-xl hover:bg-primary hover:text-black transition-colors"
                                            >
                                                Save Settings
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}

                    {/* Page Content Editor */}
                    {activeTab === "pages" && (
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-1">
                                <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-4 sticky top-8">
                                    <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4 px-2">Select Page</h3>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setSelectedPage("live-casino")}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${selectedPage === "live-casino" ? "bg-primary text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                                        >
                                            Live Casino
                                        </button>
                                        <button
                                            onClick={() => setSelectedPage("contact")}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${selectedPage === "contact" ? "bg-primary text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                                        >
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                {selectedPage === "live-casino" && liveCasinoContent && (
                                    <div className="space-y-8">
                                        <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8">
                                            <h3 className="text-xl font-heading font-black text-white mb-6 uppercase tracking-tight">Introduction Section</h3>
                                            <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    value={liveCasinoContent.introTitle}
                                                    onChange={(e) => setLiveCasinoContent({ ...liveCasinoContent, introTitle: e.target.value })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-700"
                                                    placeholder="Section Title"
                                                />
                                                <textarea
                                                    rows={5}
                                                    value={liveCasinoContent.introContent}
                                                    onChange={(e) => setLiveCasinoContent({ ...liveCasinoContent, introContent: e.target.value })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all resize-none placeholder:text-gray-700"
                                                    placeholder="Content..."
                                                />
                                            </div>
                                        </div>

                                        <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8">
                                            <h3 className="text-xl font-heading font-black text-white mb-6 uppercase tracking-tight">HotRoad Section</h3>
                                            <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    value={liveCasinoContent.hotRoadTitle}
                                                    onChange={(e) => setLiveCasinoContent({ ...liveCasinoContent, hotRoadTitle: e.target.value })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-700"
                                                    placeholder="Section Title"
                                                />
                                                <textarea
                                                    rows={5}
                                                    value={liveCasinoContent.hotRoadContent}
                                                    onChange={(e) => setLiveCasinoContent({ ...liveCasinoContent, hotRoadContent: e.target.value })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all resize-none placeholder:text-gray-700"
                                                    placeholder="Content..."
                                                />
                                            </div>
                                        </div>

                                        <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8">
                                            <h3 className="text-xl font-heading font-black text-white mb-6 uppercase tracking-tight">Conclusion Section</h3>
                                            <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    value={liveCasinoContent.conclusionTitle}
                                                    onChange={(e) => setLiveCasinoContent({ ...liveCasinoContent, conclusionTitle: e.target.value })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-gray-700"
                                                    placeholder="Section Title"
                                                />
                                                <textarea
                                                    rows={5}
                                                    value={liveCasinoContent.conclusionContent}
                                                    onChange={(e) => setLiveCasinoContent({ ...liveCasinoContent, conclusionContent: e.target.value })}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all resize-none placeholder:text-gray-700"
                                                    placeholder="Content..."
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                onClick={() => {
                                                    cms.liveCasino.save(liveCasinoContent);
                                                    success("Page content updated successfully!");
                                                }}
                                                className="bg-primary text-black font-black px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-lg shadow-primary/20 flex items-center space-x-2"
                                            >
                                                <Save size={18} />
                                                <span>Save Page Content</span>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {selectedPage === "contact" && (
                                    <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-12 text-center">
                                        <p className="text-gray-500">Contact page content is managed via <strong>Global Settings</strong>.</p>
                                        <button
                                            onClick={() => setActiveTab('global')}
                                            className="mt-4 text-primary font-bold hover:underline"
                                        >
                                            Go to Global Settings
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Existing Tab Content Logic ... */}
                    {activeTab !== "global" && activeTab !== "home" && activeTab !== "inbox" && activeTab !== "pages" && (
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                            {/* Stats Overview */}
                            <div className="xl:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { label: "Active Blog Posts", value: blogPosts.length, icon: FileText, color: "bg-blue-500", textColor: "text-blue-500" },
                                    { label: "Live Promotions", value: livePromos.length, icon: Zap, color: "bg-purple-500", textColor: "text-purple-500" },
                                    { label: "Sports Campaigns", value: sportsPromos.length, icon: Target, color: "bg-green-500", textColor: "text-green-500" },
                                    { label: "Active Banners", value: homeBanners.length, icon: LayoutTemplate, color: "bg-orange-500", textColor: "text-orange-500" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors"
                                    >
                                        <div className={`absolute top-0 right-0 p-32 ${stat.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity`} />
                                        <div className="flex items-center gap-4 relative">
                                            <div className={`w-12 h-12 rounded-2xl ${stat.color}/10 flex items-center justify-center ${stat.textColor} group-hover:scale-110 transition-transform`}>
                                                <stat.icon size={24} className={stat.textColor} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                                                <div className="text-3xl font-black text-white">{stat.value}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            {/* Editor Section - Left/Top on large screens */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="xl:col-span-12 2xl:col-span-5 space-y-8"
                            >
                                <div className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group/form hover:border-primary/20 transition-colors duration-500">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover/form:opacity-100 transition-opacity duration-700" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-3">
                                                {editingId ? <Edit size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                                                {editingId ? "Edit Entry" : "Create New"}
                                            </h3>
                                            {editingId && (
                                                <button onClick={resetForm} className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
                                                    <X size={14} /> Cancel
                                                </button>
                                            )}
                                        </div>

                                        <form onSubmit={handleCreate} className="space-y-6">
                                            <div className="md:col-span-2 space-y-2">
                                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Headline</label>
                                                <input
                                                    type="text"
                                                    value={activeTab === "banners" ? bannerTitle : title}
                                                    onChange={(e) => activeTab === "banners" ? setBannerTitle(e.target.value) : setTitle(e.target.value)}
                                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 font-bold"
                                                    placeholder={activeTab === "blog" ? "Enter article headline..." : "Enter title..."}
                                                />
                                            </div>

                                            {activeTab === "blog" && (
                                                <>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Author</label>
                                                        <input
                                                            type="text"
                                                            value={author}
                                                            onChange={(e) => setAuthor(e.target.value)}
                                                            className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                                            placeholder="e.g. Elite Staff"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Read Time</label>
                                                        <input
                                                            type="text"
                                                            value={readTime}
                                                            onChange={(e) => setReadTime(e.target.value)}
                                                            className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                                            placeholder="e.g. 5 Min Read"
                                                        />
                                                    </div>
                                                </>
                                            )}

                                            {activeTab !== "blog" && activeTab !== "banners" && (
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Badge Text</label>
                                                    <input
                                                        type="text"
                                                        value={subtitle}
                                                        onChange={(e) => setSubtitle(e.target.value)}
                                                        className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                                        placeholder="e.g. 100% Bonus, Free Bet"
                                                    />
                                                </div>
                                            )}

                                            {activeTab === "banners" && (
                                                <div className="flex items-center gap-3 ml-1 bg-white/5 p-3 rounded-lg border border-white/5">
                                                    <input
                                                        type="checkbox"
                                                        id="imageOnly"
                                                        checked={bannerImageOnly}
                                                        onChange={(e) => setBannerImageOnly(e.target.checked)}
                                                        className="w-4 h-4 accent-primary rounded cursor-pointer"
                                                    />
                                                    <label htmlFor="imageOnly" className="text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer select-none">Image Only Mode (No Text Overlay)</label>
                                                </div>
                                            )}

                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">
                                                    {activeTab === "blog" ? "Main Article Content" : activeTab === "banners" ? "Description" : "Description"}
                                                </label>
                                                <div className="relative">
                                                    <textarea
                                                        value={activeTab === "banners" ? bannerDesc : content}
                                                        onChange={(e) => activeTab === "banners" ? setBannerDesc(e.target.value) : setContent(e.target.value)}
                                                        className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 min-h-[150px]"
                                                        placeholder={activeTab === "blog" ? "Type the full article content here..." : "Enter description..."}
                                                    />
                                                    {activeTab === "blog" && (
                                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20">
                                                            <motion.div
                                                                className="h-full bg-primary"
                                                                initial={{ width: "0%" }}
                                                                animate={{ width: `${Math.min(content.length / 500, 100)}%` }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {activeTab === "blog" && (
                                                <div className="md:col-span-2 space-y-6 pt-6 border-t border-white/5">
                                                    <h4 className="text-primary font-heading uppercase tracking-widest text-sm">Insider Briefing (Highlight Box)</h4>
                                                    <div className="space-y-2">
                                                        <textarea
                                                            value={highlightBox}
                                                            onChange={(e) => setHighlightBox(e.target.value)}
                                                            className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 min-h-[100px]"
                                                            placeholder="Enter highlight text (Quote)..."
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Sub-Section Heading</label>
                                                            <input
                                                                type="text"
                                                                value={subHeading}
                                                                onChange={(e) => setSubHeading(e.target.value)}
                                                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                                                placeholder="e.g. Operational Execution"
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Footer Note</label>
                                                            <input
                                                                type="text"
                                                                value={footerNote}
                                                                onChange={(e) => setFooterNote(e.target.value)}
                                                                className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                                                placeholder="Confidentiality Note..."
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="md:col-span-2 space-y-2">
                                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Sub-Section Content</label>
                                                        <textarea
                                                            value={subContent}
                                                            onChange={(e) => setSubContent(e.target.value)}
                                                            className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 min-h-[150px]"
                                                            placeholder="Content for the sub-section..."
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab !== "banners" && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2">
                                                    {/* Category Selection for Blog */}
                                                    {activeTab === "blog" && (
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Category</label>
                                                            <div className="flex gap-2 flex-wrap">
                                                                {["News", "Guides", "Gaming Tips", "Strategies"].map((cat) => (
                                                                    <button
                                                                        key={cat}
                                                                        type="button"
                                                                        onClick={() => setCategory(cat)}
                                                                        className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${category === cat ? "bg-primary text-black shadow-lg shadow-primary/20" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
                                                                    >
                                                                        {cat}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">CTA Button Text</label>
                                                        <input
                                                            type="text"
                                                            value={btnText}
                                                            onChange={(e) => setBtnText(e.target.value)}
                                                            className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                                            placeholder="Button Label"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">CTA Link</label>
                                                        <input
                                                            type="text"
                                                            value={btnUrl}
                                                            onChange={(e) => setBtnUrl(e.target.value)}
                                                            className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10"
                                                            placeholder="/page-url"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Visual Asset</label>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="relative group">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageUpload} // Direct upload still available
                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                        />
                                                        <div className="bg-black border border-white/5 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-4 group-hover:bg-white/5 transition-all h-full">
                                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
                                                                <Upload size={20} />
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Upload New</span>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => setMediaLibraryOpen(true)}
                                                        className="bg-black border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                                                    >
                                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                            <Archive size={20} />
                                                        </div>
                                                        <span className="text-xs font-bold uppercase tracking-widest">Select from Library</span>
                                                    </button>
                                                </div>
                                                {image && (
                                                    <div className="mt-4 relative rounded-2xl overflow-hidden border border-white/10 group">
                                                        <img src={image} alt="Preview" className="w-full h-48 object-cover" />
                                                        <button
                                                            type="button"
                                                            onClick={() => setImage("")}
                                                            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="pt-4 md:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="w-full bg-primary text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:shadow-[0_0_30px_rgba(255,228,145,0.3)] transition-all flex items-center justify-center gap-3"
                                                >
                                                    <Plus size={20} />
                                                    <span>{editingId ? "Update Entry" : "Create Entry"}</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </motion.div>

                            {/* List Section - Right/Bottom on large screens */}
                            <div className="xl:col-span-12 2xl:col-span-7 space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                    <h3 className="text-xl font-heading font-black text-white uppercase tracking-wider flex items-center gap-3">
                                        <LayoutDashboard size={20} className="text-gray-500" />
                                        Active Entries
                                    </h3>
                                    <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                        {(activeTab === "blog" ? blogPosts : activeTab === "live" ? livePromos : activeTab === "sports" ? sportsPromos : activeTab === "banners" ? homeBanners : generalPromos).length} Items
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 gap-4">
                                    <AnimatePresence mode="popLayout">
                                        {(activeTab === "blog" ? blogPosts : activeTab === "live" ? livePromos : activeTab === "sports" ? sportsPromos : activeTab === "banners" ? homeBanners : generalPromos).length === 0 ? (
                                            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.02]">
                                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600">
                                                    <FileText size={24} />
                                                </div>
                                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">No Active Data Found</p>
                                            </div>
                                        ) : (
                                            (activeTab === "blog" ? blogPosts : activeTab === "live" ? livePromos : activeTab === "sports" ? sportsPromos : activeTab === "banners" ? homeBanners : generalPromos).map((item: any) => (
                                                <motion.div
                                                    key={item.id}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    layout
                                                    className="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-4 pr-6 flex gap-6 hover:border-primary/20 transition-all group/item items-start"
                                                >
                                                    <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-black border border-white/5 relative mt-1">
                                                        <img src={item.image || "/placeholder.jpg"} className="w-full h-full object-cover" alt="" />
                                                        {item.discount && (
                                                            <div className="absolute top-0 right-0 bg-primary text-black text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                                                                {item.discount}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex-1 min-w-0 py-1">
                                                        <div className="flex items-start justify-between gap-4 mb-2">
                                                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">
                                                                {item.category || (activeTab === "live" ? "Live Promo" : activeTab === "sports" ? "Sports Promo" : activeTab === "banners" ? "Home Banner" : "General Promo")}
                                                            </span>
                                                            <div className="flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                                <button
                                                                    onClick={() => startEditing(item)}
                                                                    className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-primary transition-colors"
                                                                    title="Edit"
                                                                >
                                                                    <Edit size={14} />
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDelete(item.id)}
                                                                    className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                                                    title="Delete"
                                                                >
                                                                    <Trash2 size={14} />
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <h4 className="text-white font-bold truncate pr-4 mb-1">{item.title}</h4>
                                                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                                                            {item.excerpt || item.description || "No description provided."}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Media Library Modal */}
            <AnimatePresence>
                {mediaLibraryOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
                        >
                            <div className="p-8 border-b border-white/10 flex items-center justify-between bg-black">
                                <div>
                                    <h3 className="text-2xl font-black text-white uppercase font-heading tracking-widest">Media Archive</h3>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Select or Manage Assets</p>
                                </div>
                                <button onClick={() => setMediaLibraryOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {/* Upload New Card */}
                                    <div className="aspect-square relative group cursor-pointer">
                                        <input type="file" onChange={handleLibraryUpload} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                        <div className="w-full h-full bg-white/5 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 group-hover:bg-white/10 group-hover:border-primary/50 transition-all">
                                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-gray-500 group-hover:text-primary transition-colors">
                                                <Upload size={20} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">Upload New</span>
                                        </div>
                                    </div>

                                    {systemImages.map((img, idx) => (
                                        <div key={idx} className="aspect-square relative group rounded-2xl overflow-hidden bg-black border border-white/5">
                                            <img
                                                src={img}
                                                alt=""
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                onClick={() => {
                                                    setImage(img);
                                                    setMediaLibraryOpen(false);
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                                                <button
                                                    onClick={() => {
                                                        setImage(img);
                                                        setMediaLibraryOpen(false);
                                                    }}
                                                    className="px-6 py-2 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                                                >
                                                    Select
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLibraryDelete(img);
                                                    }}
                                                    className="p-3 bg-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                            {activeImages.includes(img) && (
                                                <div className="absolute top-2 right-2 bg-green-500 text-black text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest">
                                                    In Use
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-80 bg-[#0f0f0f] border-r border-white/10 z-[60] lg:hidden overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Menu</h2>
                                    </div>
                                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-white">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="space-y-8">
                                    {/* Content Management */}
                                    <div className="space-y-3">
                                        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-3">Content</h3>
                                        <div className="space-y-1">
                                            <button
                                                onClick={() => { setActiveTab("blog"); resetForm(); setMobileMenuOpen(false); }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold uppercase text-[11px] tracking-widest ${activeTab === "blog" ? "bg-primary text-black" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                                            >
                                                <FileText size={18} />
                                                <span>Blog Details</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Promotions */}
                                    <div className="space-y-3">
                                        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-3">Promotions</h3>
                                        <div className="space-y-1">
                                            <button
                                                onClick={() => { setActiveTab("live"); resetForm(); setMobileMenuOpen(false); }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold uppercase text-[11px] tracking-widest ${activeTab === "live" ? "bg-primary text-black" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                                            >
                                                <Gift size={18} /> Live Casino
                                            </button>
                                            <button
                                                onClick={() => { setActiveTab("sports"); resetForm(); setMobileMenuOpen(false); }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold uppercase text-[11px] tracking-widest ${activeTab === "sports" ? "bg-primary text-black" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                                            >
                                                <Trophy size={18} /> Sportsbook
                                            </button>
                                            <button
                                                onClick={() => { setActiveTab("general"); resetForm(); setMobileMenuOpen(false); }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold uppercase text-[11px] tracking-widest ${activeTab === "general" ? "bg-primary text-black" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                                            >
                                                <LayoutDashboard size={18} /> Promo Cards
                                            </button>
                                        </div>
                                    </div>

                                    {/* Look & Feel */}
                                    <div className="space-y-3">
                                        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-3">Appearance</h3>
                                        <div className="space-y-1">
                                            <button
                                                onClick={() => { setActiveTab("banners"); resetForm(); setMobileMenuOpen(false); }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold uppercase text-[11px] tracking-widest ${activeTab === "banners" ? "bg-primary text-black" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                                            >
                                                <ImageIcon size={18} /> Banners
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-6 right-6">
                                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-red-500/20 text-red-500 hover:bg-red-500/10 rounded-2xl transition-all text-xs font-black uppercase tracking-widest">
                                        <LogOut size={16} />
                                        <span>Secure Logout</span>
                                    </button>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

