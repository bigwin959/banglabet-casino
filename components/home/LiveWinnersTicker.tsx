"use client";

const winners = [
    { user: "Player 92***", amount: "৳45,000", game: "Dragon Tiger" },
    { user: "Player 17***", amount: "৳1,20,000", game: "Baccarat" },
    { user: "Player 05***", amount: "৳78,500", game: "Roulette" },
    { user: "Player 38***", amount: "৳2,50,000", game: "Slots" },
    { user: "Player 61***", amount: "৳32,000", game: "Live Poker" },
    { user: "Player 84***", amount: "৳5,00,000", game: "Jackpot" },
    { user: "Player 29***", amount: "৳15,750", game: "Blackjack" },
    { user: "Player 73***", amount: "৳98,000", game: "Andar Bahar" },
    { user: "Player 46***", amount: "৳3,60,000", game: "Crash Game" },
    { user: "Player 11***", amount: "৳67,500", game: "Teen Patti" },
];

export default function LiveWinnersTicker() {
    const doubled = [...winners, ...winners]; // duplicate for seamless loop

    return (
        <div className="w-full bg-black/60 border-y border-primary/20 overflow-hidden py-3 relative">
            {/* Fade left */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            {/* Fade right */}
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* Label */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 bg-primary px-3 py-1 rounded-full shadow-[0_0_12px_rgba(255,228,145,0.4)]">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-black uppercase tracking-widest whitespace-nowrap">
                    Live Wins
                </span>
            </div>

            <div className="flex items-center ticker-track pl-28" style={{ animation: "tickerScroll 40s linear infinite" }}>
                {doubled.map((w, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 mx-8 whitespace-nowrap shrink-0"
                    >
                        <span className="text-sm font-bold text-white/70">{w.user}</span>
                        <span className="text-xs text-white/40">won</span>
                        <span className="text-sm font-black text-primary">{w.amount}</span>
                        <span className="text-xs text-white/40">on</span>
                        <span className="text-sm font-bold text-white/70">{w.game}</span>
                        <span className="text-white/20 ml-4">•</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-track {
          display: flex;
          width: max-content;
        }
      `}</style>
        </div>
    );
}
