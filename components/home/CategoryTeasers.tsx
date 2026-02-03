import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        title: "Sport Betting",
        description: "Do you want to maximize winnings and payouts as much as possible with your sports betting journey? Then rely on BigWin959 Online Casino Bangladesh’s expert insights and strategies available in its sports betting section. Besides expect a dynamic and interactive experience with its wide range of sports offered, availability of live streaming, support for major tournaments around the world, competitive odds, and amazing promotions.",
        image: "/images/hero-sports.png",
        cta: "Place your Bet",
        link: "/sportsbook",
    },
    {
        title: "Slots",
        description: "Big rewards and winning await you at BigWin959 Online Casino Bangladesh’s exciting slots. Whether you are a seasoned enthusiast or just a casual player, there is a wide collection of slot titles for you to check out! Plus, BigWin959, such as Baji Live Net Casino and Jeetwin Online Casino, is known for featuring slots from reputable and well-known game providers; hence, its collection of exceptional lists of slot games for its valued customers.",
        image: "/images/hero-slots.png",
        cta: "Start Spinning",
        link: "/slots",
    },
    {
        title: "Live Casino with BigWin959",
        description: "If there are sports betting and slot games, of course, there are also live casinos to add to your destinations when exploring the glories of BigWin959 Online Casino. Enjoy Banglabet’s incredible live casino games featuring its excellent and engaging live dealer services to bring your gameplay experience to new heights!",
        image: "/images/hero-live.png",
        cta: "Play Live Now",
        link: "/live-casino",
    },
];

export default function CategoryTeasers() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container-custom space-y-16">
                {categories.map((cat, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4 text-primary">{cat.title}</h2>
                            <p className="text-text mb-6 text-sm">{cat.description}</p>
                            <Link href={cat.link} className="btn-outline">
                                {cat.cta}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
