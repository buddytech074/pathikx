import { useState } from 'react';
import { ArrowLeft, Trash2, AlertTriangle, CheckCircle, Mail, Shield, Clock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

function DeleteAccount() {
    const [step, setStep] = useState(1); // 1: Info, 2: Form, 3: Confirmed
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        reason: '',
        confirm: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email && !formData.phone) {
            setError('Please enter your registered email or phone number.');
            return;
        }
        if (!formData.confirm) {
            setError('Please confirm that you want to delete your account.');
            return;
        }
        setLoading(true);
        try {
            // Send deletion request email via mailto or backend
            // For now, we open a mailto link as a reliable fallback
            const subject = encodeURIComponent('Account Deletion Request - PathikX');
            const body = encodeURIComponent(
                `Hello PathikX Support,\n\nI would like to request deletion of my account.\n\nRegistered Email/Phone: ${formData.email || formData.phone}\nReason: ${formData.reason || 'Not specified'}\n\nPlease delete all my personal data including:\n- Profile information\n- Booking history\n- Payment records\n- Location data\n\nThank you.`
            );
            window.location.href = `mailto:support@pathikx.net?subject=${subject}&body=${body}`;
            setStep(3);
        } catch {
            setError('Something went wrong. Please email us directly at support@pathikx.net');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <header className="mb-10 border-b border-gray-200 pb-8">
                    <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-red-100 rounded-xl">
                            <Trash2 className="w-7 h-7 text-red-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">Delete Account</h1>
                    </div>
                    <p className="text-gray-500 text-lg">
                        Request deletion of your PathikX account and all associated data.
                    </p>
                </header>

                {step === 3 ? (
                    /* Success State */
                    <div className="text-center py-16">
                        <div className="inline-flex p-5 bg-green-100 rounded-full mb-6">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted</h2>
                        <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
                            Your account deletion request has been sent to our support team. We will process it within <strong>7 business days</strong>.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
                            <h3 className="font-bold text-green-800 mb-3">What happens next?</h3>
                            <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✓</span>
                                    <span>You'll receive a confirmation email within 24 hours</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✓</span>
                                    <span>Account access will be disabled immediately after verification</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✓</span>
                                    <span>All personal data will be deleted within 30 days</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✓</span>
                                    <span>Booking records retained for 90 days (legal requirement)</span>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                        >
                            Return to Home
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-3 gap-4 mb-10">
                            {[
                                {
                                    icon: Database,
                                    color: 'red',
                                    title: 'Data Deleted',
                                    desc: 'Profile, location history, payment info & preferences'
                                },
                                {
                                    icon: Clock,
                                    color: 'orange',
                                    title: '30-Day Process',
                                    desc: 'Full deletion completed within 30 days of request'
                                },
                                {
                                    icon: Shield,
                                    color: 'blue',
                                    title: 'Legal Records',
                                    desc: 'Booking records kept 90 days per legal requirements'
                                },
                            ].map(({ icon: Icon, color, title, desc }, i) => (
                                <div key={i} className={`p-5 bg-${color}-50 border border-${color}-100 rounded-2xl`}>
                                    <div className={`p-2 bg-${color}-100 rounded-lg inline-flex mb-3`}>
                                        <Icon className={`w-5 h-5 text-${color}-600`} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                                    <p className="text-gray-600 text-sm">{desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Warning Banner */}
                        <div className="flex items-start gap-4 p-5 bg-amber-50 border border-amber-200 rounded-2xl mb-8">
                            <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                                <AlertTriangle className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-amber-900 mb-1">This action is irreversible</h3>
                                <p className="text-amber-800 text-sm leading-relaxed">
                                    Once your account is deleted, you will lose access to your ride history, wallet balance, and saved preferences. Any pending bookings will be cancelled. Wallet balance refund (if applicable) will be processed within 5–7 business days.
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Deletion Request</h2>
                            <p className="text-gray-500 mb-8 text-sm">
                                Fill in your registered account details. Our team will verify and process the request.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="delete-email">
                                        Registered Email Address
                                    </label>
                                    <input
                                        id="delete-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-px bg-gray-200"></div>
                                    <span className="text-gray-400 text-sm font-medium">OR</span>
                                    <div className="flex-1 h-px bg-gray-200"></div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="delete-phone">
                                        Registered Phone Number
                                    </label>
                                    <input
                                        id="delete-phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                {/* Reason */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="delete-reason">
                                        Reason for Deletion <span className="text-gray-400 font-normal">(Optional)</span>
                                    </label>
                                    <select
                                        id="delete-reason"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                    >
                                        <option value="">Select a reason...</option>
                                        <option value="privacy">Privacy concerns</option>
                                        <option value="not-using">No longer using the app</option>
                                        <option value="switched">Switched to another service</option>
                                        <option value="data">Want my data removed</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Confirm Checkbox */}
                                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                                    <input
                                        id="delete-confirm"
                                        type="checkbox"
                                        name="confirm"
                                        checked={formData.confirm}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer flex-shrink-0"
                                    />
                                    <label htmlFor="delete-confirm" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                                        I understand that this action is <strong>permanent and irreversible</strong>. I confirm that I want to delete my PathikX account and all associated data.
                                    </label>
                                </div>

                                {/* Error */}
                                {error && (
                                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                                        {error}
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <Trash2 className="w-5 h-5" />
                                            Submit Deletion Request
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Alternative contact */}
                            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <p className="text-sm text-gray-500">
                                    Prefer email?{' '}
                                    <a
                                        href="mailto:support@pathikx.net?subject=Account%20Deletion%20Request"
                                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                                    >
                                        Email us directly at support@pathikx.net
                                    </a>
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default DeleteAccount;
