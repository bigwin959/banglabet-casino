"use client";

import { useState, useEffect } from "react";

// Mock Data for "Real" Matches (Fallback & Other Sports)
const sportsData: Record<string, any[]> = {
    Football: [
        { id: 1, league: "Premier League", home: "Manchester City", away: "Arsenal", time: "67'", score: "2 - 1", odds: { home: 1.85, draw: 3.40, away: 4.20 } },
        { id: 2, league: "La Liga", home: "Real Madrid", away: "Barcelona", time: "34'", score: "0 - 0", odds: { home: 2.10, draw: 3.50, away: 3.10 } },
        { id: 3, league: "Serie A", home: "Juventus", away: "AC Milan", time: "89'", score: "1 - 1", odds: { home: 3.05, draw: 2.80, away: 2.90 } },
        { id: 4, league: "Bundesliga", home: "Bayern Munich", away: "Dortmund", time: "12'", score: "1 - 0", odds: { home: 1.55, draw: 4.50, away: 5.50 } },
        { id: 5, league: "Ligue 1", home: "PSG", away: "Marseille", time: "HT", score: "2 - 0", odds: { home: 1.30, draw: 5.50, away: 8.00 } },
    ],
    Cricket: [
        { id: 11, league: "IPL", home: "Chennai Super Kings", away: "Mumbai Indians", time: "14.2 ov", score: "145/3", odds: { home: 1.70, draw: null, away: 2.10 } },
        { id: 12, league: "T20 World Cup", home: "India", away: "Australia", time: "18.5 ov", score: "189/6", odds: { home: 1.50, draw: null, away: 2.50 } },
        { id: 13, league: "Big Bash", home: "Sydney Sixers", away: "Perth Scorchers", time: "2nd Inn", score: "45/0", odds: { home: 1.90, draw: null, away: 1.90 } },
    ],
    Basketball: [
        { id: 21, league: "NBA", home: "Lakers", away: "Warriors", time: "Q3 04:30", score: "89 - 86", odds: { home: 1.80, draw: null, away: 2.05 } },
        { id: 22, league: "EuroLeague", home: "Real Madrid", away: "Olympiacos", time: "Q4 01:12", score: "78 - 76", odds: { home: 1.65, draw: null, away: 2.25 } },
    ],
    Tennis: [
        { id: 31, league: "Wimbledon", home: "Djokovic N.", away: "Alcaraz C.", time: "Set 3", score: "6-4, 4-6, 2-1", odds: { home: 1.95, draw: null, away: 1.85 } },
        { id: 32, league: "US Open", home: "Sinner J.", away: "Medvedev D.", time: "Set 1", score: "5 - 5", odds: { home: 1.75, draw: null, away: 2.10 } },
    ]
};

const sportIcons: Record<string, string> = {
    Football: "⚽",
    Cricket: "🏏",
    Basketball: "🏀",
    Tennis: "🎾"
};

interface TheSportsDBEvent {
    idEvent: string;
    strEvent: string;
    strLeague: string;
    strHomeTeam: string;
    strAwayTeam: string;
    dateEvent: string;
    strTime: string;
    strThumb?: string;
}

