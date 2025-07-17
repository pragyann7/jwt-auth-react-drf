import { useState, useEffect } from "react"
import axiosInstance from "../src/api/axios"
import { useNavigate, Navigate } from "react-router-dom"
import ErrorAuth from "../components/ErrorAuth"
import HeaderNav from "./HeaderNav"
import Footer1 from "./Footer";


function ProductList() {

    const [productList, setProductlist] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosInstance.get('products/');
                setProductlist(res.data);
            } catch (err) {
                console.error("Failed to fetch products", err);
                setError('Failed to fetch data or unauthorized');
            }
        };
        fetchProducts();
    }, []);

    // if (error) return <ErrorAuth />;

    return (
        <div>
            <HeaderNav />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productList.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition"
                        >
                            {/* <img
                            src={product.image}
                            alt={product.product_name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        /> */}
                            <img
                                src={product.image || 'https://via.placeholder.com/150'}
                                alt={product.product_name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />

                            <h2 className="text-xl font-semibold">{product.product_name}</h2>
                            <p className="text-gray-500">{product.category}</p>
                            <p className="text-lg font-bold text-blue-600 mt-2">${product.price}</p>
                            <button className="mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer1 />
        </div>
    )
}

export default ProductList
