import { useState, useEffect } from "react"
import axiosInstance from "../src/api/axios"
import { useNavigate } from "react-router-dom"

function UserList() {

    const [usersList, setUserlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('access');
                const res = await axiosInstance.get('userlist/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserlist(res.data);
            } catch (err) {
                console.error("Failed to fetch users", err);
            }
        };
        fetchUsers();
    }, []);

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

    return (
        <div>
            <div className="relative flex justify-end top-10 right-10">
                <button
                    type="submit"
                    onClick={handleLogout}
                    className="flex justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Log Out
                </button>
            </div>
            <h2 className="text-4xl font-serif font-bold text-center">User List</h2>
            <div className="mt-4 w-full  flex justify-center items-center">
                <div className="max-w-4xl w-full max-h-[570px] overflow-y-auto  border-black">
                    <table className="table-auto w-full max-w-4xl max-h-40 overflow-scroll border border-collapse border-black">
                        <thead className="bg-blue-300">
                            <tr className="border-2 border-black">
                                <th className="border border-black">ID</th>
                                <th className="border border-black">Username</th>
                                <th className="border border-black">Email</th>
                                <th className="border border-black">Join Date</th>
                            </tr>
                        </thead>
                        <tbody className="border-r-orange-100">
                            {usersList.map(user => (
                                <tr key={user.id} className=" border border-collapse border-b-gray-400">
                                    <td className="text-center border border-black">{user.id}</td>
                                    <td className="pl-2 border border-black">{user.username}</td>
                                    <td className="pl-2 border border-black">{user.email}</td>
                                    <td className="pl-2 border border-black">{user.date_joined}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList
