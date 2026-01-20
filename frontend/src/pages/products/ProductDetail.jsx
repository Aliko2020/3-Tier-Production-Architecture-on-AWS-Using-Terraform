import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../../data/newproducts";
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
    return (
      <p className="text-center py-20 text-gray-500">Product not found.</p>
    );
  }

  const [selectedColor, setSelectedColor] = useState(
    product.color?.[0]?.value || "",
  );
  const [selectedSpec, setSelectedSpec] = useState(product.specs?.[0]);
  const [selectedImage, setSelectedImage] = useState(product.images?.[0]);

  return (
    <div className="container max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-8 sm:gap-0">
      <div className="flex max-w-lg flex-col md:items-center">
        <img
          src={selectedImage}
          alt={product.name}
          loading="lazy"
          className="sm:max-w-sm rounded-lg border"
        />

        <div className="flex sm:w-[70%]">
          <div className="flex gap-4 mt-4">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Thumbnail"
                loading="lazy"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-16 object-cover cursor-pointer border rounded ${
                  selectedImage === img ? "border-green-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6 text-gray-500">
        <h1 className="font-semibold">{product.name}</h1>
        <p className="">{product.description}</p>

        {product.color && (
          <div>
            <h3 className="font-medium mb-2">Color:</h3>
            <div className="flex gap-4">
              {product.color.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm ${
                    selectedColor === color.value
                      ? "border-gray-200 text-gray-800"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  <span>{color.name}</span>
                  {selectedColor === color.value && (
                    <span className="text-gray-500 text-lg">●</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.specs && (
          <div>
            <h3 className="font-medium mb-2">Specification:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {product.specs.map((spec) => (
                <button
                  key={spec.label}
                  onClick={() => setSelectedSpec(spec)}
                  className={`p-4 border rounded-lg text-left hover:shadow transition ${
                    selectedSpec.label === spec.label
                      ? "border-gray-200"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{spec.label}</span>
                    {selectedSpec.label === spec.label && (
                      <span className="text-lg">●</span>
                    )}
                  </div>
                  <p className="text-sm mt-1 whitespace-pre-line">
                    {spec.cpu}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleBuyNow}
            className="px-6 py-3 border bg-green-500 text-white rounded-lg transition"
          >
            Buy Now
          </button>
          <button
            disabled
            className="px-6 py-3 rounded-lg border cursor-pointer transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
