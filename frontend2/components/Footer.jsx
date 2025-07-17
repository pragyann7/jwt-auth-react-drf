// Footer.jsx
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                    <h2 className="text-lg font-semibold mb-2"><span className=' text-orange-400'>Auction</span>Hub</h2>
                    <p>The finest things in life aren’t bought — they’re won.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-orange-400">Home</a></li>
                        <li><a href="#" className="hover:text-orange-400">Auctions</a></li>
                        <li><a href="#" className="hover:text-orange-400">Categories</a></li>
                        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Help</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
                        <li><a href="#" className="hover:text-orange-400">Support</a></li>
                        <li><a href="#" className="hover:text-orange-400">Terms</a></li>
                        <li><a href="#" className="hover:text-orange-400">Privacy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="pl-7 font-semibold mb-2">Follow Us</h4>
                    <div className="flex space-x-4 text-gray-600">
                        <a href="#"><Facebook className="text-white hover:text-orange-500" size={20} /></a>
                        <a href="#"><Instagram className="text-white hover:text-orange-500" size={20} /></a>
                        <a href="#"><Twitter className="text-white hover:text-orange-500" size={20} /></a>
                        <a href="#"><Mail className="text-white hover:text-orange-500" size={20} /></a>
                    </div>
                    <p className="text-white-500 mb-2 mt-7">
                        Get notified about exclusive deals and rare finds — right in your inbox.
                    </p>
                    <form className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 py-2 border rounded-md text-sm placeholder-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 text-sm cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
            <div className="mt-8 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} AuctionHub. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
