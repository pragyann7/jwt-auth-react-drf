import axiosInstance from './api/axios';

export default function LogoutButton() {
    const handleLogout = async () => {
        try {
            const access = localStorage.getItem('access');
            const refresh = localStorage.getItem('refresh');

            // Add the access token to the request header
            const response = await axiosInstance.post(
                'logout/',
                { refresh },
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                }
            );

            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            alert('Logged out');
        } catch (err) {
            console.error(err.response?.data || err.message);
            alert('Logout failed');
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
}
