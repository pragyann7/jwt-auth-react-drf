import { useState, useEffect } from "react"
import axiosInstance from "../src/api/axios"
import ErrorAuth from "./ErrorAuth";
import HeaderNav from "./HeaderNav";


function Home() {


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
        <><div><video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="../public/justicewillserve0001-0190.mp4"
        />
        </div>
            <HeaderNav />
            {/* <div className="relative flex items-center gap-20 justify-center h-screen">
                <h2 className="text-5xl font-bold mb-4">Welcome to AuctionHub</h2>
                <h1 className="text-center">Hello {username}, Welcome to my Website</h1>
                <h1 className="text-center">Namaste</h1>
                <h1 className="text-center">Jojoloppa</h1>
                <h1 className="text-center">Konichiwa</h1>
                <h1 className="text-center">Hola</h1>
            </div> */}

        </>
    )
}

export default Home
