import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-[#F9FAFB] border-t border-gray-200 text-[#1A2238]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left: Logo & Tagline */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-500">AuctionHub</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        The finest things in life aren’t bought — they’re won.
                    </p>
                </div>

                {/* Middle: Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Explore</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-orange-500">Live Auctions</a></li>
                        <li><a href="#" className="hover:text-orange-500">Upcoming</a></li>
                        <li><a href="#" className="hover:text-orange-500">Closed</a></li>
                        <li><a href="#" className="hover:text-orange-500">Login</a></li>
                        <li><a href="#" className="hover:text-orange-500">Sign Up</a></li>
                    </ul>
                </div>

                {/* Right: Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Connect with us</h3>
                    <div className="flex space-x-4 text-gray-600">
                        <a href="#"><Facebook className="hover:text-orange-500" size={20} /></a>
                        <a href="#"><Instagram className="hover:text-orange-500" size={20} /></a>
                        <a href="#"><Twitter className="hover:text-orange-500" size={20} /></a>
                        <a href="#"><Mail className="hover:text-orange-500" size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-100">
                © {new Date().getFullYear()} AuctionHub. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
