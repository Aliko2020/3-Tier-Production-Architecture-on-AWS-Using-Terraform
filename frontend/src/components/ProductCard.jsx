import { Link } from "react-router-dom";

const ProductCard = ({ product, category }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      state={{ product }}
      className="group border text-gray-500  rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-xs uppercase">{category}</p>
        <h3 className="mt-2 line-clamp-2">
          {product.name}
        </h3>
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
