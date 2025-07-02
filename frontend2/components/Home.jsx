import { useState, useEffect } from "react"
import axiosInstance from "../src/api/axios"
import { useNavigate } from "react-router-dom"


function Home() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const showHome = async () => {
            const token = localStorage.getItem('access');
            if (!token) {
                setError('Not aucthenticated');
                return;
            }

            try {
                const res = await axiosInstance.get('home/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsername(res.data.username);
                // alert(res.data.message);
            } catch (error) {
                setError('Failed to fetch data or unauthorized');
            }
        };

        showHome();
    }, []);

    if (error) return <div className="flex flex-col justify-center items-center h-screen"><h1>{error}</h1><p>go back to <a href="/"><span className="text-blue-600 hover:underline">Login</span></a> page.</p></div>;

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
                <h1 className="text-center">Hello {username}, Welcome to my Webapp</h1>
                <h1 className="text-center">Namaste</h1>
                <h1 className="text-center">Jojoloppa</h1>
                <h1 className="text-center">Konichiwa</h1>
                <h1 className="text-center">Hola</h1>
                <button
                    type="submit"
                    onClick={handleUserlist}
                    className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    List Users
                </button>
            </div>

        </>
    )
}

export default Home
