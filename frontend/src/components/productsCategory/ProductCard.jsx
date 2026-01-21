import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ product, category }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      state={{ product }}
      className="group border text-gray-500 rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300"
    >
      <div className="relative w-full h-52  overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-contain transition-all duration-500
            group-hover:scale-105
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />
      </div>

      <div className="p-4 text-center">
        <p className="text-xs uppercase">{category}</p>

        <h3 className="mt-2 line-clamp-2">{product.name}</h3>

        <p className="text-red-500 font-bold mt-2">
          GHC {product.price.toFixed(2)}
        </p>

        <div className="flex justify-center mt-2">
          {[...Array(product.rating)].map((_, i) => (
            <span key={i} className="text-red-500 text-sm">
              ★
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
