import React from 'react'
import { useNavigate, Navigate } from "react-router-dom"

function HeaderNav() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home')
    }

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
        <div>
            <div className="relative flex justify-around">
                <button
                    type="submit"
                    onClick={handleHome}
                    className="flex mt-4 cursor-pointer justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                    Home
                </button>
                <button
                    type="submit"
                    onClick={handleUserlist}
                    className="flex mt-4 cursor-pointer justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                    List Users
                </button>
                <button
                    type="submit"
                    onClick={handleAddProduct}
                    className="flex mt-4 cursor-pointer justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    Add Product
                </button>
                <button
                    type="submit"
                    onClick={handleProductlist}
                    className="flex mt-4 cursor-pointer justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    List Products
                </button>
                <button
                    type="submit"
                    onClick={handleLogout}
                    className="flex mt-4 justify-center cursor-pointer rounded-md px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default HeaderNav
