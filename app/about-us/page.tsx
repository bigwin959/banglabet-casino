import { Shield, Users, Award, Headphones } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const features = [
        {
            icon: Shield,
            title: "Secure & Trusted",
            description: "We use state-of-the-art encryption combined with accredited payment processing to ensure your data and funds are always safe."
        },
        {
            icon: Users,
            title: "Community Focused",
            description: "BigWin959 is built for the community. We value our players and strive to provide the most engaging social gaming experience."
        },
        {
            icon: Award,
            title: "Certified Fair Play",
            description: "All our games are independently tested and certified for fairness. We operate under strict regulatory compliance."
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Our dedicated support team is available round the clock to assist you with any questions or concerns you might have."
        }
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background z-0"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-heading mb-6 neon-glow leading-tight">
                            Redefining Online <br /><span className="text-cta">Entertainment</span>
                        </h1>
                        <p className="text-xl text-text/80 mb-8">
                            BigWin959 is Bangladesh's premier online gaming destination,
                            offering a world-class casino and sports betting experience tailored for you.
                        </p>
                        <div className="flex space-x-4">
                            <div className="text-center">
                                <div className="text-3xl font-heading text-primary">5+</div>
                                <div className="text-sm text-text/60">Years Experience</div>
                            </div>
                            <div className="w-px bg-text/20"></div>
                            <div className="text-center">
                                <div className="text-3xl font-heading text-primary">1M+</div>
                                <div className="text-sm text-text/60">Happy Players</div>
                            </div>
                            <div className="w-px bg-text/20"></div>
                            <div className="text-center">
                                <div className="text-3xl font-heading text-primary">24/7</div>
                                <div className="text-sm text-text/60">Live Support</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface shadow-2xl flex items-center justify-center group">
                            <Image 
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000514/Security-Technology.png"
                                alt="Security Technology"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#111] border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl group hover:border-primary/50 transition-colors">
                            <Shield className="text-primary mb-2 group-hover:scale-110 transition-transform" size={32} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-center text-gray-500">Secured BY<br/>959 SHIELD</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 px-4 bg-background/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-heading text-center mb-8 text-primary">
                        Our Mission
                    </h2>
                    <p className="text-xl text-text/80 leading-relaxed">
                        "To provide a safe, exciting, and innovative gaming platform where players can
                        enjoy premium entertainment with complete peace of mind. We are committed to
                        responsible gaming and setting the highest standards in the industry."
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
                        {features.map((feature, index) => (
                            <div key={index} className="card text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-heading mb-4 text-white">{feature.title}</h3>
                                <p className="text-text/70 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-cta/20 crt-scanlines">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-heading mb-6 text-white">
                        Join Our Community Today
                    </h2>
                    <p className="text-lg text-text/80 mb-8">
                        Experience the difference with BigWin959. Sign up now and claim your welcome bonus.
                    </p>
                    <button className="btn-primary neon-glow-cta px-8 py-3">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
}
