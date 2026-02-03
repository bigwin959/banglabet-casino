import Image from "next/image";
import Link from "next/link";

export default function PromotionsPreview() {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-yellow-100 shadow-sm">
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-4 text-heading">Exciting Promotions at BigWin959</h2>
                        <p className="text-text mb-8">
                            BigWin959 Online Casino is your go-to casino platform when it comes to bonuses and promotions. Whether you are a newbie or a seasoned one, there are rewarding offers for you. So, be sure to take advantage of each of these promotions for spectacular payouts!
                        </p>
                        <Link href="/promotion" className="btn-primary bg-orange-500 hover:bg-orange-600 border-none">
                            See All Promotions
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 relative h-64 rounded-lg overflow-hidden shadow-md">
                        {/* Using the promo banner image generated */}
                        <Image src="/images/hero-promo.png" alt="Promotions" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
