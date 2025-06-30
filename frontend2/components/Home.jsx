import { useState } from "react"
import axiosInstance from "../src/api/axios"
import { useNavigate } from "react-router-dom"


function Home() {

    const navigate = useNavigate();

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
        } catch (error) {
            console.log(res.data.error)
        } finally {
            localStorage.clear();
            navigate('/');
        }
    };

    return (
        <>
            <button
                type="submit"
                onClick={handleLogout}
                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Log Out
            </button>
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-center">Hello, Welcome to my Webapp</h1>
            </div>

        </>
    )
}

export default Home
