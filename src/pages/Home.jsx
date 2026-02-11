import { Shield, Wallet, Users, ArrowRight, Smartphone, Sparkles, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full text-sm font-medium text-indigo-600 mb-8 shadow-sm hover:shadow-md transition-shadow">
                            <Sparkles className="w-4 h-4" />
                            <span>Introducing PathikX 2.0</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent">
                                Your Journey,
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Reimagined.
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Experience seamless urban mobility with verified drivers, transparent pricing, and intelligent route optimization.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2">
                                <Smartphone className="w-5 h-5" />
                                Download App
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                to="/driver-info"
                                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-200"
                            >
                                Start Earning as Driver
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-16 flex flex-wrap justify-center gap-12 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-400 rounded-full border-2 border-white"></div>
                                </div>
                                <span className="font-medium">1000+ Active Drivers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                                <span className="font-medium">4.8/5 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Built for modern commuters
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                            Everything you need for safe, affordable, and comfortable rides.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                gradient: 'from-blue-500 to-indigo-500',
                                title: 'Safety First',
                                description: 'Verified drivers, real-time tracking, and 24/7 emergency support for complete peace of mind.'
                            },
                            {
                                icon: Zap,
                                gradient: 'from-indigo-500 to-purple-500',
                                title: 'Instant Booking',
                                description: 'Find a ride in seconds with our intelligent matching algorithm and extensive driver network.'
                            },
                            {
                                icon: Wallet,
                                gradient: 'from-purple-500 to-pink-500',
                                title: 'Smart Wallet',
                                description: 'Seamless payments with digital wallet, automatic fare calculation, and instant settlements.'
                            }
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="group relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                            >
                                <div className={`inline-flex p-3 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Active Drivers', value: '1,000+', icon: Users },
                            { label: 'Happy Riders', value: '50k+', icon: Sparkles },
                            { label: 'Cities', value: '12+', icon: Zap },
                            { label: 'Avg. Wait Time', value: '< 3min', icon: Clock }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-indigo-100 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAgMjRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptLTI0IDBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0yNGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0yNCAwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAgMjRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Ready to transform your commute?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 font-light">
                        Join thousands who have already switched to a smarter way to travel.
                    </p>
                    <button className="group px-10 py-5 bg-white text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-3">
                        Get Started Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
