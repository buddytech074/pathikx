import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Car, Twitter, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-primary">
                        <div className="bg-primary text-white p-1.5 rounded-lg">
                            <Car size={24} />
                        </div>
                        PathikX
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
                        <Link to="/driver-info" className="text-gray-700 hover:text-primary font-medium transition-colors">Drive with Us</Link>
                        <Link to="/wallet-info" className="text-gray-700 hover:text-primary font-medium transition-colors">Wallet Features</Link>
                        <Link to="/terms" className="text-gray-700 hover:text-primary font-medium transition-colors">Terms</Link>
                        <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">
                            Download App
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 py-3 space-y-3">
                        <Link
                            to="/"
                            className="block py-2 text-gray-700 hover:text-primary font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/driver-info"
                            className="block py-2 text-gray-700 hover:text-primary font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Drive with Us
                        </Link>
                        <Link
                            to="/wallet-info"
                            className="block py-2 text-gray-700 hover:text-primary font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Wallet Features
                        </Link>
                        <Link
                            to="/terms"
                            className="block py-2 text-gray-700 hover:text-primary font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Terms & Conditions
                        </Link>
                        <button className="w-full bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700">
                            Download App
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                            <Car size={20} /> PathikX
                        </h3>
                        <p className="text-sm">Your reliable companion for every journey.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link to="/safety" className="hover:text-white transition-colors">Safety Information</Link></li>
                            <li><Link to="/driver-info" className="hover:text-white transition-colors">Drive with Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Social</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm">
                    &copy; {new Date().getFullYear()} PathikX Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
