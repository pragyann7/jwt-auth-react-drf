import { useState, useEffect } from "react"
import axiosInstance from "../src/api/axios"
import { useNavigate, Navigate } from "react-router-dom"
import ErrorAuth from "./ErrorAuth";
import HeaderNav from "./HeaderNav";
import Footer2 from "./Footer2";
import Footer1 from "./Footer";


function Home() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');

    // Mount garna ko lagi
    useEffect(() => {
        const showHome = async () => {
            try {
                const res = await axiosInstance.get('home/');
                setUsername(res.data.username);
                // alert(res.data.message);
            } catch (error) {
                setError('Failed to fetch data or unauthorized');
            }
        };

        showHome();
    }, []);

    if (error) return <ErrorAuth />;

    return (
        <>
            {/* Fullscreen Video Section */}
            <section className="relative h-screen w-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/justicewillserve0001-0190.mp4"
                />
                <div className="absolute top-0 left-0 w-full z-10">
                    <HeaderNav />
                </div>
            </section>

            {/* Scroll-Down Content Section (Below Video) */}
            <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6 md:px-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About AuctionHub</h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        At <span className="font-semibold text-indigo-600">AuctionHub</span>, we're redefining how people buy and sell online. From rare collectibles to the latest tech, we bring sellers and bidders together in a secure, fast, and exciting auction environment.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">🌐 Global Reach</h3>
                            <p className="text-gray-600">
                                Connect with buyers and sellers across the globe. AuctionHub supports international listings and seamless transactions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">🔒 Trusted & Secure</h3>
                            <p className="text-gray-600">
                                Your privacy and security matter. We offer secure payments, verified sellers, and protected bidding systems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">⚡ Real-Time Auctions</h3>
                            <p className="text-gray-600">
                                Experience the thrill of live bidding with instant updates, timers, and alerts to keep you in the action.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p className="text-md md:text-lg text-gray-700">
                            Join thousands of users already winning with AuctionHub. Whether you're a casual bidder or a seasoned seller, AuctionHub gives you the tools to succeed in every auction.
                        </p>
                    </div>
                </div>
            </section>
            <Footer1 />
        </>

    )
}

export default Home
