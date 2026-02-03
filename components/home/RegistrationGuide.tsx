
export default function RegistrationGuide() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Signing Up Routes */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-heading">Signing Up for BigWin959</h2>
                        <p className="mb-6 text-text">The initial requirement before you can start exploring the numerous betting services and gambling games available at BigWin959 is account creation. There are 4 signup routes that fit every type of player.</p>

                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-3 text-left font-bold text-heading">Method</th>
                                        <th className="p-3 text-left font-bold text-heading">Requirements</th>
                                        <th className="p-3 text-left font-bold text-heading">Speed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-3 font-medium text-primary">One-Click</td>
                                        <td className="p-3 text-text">Bangladesh as country, BDT as currency</td>
                                        <td className="p-3 text-green-600 font-bold">10-15s</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium text-primary">Email</td>
                                        <td className="p-3 text-text">Email, password, full name</td>
                                        <td className="p-3 text-text">1 min</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium text-primary">Phone</td>
                                        <td className="p-3 text-text">Mobile number for OTP</td>
                                        <td className="p-3 text-green-600 font-bold">30s</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium text-primary">Social Media</td>
                                        <td className="p-3 text-text">FB, Google, or Twitter</td>
                                        <td className="p-3 text-text">1 min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Steps */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-heading">Guidelines on How to Register</h2>
                        <ul className="list-decimal pl-5 space-y-3 text-text">
                            <li><strong className="text-heading">Account Verification:</strong> Log in and go to Account Settings &gt; Verification.</li>
                            <li><strong className="text-heading">ID Upload:</strong> Upload a clear photo of your government-issued ID.</li>
                            <li><strong className="text-heading">Address Proof:</strong> Submit a utility bill no older than 90 days.</li>
                            <li><strong className="text-heading">Payment Verify:</strong> Send a screenshot of your payment account.</li>
                            <li><strong className="text-heading">Approval:</strong> Wait 24-48 hours for confirmation email.</li>
                        </ul>

                        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <h3 className="font-bold text-blue-800 mb-2">Melbet App Download</h3>
                            <p className="text-blue-700 text-sm mb-4">Most Bangladeshi players enjoy bookmaker and casino services on the go. Download the BigWin959 app for Android and iOS for free.</p>
                            <div className="flex gap-4">
                                <button className="bg-black text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2">
                                    <span></span> iOS App
                                </button>
                                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2">
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
