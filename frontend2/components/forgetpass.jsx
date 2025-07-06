import { useState } from "react"
import axiosInstance from "../src/api/axios";

function forgetpass() {
    const [credentials, setCredentials] = useState({ email: '' });

    const handleChange = (e) => {
        console.log(setCredentials({ ...credentials, [e.target.email]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/forgotpass', credentials);
        } catch (error) {
            alert('Error veryfing!!');
        }
    }

    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Forget Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default forgetpass
