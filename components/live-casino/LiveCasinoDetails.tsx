"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cms, PageContentLiveCasino } from "@/lib/cms";

export default function LiveCasinoDetails() {
    const [content, setContent] = useState<PageContentLiveCasino | null>(null);

    useEffect(() => {
        setContent(cms.liveCasino.get());
    }, []);

    const defaultContent = {
        introTitle: "Live Casino",
        introContent: "Through the immersive services of stunning live dealers paired with high-definition video streams delivering an almost realistic casino environment, live casinos never fail to attract casino enthusiasts, no matter their preferences and budgets. Live casinos had just become prettily sophisticated with the combination of modern trends, tools, and strategies. With all this fun and excitement within the casino realm, BigWin959 ensures to bring its customers to an equally thrilling setting with just a simple tap on BigWin959 live casino login. With BigWin959 partnerships with leading game providers, they equip their selection of live casinos with nothing but pure excellence. Learn more about these astounding game providers below!",
        hotRoadTitle: "HotRoad",
        hotRoadContent: "Despite being relatively new to the world of online gambling, BigWin959 and Live Casino login include HotRoad in their formidable lineup of game providers, given how truly exceptional HotRoad products are. Expanding its offers to include sports betting o options, live dealer choices, and casino games, HotRoad delivers the best by going through players’ lenses.",
        conclusionTitle: "Conclusion",
        conclusionContent: "BigWin959 never falls short in offering games, especially with the help of its impressive list of game providers. Whether that’s Evolution, Playtech, HotRoad, or Sexy Gaming, expect a ride full of rushes through BigWin959 platform!"
    };

    const display = content || defaultContent;

    return (
        <section className="py-16 px-4 bg-background text-text">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Live Casino Intro */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-primary">{display.introTitle}</h2>
                    <p className="leading-relaxed whitespace-pre-line">
                        {display.introContent}
                    </p>
                </div>

                {/* HotRoad */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-heading font-semibold text-heading">{display.hotRoadTitle}</h3>
                    <p className="leading-relaxed whitespace-pre-line">
                        {display.hotRoadContent}
                    </p>
                    {/* Hardcoded list for now as it makes sense to stay static or needs schema update */}
                    <p className="leading-relaxed">Here are some general overviews of HotRoad:</p>
                    <ul className="list-disc pl-6 space-y-4">
                        <li>
                            <strong>Licensing and Regulation:</strong> HotRoads ensures to adhere to regulations in operating. It also emphasizes transparency, especially in its terms and services and privacy policies.
                        </li>
                        <li>
                            <strong>Technology and Key Features:</strong> HotRoad never gets behind in employing updated technologies to advance its services and products, like the availability of live streaming, resources, and other.
                        </li>
                        <li>
                            <strong>Market Range:</strong> HotRoad caters to a variety of audiences by mixing the features of the old and the new, thereby reaching customers with a variety of preferences.
                        </li>
                    </ul>
                </div>

                {/* Conclusion */}
                <div className="space-y-6 border-t border-border pt-8">
                    <h3 className="text-2xl font-heading font-semibold text-heading">{display.conclusionTitle}</h3>
                    <p className="leading-relaxed whitespace-pre-line">
                        {display.conclusionContent}
                    </p>
                </div>
            </div>
        </section>
    );
}
