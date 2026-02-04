
export default function RegistrationGuide() {
    return (
        <section className="py-20 bg-background">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Signing Up Routes */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase font-heading tracking-tight">Signing Up for <span className="text-primary">Banglabet88</span></h2>
                        <p className="mb-8 text-gray-400 text-lg leading-relaxed">Establish your command center. Choose from our four streamlined registration methods designed for maximum velocity and security.</p>

                        <div className="bg-[#111] rounded-lg shadow-2xl overflow-hidden border border-white/5">
                            <table className="w-full text-sm">
                                <thead className="bg-white/5 border-b border-white/5">
                                    <tr>
                                        <th className="p-4 text-left font-bold text-white uppercase tracking-wider">Method</th>
                                        <th className="p-4 text-left font-bold text-white uppercase tracking-wider">Requirements</th>
                                        <th className="p-4 text-left font-bold text-white uppercase tracking-wider">Speed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 font-bold text-primary uppercase">One-Click</td>
                                        <td className="p-4 text-gray-300">BD Region / BDT Currency</td>
                                        <td className="p-4 text-red-500 font-bold uppercase tracking-tighter">10-15s</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 font-bold text-primary uppercase">Email</td>
                                        <td className="p-4 text-gray-300">Full Profile Details</td>
                                        <td className="p-4 text-gray-300 uppercase tracking-tighter">1 min</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 font-bold text-primary uppercase">Phone</td>
                                        <td className="p-4 text-gray-300">OTP Authenticated</td>
                                        <td className="p-4 text-red-500 font-bold uppercase tracking-tighter">30s</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 font-bold text-primary uppercase">Social</td>
                                        <td className="p-4 text-gray-300">FB / Google / Twitter</td>
                                        <td className="p-4 text-gray-300 uppercase tracking-tighter">1 min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Steps */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase font-heading tracking-tight">Registration <span className="text-primary">Guidelines</span></h2>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</span> <div><strong className="text-white uppercase text-sm tracking-widest block mb-1">Account Verification</strong> Log in and go to Account Settings &gt; Verification.</div></li>
                            <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</span> <div><strong className="text-white uppercase text-sm tracking-widest block mb-1">ID Submission</strong> Upload a high-resolution photo of your government ID.</div></li>
                            <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</span> <div><strong className="text-white uppercase text-sm tracking-widest block mb-1">Address Verification</strong> Submit a utility bill no older than 90 days.</div></li>
                            <li className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">4</span> <div><strong className="text-white uppercase text-sm tracking-widest block mb-1">Final Approval</strong> Rapid processing within 24-48 hours.</div></li>
                        </ul>

                        <div className="mt-12 bg-gradient-to-r from-primary to-red-900/50 p-8 rounded-sm shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="font-bold text-white text-xl mb-4 uppercase font-heading tracking-wider relative z-10">Mobile Command Center</h3>
                            <p className="text-white/80 text-sm mb-6 leading-relaxed relative z-10">Dominate the game anywhere. Download the official Banglabet88 app for iOS and Android.</p>
                            <div className="flex flex-wrap gap-4 relative z-10">
                                <button className="bg-white text-black px-6 py-3 rounded-sm text-xs font-bold flex items-center gap-2 hover:bg-gray-100 transition-all uppercase tracking-widest">
                                    <span></span> iOS Version
                                </button>
                                <button className="bg-black/40 text-white border border-white/20 px-6 py-3 rounded-sm text-xs font-bold flex items-center gap-2 hover:bg-black transition-all uppercase tracking-widest">
                                    Android APK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
