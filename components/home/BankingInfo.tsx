
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
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-heading">Deposit Methods</h2>
                    <p className="mb-6 text-text">Depositing is super easy in Melbet Bangladesh. You can choose from bank transfer, e-wallet, and cryptocurrencies. The minimum amount to deposit is only 30 BDT.</p>
                    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-100">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-100 text-heading">
                                <tr>
                                    <th className="p-3">Payment Method</th>
                                    <th className="p-3">Min Deposit (BDT)</th>
                                    <th className="p-3">Max Deposit (BDT)</th>
                                    <th className="p-3">Processing Time</th>
                                    <th className="p-3">Fees</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {depositMethods.map((m, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-3 font-medium text-primary">{m.method}</td>
                                        <td className="p-3">{m.min}</td>
                                        <td className="p-3">{m.max}</td>
                                        <td className="p-3">{m.time}</td>
                                        <td className="p-3">{m.fees}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-heading">Withdrawal Methods</h2>
                    <p className="mb-6 text-text">BigWin959 BD processes most of the e-wallet and mobile banking withdrawals within a few hours. Bank transfers can take a little longer.</p>
                    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-100">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-100 text-heading">
                                <tr>
                                    <th className="p-3">Payment Method</th>
                                    <th className="p-3">Min Withdrawal</th>
                                    <th className="p-3">Max Withdrawal</th>
                                    <th className="p-3">Time</th>
                                    <th className="p-3">Fees</th>
                                    <th className="p-3">Daily Limit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {withdrawalMethods.map((m, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-3 font-medium text-primary">{m.method}</td>
                                        <td className="p-3">{m.min}</td>
                                        <td className="p-3">{m.max}</td>
                                        <td className="p-3">{m.time}</td>
                                        <td className="p-3">{m.fees}</td>
                                        <td className="p-3">{m.daily}</td>
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