export default function LiveMatches() {
    const [activeSport, setActiveSport] = useState("Football");
    const [matches, setMatches] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch Data
    useEffect(() => {
        const fetchMatches = async () => {
            setIsLoading(true);

            if (activeSport === "Football") {
                try {
                    // Fetch Next 5 Events for Premier League (ID: 4328)
                    const res = await fetch("https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=4328");
                    const data = await res.json();

                    if (data && data.events) {
                        const apiMatches = data.events.slice(0, 10).map((event: TheSportsDBEvent) => ({
                            id: event.idEvent,
                            league: event.strLeague,
                            home: event.strHomeTeam,
                            away: event.strAwayTeam,
                            time: event.strTime.substring(0, 5), // 'HH:MM'
                            score: "VS", // Upcoming matches don't have scores
                            odds: {
                                home: (Math.random() * 2 + 1.1).toFixed(2),
                                draw: (Math.random() * 3 + 2.5).toFixed(2),
                                away: (Math.random() * 5 + 3.0).toFixed(2)
                            },
                            isUpcoming: true
                        }));
                        setMatches(apiMatches);
                    } else {
                        // Fallback
                        setMatches(sportsData["Football"]);
                    }
                } catch (error) {
                    console.error("Failed to fetch matches:", error);
                    setMatches(sportsData["Football"]);
                }
            } else {
                // Use Mock Data for other sports
                setMatches(sportsData[activeSport] || []);
            }

            setIsLoading(false);
        };

        fetchMatches();
    }, [activeSport]);

    // Simulate "Live" time updates for MOCK data only
    useEffect(() => {
        if (activeSport === "Football") return; // Don't animate API data

        const interval = setInterval(() => {
            setMatches(prev => prev.map(match => {
                return match;
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, [activeSport]);

    return (
        <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-heading pl-4 border-l-4 border-cta">
                        {activeSport === "Football" ? "Upcoming Premier League" : "Live Matches"}
                    </h2>

                    {/* Sport Filter Tabs */}
                    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                        {Object.keys(sportsData).map(sport => (
                            <button
                                key={sport}
                                onClick={() => setActiveSport(sport)}
                                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all
                                    ${activeSport === sport
                                        ? "bg-cta text-white shadow-lg shadow-cta/20"
                                        : "bg-background/80 text-text/70 border border-primary/20 hover:border-cta hover:text-cta"
                                    }`}
                            >
                                <span className="mr-2">{sportIcons[sport]}</span>
                                {sport}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-background/80 border border-primary/20 rounded-xl overflow-hidden shadow-2xl">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-primary/10 font-heading text-sm text-primary font-bold tracking-wider">
                        <div className="col-span-12 md:col-span-5">Match Details</div>
                        <div className="col-span-2 text-center">Score</div>
                        <div className="col-span-5 grid grid-cols-3 gap-2 text-center">
                            <div>1</div>
                            <div>X</div>
                            <div>2</div>
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-primary/10">
                        {isLoading ? (
                            <div className="p-8 text-center text-gray-500 animate-pulse">
                                Loading matches...
                            </div>
                        ) : matches.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">
                                No matches found at the moment.
                            </div>
                        ) : (
                            matches.map((match) => (
                                <div
                                    key={match.id}
                                    className="grid grid-cols-12 gap-y-4 md:gap-4 p-4 hover:bg-white/5 transition-colors items-center group relative overflow-hidden"
                                >
                                    {/* Live Indicator Line - Only for Live Matches */}
                                    {!match.isUpcoming && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cta to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    )}

                                    {/* Match Info */}
                                    <div className="col-span-12 md:col-span-5 flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl shrink-0">
                                            {sportIcons[activeSport]}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center text-xs text-text/50 mb-1 space-x-2">
                                                {match.isUpcoming ? (
                                                    <span className="text-primary font-bold">UPCOMING</span>
                                                ) : (
                                                    <span className="text-cta font-bold animate-pulse">LIVE</span>
                                                )}
                                                <span>•</span>
                                                <span>{match.league}</span>
                                                <span>•</span>
                                                <span className="font-mono">{match.time}</span>
                                            </div>
                                            <div className="font-bold text-white text-base md:text-lg leading-tight">
                                                <span className="block">{match.home}</span>
                                                <span className="block text-text/50 text-xs my-0.5">vs</span>
                                                <span className="block">{match.away}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Score (Mobile: Inline / Desktop: Center) */}
                                    <div className="col-span-12 md:col-span-2 flex md:justify-center items-center">
                                        <div className={`
                                            px-4 py-2 rounded-lg border font-mono font-bold text-xl tracking-widest shadow-inner relative
                                            ${match.isUpcoming ? 'bg-white/5 border-white/5 text-gray-400' : 'bg-black/50 border-white/5 text-cta'}
                                        `}>
                                            {match.score}
                                            {!match.isUpcoming && (
                                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Odds */}
                                    <div className="col-span-12 md:col-span-5 grid grid-cols-3 gap-2">
                                        <button className="bg-background hover:bg-primary hover:text-white border border-primary/20 rounded-lg py-2 flex flex-col items-center justify-center transition-all group/btn">
                                            <span className="text-xs text-text/50 group-hover/btn:text-white/70 mb-0.5">1</span>
                                            <span className="font-bold font-mono">{Number(match.odds.home).toFixed(2)}</span>
                                        </button>


                                        {match.odds.draw ? (
                                            <button className="bg-background hover:bg-primary hover:text-white border border-primary/20 rounded-lg py-2 flex flex-col items-center justify-center transition-all group/btn">
                                                <span className="text-xs text-text/50 group-hover/btn:text-white/70 mb-0.5">X</span>
                                                <span className="font-bold font-mono">{Number(match.odds.draw).toFixed(2)}</span>
                                            </button>
                                        ) : (
                                            <div className="bg-transparent flex items-center justify-center text-text/20 cursor-not-allowed">
                                                -
                                            </div>
                                        )}

                                        <button className="bg-background hover:bg-primary hover:text-white border border-primary/20 rounded-lg py-2 flex flex-col items-center justify-center transition-all group/btn">
                                            <span className="text-xs text-text/50 group-hover/btn:text-white/70 mb-0.5">2</span>
                                            <span className="font-bold font-mono">{Number(match.odds.away).toFixed(2)}</span>
                                        </button>
                                    </div>
                                </div>
                            )))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button className="btn-secondary px-8">View All {activeSport} Matches</button>
                </div>
            </div>
        </section>
    );
}
