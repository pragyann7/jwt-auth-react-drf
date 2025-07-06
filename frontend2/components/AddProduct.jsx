import { useState } from "react";
import axiosInstance from "../src/api/axios";
import { useNavigate } from "react-router-dom";


function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product_name', product.name);
        formData.append('price', product.price);
        formData.append('category', product.category);
        formData.append('image', product.image);

        try {
            const res = await axiosInstance.post('addproduct/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Product added successfully!!!');
            setProduct({
                name: "",
                price: "",
                category: "",
                image: null,
            });
            document.getElementById("image").value = "";
        } catch (error) {
            alert('Error adding product!!!');
        }
    };

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
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Category</label>
                        <select
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="books">Books</option>
                            <option value="home">Home</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Product Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            id="image"
                            onChange={handleChange}
                            className="w-full text-gray-700"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
