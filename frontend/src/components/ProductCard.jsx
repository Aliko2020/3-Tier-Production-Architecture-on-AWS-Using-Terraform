import { Link } from "react-router-dom";

const ProductCard = ({ product, category = "ACCESSORIES" }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      state={{ product }}
      className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-gray-500 text-xs uppercase">{category}</p>
        <p className="text-gray-400 text-xs">{product.id}</p>
        <h3 className="font-semibold text-gray-600 mt-2 line-clamp-2 group-hover:text-red-600">
          {product.name}
        </h3>
        <p className="text-red-600 font-bold text-lg mt-2">
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
