import { useState } from "react";
import axiosInstance from "../src/api/axios";
import HeaderNav from "./HeaderNav";
import Footer1 from "./Footer";


function AddProduct() {


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


    return (
        <div>
            <HeaderNav />
            <div className="max-w-md pb-20 mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
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
            <Footer1 />
        </div>
    )
}

export default AddProduct
