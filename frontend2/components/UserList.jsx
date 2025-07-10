import { useState, useEffect } from "react"
import axiosInstance from "../src/api/axios"
import { useNavigate, Navigate } from "react-router-dom"
import ErrorAuth from "../components/ErrorAuth"
import HeaderNav from "./HeaderNav"

function UserList() {

    const [usersList, setUserlist] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axiosInstance.get('userlist/');
                setUserlist(res.data);
            } catch (err) {
                console.error("Failed to fetch users", err);
                setError('Failed to fetch data or unauthorized');
            }
        };
        fetchUsers();
    }, []);

    // if (error) return <ErrorAuth />;
    // if (error) return <Navigate to="/" />;


    return (
        <div>
            <HeaderNav />
            <h2 className="text-4xl mt-11 font-serif font-bold text-center">User List</h2>
            <div className="mt-4 w-full  flex justify-center items-center">
                <div className="max-w-4xl w-full max-h-[570px] overflow-y-auto  border-black">
                    <table className="table-auto w-full max-w-4xl max-h-40 overflow-scroll border border-collapse border-black">
                        <thead className="sticky top-0 bg-blue-300">
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
