
import { HelpCircle, ShieldCheck, Scale, MessageCircle } from "lucide-react";

export default function InfoSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom space-y-12">

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                        <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg mb-2">License and Legal Information</h3>
                            <p className="text-sm text-text">BigWin959 is a legal and available site to Bangladeshi players since it carries a valid license (8048/JAZ2020-060). This guarantees security and fair gaming compliance.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Scale className="w-10 h-10 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg mb-2">Transparency & Fairness</h3>
                            <p className="text-sm text-text">Run by Pelican Entertainment B.V., verifying game outcomes with certified RNGs and independent audits for maximum integrity.</p>
                        </div>
                    </div>
                </div>

                {/* Customer Support */}
                <div className="bg-blue-50 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <MessageCircle className="w-6 h-6" /> Customer Support
                        </h3>
                        <p className="text-text mb-4">The Bangladeshi support team is energetic and available 24/7 to help you with any issues. Agents are highly trained and know the local market.</p>
                        <ul className="text-sm font-medium space-y-1">
                            <li>Email Support</li>
                            <li>Live Chat (24/7)</li>
                            <li>Telegram & WhatsApp</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold mb-4 text-center">FAQ</h4>
                            <div className="space-y-4 text-sm">
                                <details className="group">
                                    <summary className="cursor-pointer font-medium list-none flex justify-between items-center bg-gray-50 p-2 rounded">
                                        Minimum deposit amount?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-2 text-text pl-2">300 BDT for bKash, Nagad, and Rocket.</p>
                                </details>
                                <details className="group">
                                    <summary className="cursor-pointer font-medium list-none flex justify-between items-center bg-gray-50 p-2 rounded">
                                        Is BigWin959 safe?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-2 text-text pl-2">Yes. It has a valid Curacao license and ensures strict regulatory supervision.</p>
                                </details>
                                <details className="group">
                                    <summary className="cursor-pointer font-medium list-none flex justify-between items-center bg-gray-50 p-2 rounded">
                                        Supported languages?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-2 text-text pl-2">Bengali, English, Hindi, and more than ten other languages.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
