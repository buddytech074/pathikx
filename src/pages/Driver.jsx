import { Truck, CheckCircle, FileText, Wallet, TrendingUp, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function Driver() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-50"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
                            <Award className="w-4 h-4" />
                            Join 1000+ Professional Drivers
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent">
                            Drive with PathikX
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                            Turn your vehicle into a revenue stream. Flexible hours, fair earnings, and complete support.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { icon: TrendingUp, label: 'High Earnings', value: '₹30k-50k/mo' },
                            { icon: Clock, label: 'Flexible Hours', value: 'Work Anytime' },
                            { icon: Shield, label: 'Full Insurance', value: 'Covered' },
                            { icon: Award, label: 'Bonuses', value: 'Performance+' }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                                <benefit.icon className="w-10 h-10 text-indigo-600 mb-4" />
                                <div className="text-2xl font-bold text-gray-900 mb-1">{benefit.value}</div>
                                <div className="text-gray-600 font-medium">{benefit.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Join Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Start Earning in 4 Simple Steps
                    </h2>

                    <div className="space-y-12">
                        {[
                            {
                                step: '01',
                                title: 'Download the App',
                                description: 'Get the PathikX Driver app from Google Play Store.',
                                icon: Truck
                            },
                            {
                                step: '02',
                                title: 'Create Your Profile',
                                description: 'Register with your mobile number and basic details.',
                                icon: CheckCircle
                            },
                            {
                                step: '03',
                                title: 'Upload Documents',
                                description: 'Submit Driving License, RC, Insurance, and Aadhaar.',
                                icon: FileText
                            },
                            {
                                step: '04',
                                title: 'Get Verified & Start',
                                description: 'Quick 24-hour verification, then start accepting rides!',
                                icon: Award
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 items-start group">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 mb-3">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-lg font-light leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <FileText className="text-indigo-600" />
                            Required Documents
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { name: 'Valid Driving License', status: 'Required' },
                                { name: 'Vehicle RC Book', status: 'Required' },
                                { name: 'Vehicle Insurance', status: 'Required' },
                                { name: 'Aadhaar Card', status: 'Required' },
                                { name: 'PAN Card', status: 'Optional' },
                                { name: 'Bank Account Details', status: 'Required' }
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-gray-900">{doc.name}</span>
                                    </div>
                                    <span className={`text-sm px-3 py-1 rounded-full ${doc.status === 'Required'
                                            ? 'bg-indigo-100 text-indigo-700'
                                            : 'bg-gray-200 text-gray-600'
                                        }`}>
                                        {doc.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Wallet className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-4xl font-bold mb-4">Manage Earnings with Driver Wallet</h2>
                    <p className="text-xl text-indigo-100 mb-8 font-light">
                        Track daily income, request instant payouts, and receive performance bonuses.
                    </p>
                    <Link to="/wallet-info" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                        Learn About Wallet →
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Driver;
