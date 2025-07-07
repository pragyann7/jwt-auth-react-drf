import { useState, useEffect } from "react"
import axiosInstance from "../src/api/axios"
import { useNavigate, Navigate } from "react-router-dom"
import ErrorAuth from "./ErrorAuth";


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


    // Logout garna ko lagi
    const handleLogout = async () => {

        const confirmed = window.confirm("Do you want to log out?");
        if (!confirmed) return;

        const refresh = localStorage.getItem('refresh');
        const access = localStorage.getItem('access');
        if (!refresh) {
            localStorage.clear();
            navigate('/');
            return;
        }

        try {
            const res = await axiosInstance.post('logout/', { refresh }, { headers: { Authorization: `Bearer ${access}` } });
            console.log(res.data.message)
            navigate('/');
        } catch (error) {
            console.log(res.data.error)
        } finally {
            localStorage.clear();
        }
    };

    const handleUserlist = () => {
        navigate('/userlist');
    }
    const handleAddProduct = () => {
        navigate('/addproduct');
    }
    const handleProductlist = () => {
        navigate('/productlist');
    }


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
            <div className="relative flex justify-around">
                <button
                    type="submit"
                    onClick={handleUserlist}
                    className="flex mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    List Users
                </button>
                <button
                    type="submit"
                    onClick={handleAddProduct}
                    className="flex mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add Product
                </button>
                <button
                    type="submit"
                    onClick={handleProductlist}
                    className="flex mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    List Products
                </button>
                <button
                    type="submit"
                    onClick={handleLogout}
                    className="flex mt-4 justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Log Out
                </button>
            </div>
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
