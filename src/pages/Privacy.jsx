import { ArrowLeft, Shield, Lock, Eye, Database, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Privacy() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <header className="mb-12 border-b border-gray-200 pb-8">
                    <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 text-lg">Last updated: February 2026</p>
                </header>

                <div className="prose prose-lg max-w-none">

                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-indigo-100 rounded-lg">
                                <Shield className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Introduction</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            PathikX Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services (collectively, the "Platform").
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            By using PathikX, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Platform.
                        </p>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Database className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Information We Collect</h2>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you register for PathikX, we collect:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Basic Details:</strong> Name, phone number, email address, and profile photo</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Identity Verification:</strong> Aadhaar number, PAN card (for drivers)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Driver Documents:</strong> Driving license, vehicle registration (RC), insurance details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Payment Information:</strong> Bank account details, UPI ID, transaction history</span>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Location Data</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We collect real-time location data when you use our services to:
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-4">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Match you with nearby drivers or passengers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Provide navigation and route optimization</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Ensure safety through real-time tracking during rides</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Calculate accurate fares based on distance traveled</span>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Usage Data</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We automatically collect data about your interaction with the Platform, including:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Device information (model, OS version, unique identifiers)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>App usage patterns and feature interactions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Booking history, ride preferences, and ratings</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Eye className="w-6 h-6 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the collected information for the following purposes:
                        </p>
                        <div className="grid gap-4">
                            {[
                                { title: 'Service Delivery', desc: 'To facilitate ride bookings, match drivers and passengers, and process payments' },
                                { title: 'Safety & Security', desc: 'To verify identities, prevent fraud, and ensure platform safety' },
                                { title: 'Communication', desc: 'To send booking confirmations, updates, and customer support messages' },
                                { title: 'Improvements', desc: 'To analyze usage patterns and improve our services' },
                                { title: 'Legal Compliance', desc: 'To comply with applicable laws and regulations' }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Lock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Data Security</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            We implement industry-standard security measures to protect your personal information:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>256-bit SSL encryption for data transmission</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Secure cloud storage with access controls</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Regular security audits and vulnerability assessments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span>Compliance with RBI guidelines for payment security</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-pink-100 rounded-lg">
                                <Shield className="w-6 h-6 text-pink-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Your Rights</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the following rights regarding your personal data:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Access:</strong> Request a copy of your personal data</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Correction:</strong> Update or correct inaccurate information</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Deletion:</strong> Request deletion of your account and associated data</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span><strong>Opt-out:</strong> Unsubscribe from marketing communications</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                <Mail className="w-6 h-6 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Contact Us</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions or concerns about this Privacy Policy, please contact us:
                        </p>
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100">
                            <p className="text-gray-900 mb-2"><strong>PathikX Technologies</strong></p>
                            <p className="text-gray-700 mb-1">Email: <a href="mailto:privacy@pathikx.net" className="text-indigo-600 hover:text-indigo-700 font-medium">privacy@pathikx.net</a></p>
                            <p className="text-gray-700 mb-1">Support: <a href="mailto:support@pathikx.net" className="text-indigo-600 hover:text-indigo-700 font-medium">support@pathikx.net</a></p>
                            <p className="text-gray-700 m-0">Website: <a href="https://pathikx.net" className="text-indigo-600 hover:text-indigo-700 font-medium">pathikx.net</a></p>
                        </div>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <p className="text-sm text-gray-600 m-0">
                            <strong>Changes to This Policy:</strong> We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default Privacy;
