import Image from "next/image";
import Link from "next/link";

export default function PromotionsPreview() {
    return (
        <section className="py-20 bg-background">
            <div className="container-custom">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white/5 shadow-2xl relative overflow-hidden group">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="w-full md:w-2/3 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase font-heading tracking-tight">
                            Exhilarating <span className="text-primary">Promotions</span>
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-2xl">
                            Banglabet88 is your premier destination for elite bonuses. Whether you're a newcomer or a high-roller, our curated rewards are designed to amplify your winning potential.
                        </p>
                        <Link href="/promotions" className="inline-flex items-center px-10 py-4 bg-primary !text-white font-bold rounded-sm hover:bg-red-700 transition-all uppercase tracking-widest text-sm shadow-xl shadow-red-600/20">
                            See All Promotions
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 relative h-72 rounded-xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-primary/50 transition-colors duration-500">
                        <Image src="/images/banner-special-promo.png" alt="Promotions" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
