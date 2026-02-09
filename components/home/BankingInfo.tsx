
const depositMethods = [
    { method: "bKash", min: "300", max: "20,000", time: "Instant", fees: "No" },
    { method: "Nagad", min: "300", max: "20,000", time: "Instant", fees: "No" },
    { method: "Rocket", min: "300", max: "20,000", time: "Instant", fees: "No" },
    { method: "Skrill", min: "740", max: "7,500,000", time: "Instant", fees: "No" },
    { method: "Neteller", min: "740", max: "7,500,000", time: "Instant", fees: "No" },
    { method: "Bitcoin", min: "150", max: "No limit", time: "10-30m", fees: "No" },
    { method: "Ethereum", min: "150", max: "No limit", time: "10-30m", fees: "No" },
    { method: "Bank Transfer", min: "1,000", max: "50,000", time: "1-3h", fees: "No" },
];

const withdrawalMethods = [
    { method: "bKash", min: "500", max: "20,000", time: "1-3h", fees: "free", daily: "500,000" },
    { method: "Nagad", min: "500", max: "20,000", time: "1-3h", fees: "free", daily: "500,000" },
    { method: "Rocket", min: "500", max: "20,000", time: "1-3h", fees: "free", daily: "300,000" },
    { method: "Skrill", min: "750", max: "7,500,000", time: "15-30m", fees: "free", daily: "7,500,000" },
    { method: "Bank Transfer", min: "1,000", max: "50,000", time: "1-3 days", fees: "free", daily: "750,000" },
    { method: "Crypto", min: "30,000", max: "150M", time: "30-60m", fees: "free", daily: "No Limit" },
];

export default function BankingInfo() {
    return (
        <section className="py-20 bg-background">
            <div className="container-custom">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase font-heading tracking-tight">Rapid <span className="text-primary">Deposits</span></h2>
                    <p className="mb-8 text-gray-400 text-lg leading-relaxed">Secure, instantaneous, and diverse. We support the most trusted payment gateways in Bangladesh ensuring your capital is always ready for action.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-white border-b border-white/20">
                                <tr>
                                    <th className="p-4 uppercase font-bold tracking-widest">Gateway</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Min (BDT)</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Max (BDT)</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Tempo</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Fees</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {depositMethods.map((m, i) => (
                                    <tr key={i} className="transition-colors border-b border-white/5 last:border-0">
                                        <td className="p-4 font-bold text-primary uppercase tracking-tighter">{m.method}</td>
                                        <td className="p-4 text-gray-300 text-center">{m.min}</td>
                                        <td className="p-4 text-gray-300 text-center">{m.max}</td>
                                        <td className="p-4 text-red-500 font-bold text-center uppercase text-xs">{m.time}</td>
                                        <td className="p-4 text-gray-300 text-center">{m.fees}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase font-heading tracking-tight">Priority <span className="text-primary">Withdrawals</span></h2>
                    <p className="mb-8 text-gray-400 text-lg leading-relaxed">Your winnings, delivered. We prioritize high-speed processing for all withdrawal requests, maintaining the highest standard of financial integrity.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-white border-b border-white/20">
                                <tr>
                                    <th className="p-4 uppercase font-bold tracking-widest">Gateway</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Min</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Max</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Time</th>
                                    <th className="p-4 uppercase font-bold tracking-widest text-center">Daily Cap</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {withdrawalMethods.map((m, i) => (
                                    <tr key={i} className="transition-colors border-b border-white/5 last:border-0">
                                        <td className="p-4 font-bold text-primary uppercase tracking-tighter">{m.method}</td>
                                        <td className="p-4 text-gray-300 text-center">{m.min}</td>
                                        <td className="p-4 text-gray-300 text-center">{m.max}</td>
                                        <td className="p-4 text-red-500 font-bold text-center uppercase text-xs">{m.time}</td>
                                        <td className="p-4 text-gray-300 text-center">{m.daily}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
