import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../data/newproducts";
import { useNavigate } from "react-router-dom";


const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const passedProduct = location.state?.product;

    const navigate = useNavigate();
    const handleBuyNow = () => {
        const user = localStorage.getItem("user");

        if (!user) {
            navigate("/login");
        } else {
            console.log("Proceed to checkout...");
            navigate("/checkout", { state: { product } });
        }
    };


    const product =
        passedProduct || products.find((p) => p.id.toString() === id.toString());

    if (!product) {
        return <p className="text-center py-20 text-gray-500">Product not found.</p>;
    }

    const [selectedColor, setSelectedColor] = useState(product.color?.[0]?.value || "");
    const [selectedSpec, setSelectedSpec] = useState(product.specs?.[0]);
    const [selectedImage, setSelectedImage] = useState(product.images?.[0]);

    return (
        <div className="container mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">
            {/* Left side - Product Images */}
            <div>
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full rounded-lg border"
                />

                {/* Thumbnails */}
                <div className="flex gap-4 mt-4">
                    {product.images?.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt="Thumbnail"
                            onClick={() => setSelectedImage(img)}
                            className={`w-20 h-16 object-cover cursor-pointer border rounded ${selectedImage === img ? "border-green-500" : "border-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right side - Product Info */}
            <div className="space-y-6">
                <h1 className="text-xl font-semibold text-gray-800">{product.name}</h1>
                <p className="text-gray-500">{product.description}</p>

                {/* Color Selection */}
                {product.color && (
                    <div>
                        <h3 className="text-gray-700 font-medium mb-2">Color:</h3>
                        <div className="flex gap-4">
                            {product.color.map((color) => (
                                <button
                                    key={color.value}
                                    onClick={() => setSelectedColor(color.value)}
                                    className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm ${selectedColor === color.value
                                        ? "border-green-500 text-gray-800"
                                        : "border-gray-300 text-gray-500"
                                        }`}
                                >
                                    <span>{color.name}</span>
                                    {selectedColor === color.value && (
                                        <span className="text-green-500 text-lg">●</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Specification Selection */}
                {product.specs && (
                    <div>
                        <h3 className="text-gray-700 font-medium mb-2">Specification:</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {product.specs.map((spec) => (
                                <button
                                    key={spec.label}
                                    onClick={() => setSelectedSpec(spec)}
                                    className={`p-4 border rounded-lg text-left hover:shadow transition ${selectedSpec.label === spec.label
                                        ? "border-green-500"
                                        : "border-gray-300"
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold">{spec.label}</span>
                                        {selectedSpec.label === spec.label && (
                                            <span className="text-green-500 text-lg">●</span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1 whitespace-pre-line">
                                        {spec.cpu}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add to Cart / Buy now */}
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={handleBuyNow}
                        className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
                    >
                        Buy Now
                    </button>
                     <button disabled className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
