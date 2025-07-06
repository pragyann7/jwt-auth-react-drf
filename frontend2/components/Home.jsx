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
        <><div className="relative flex justify-end top-10 right-10">
            <button
                type="submit"
                onClick={handleLogout}
                className="flex justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Log Out
            </button>
        </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-5xl font-bold mb-4">Welcome to AuctionHub</h2>
                <h1 className="text-center">Hello {username}, Welcome to my Website</h1>
                <h1 className="text-center">Namaste</h1>
                <h1 className="text-center">Jojoloppa</h1>
                <h1 className="text-center">Konichiwa</h1>
                <h1 className="text-center">Hola</h1>
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
            </div>

        </>
    )
}

export default Home
