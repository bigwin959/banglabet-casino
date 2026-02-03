import Link from "next/link";

export default function HeroIntro() {
    return (
        <section className="py-12 bg-white text-center">
            <div className="container-custom">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-heading">
                    Win Like a Pro with BigWin959 and Come out on TOP!
                </h1>
                <p className="text-text mb-4 leading-relaxed max-w-4xl mx-auto">
                    BigWin959 Online Casino is home to gameplay services and products that are on a world-class level. It employs strategies and tools to continually provide unmatched live and online casino experiences for its customers. What’s more, by simply completing its live casino login, one is sure to win with how BigWin959 prioritizes a professional and enthusiastic environment.
                </p>
                <div className="mt-8">
                    <Link href="/register" className="btn-primary inline-block text-lg">
                        Sign Up Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
