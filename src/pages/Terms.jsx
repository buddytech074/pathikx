import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Terms() {
    return (
        <div className="bg-white py-12">
            <div className="container max-w-3xl mx-auto px-4">

                <header className="mb-12 border-b border-gray-100 pb-8">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms & Conditions</h1>
                    <p className="text-gray-500">Last updated: February 2026</p>
                </header>

                <article className="prose prose-lg text-gray-700 max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to PathikX. By accessing or using our mobile application, website, and services (collectively, the "Platform"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please do not use our Platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Driver Partner Agreement</h2>
                        <p>
                            Drivers using the PathikX Platform are independent contractors, not employees. By registering as a driver, you represent that you hold a valid driving license, vehicle registration, and insurance.
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>You agree to maintain your vehicle in safe operating condition.</li>
                            <li>You agree to comply with all local traffic laws and regulations.</li>
                            <li>PathikX reserves the right to suspend accounts for unsafe driving or policy violations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                        <p>
                            As a passenger, you agree to treat drivers and their vehicles with respect. Damage caused to a vehicle due to negligence may result in repair charges or account suspension.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments & Wallet</h2>
                        <p>
                            Payments for rides are processed through the PathikX Wallet or authorized payment gateways. Wallet balances are non-transferable between users but can be withdrawn by drivers subject to minimum balance requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellations & Refunds</h2>
                        <p>
                            Cancellation fees may apply if you cancel a ride after a driver has accepted. Drivers may also cancel if the passenger is unreachable or not at the pickup location within the waiting period. Refunds are processed to the Wallet.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">Privacy Policy</h2>
                        <p className="text-sm mb-4">
                            We collect and use your data to provide our services. Your location data is tracked during rides for safety and routing.
                        </p>
                        <a href="/privacy" className="text-primary font-semibold hover:underline flex items-center gap-2">
                            <FileText className="w-4 h-4" /> Read Full Privacy Policy
                        </a>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at support@pathikx.net.
                        </p>
                    </section>
                </article>

            </div>
        </div>
    );
}

export default Terms;
