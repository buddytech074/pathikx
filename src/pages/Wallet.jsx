import { Wallet, CreditCard, ArrowRight, DollarSign, History } from 'lucide-react';
import { Link } from 'react-router-dom';

function WalletInfo() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container max-w-4xl mx-auto px-4">

                <div className="text-center mb-16">
                    <div className="bg-indigo-100 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Wallet size={32} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">PathikX Wallet</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A secure, seamless way to pay for rides and receive earnings. No cash required.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* For Passengers */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="bg-green-100 text-green-600 p-2 rounded-lg"><CreditCard size={20} /></span> For Passengers
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-green-50 p-1 rounded text-green-600"><ArrowRight size={16} /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Add Money Instantly</h3>
                                    <p className="text-sm text-gray-500">Top up using UPI, Debit Card, or Netbanking securely.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-green-50 p-1 rounded text-green-600"><ArrowRight size={16} /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Auto-Debit for Rides</h3>
                                    <p className="text-sm text-gray-500">Fare is automatically deducted after ride completion. No hassle of change.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-green-50 p-1 rounded text-green-600"><ArrowRight size={16} /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Transaction History</h3>
                                    <p className="text-sm text-gray-500">View detailed history of all your rides and top-ups.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* For Drivers */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="bg-indigo-100 text-primary p-2 rounded-lg"><DollarSign size={20} /></span> For Drivers
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-indigo-50 p-1 rounded text-primary"><ArrowRight size={16} /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Daily Earnings</h3>
                                    <p className="text-sm text-gray-500">Track your daily income directly in the app wallet.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-indigo-50 p-1 rounded text-primary"><ArrowRight size={16} /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Seamless Withdrawal</h3>
                                    <p className="text-sm text-gray-500">Use 'Request Payout' to transfer funds to your linked bank account.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-indigo-50 p-1 rounded text-primary"><ArrowRight size={16} /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Incentives & Bonuses</h3>
                                    <p className="text-sm text-gray-500">Performance bonuses are credited directly to your wallet.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-6">Safe & Secure Transactions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="font-bold text-2xl mb-1">256-bit</div>
                            <div className="text-indigo-100 text-sm">Encryption</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="font-bold text-2xl mb-1">RBI</div>
                            <div className="text-indigo-100 text-sm">Compliant</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="font-bold text-2xl mb-1">24/7</div>
                            <div className="text-indigo-100 text-sm">Fraud Protection</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WalletInfo;
