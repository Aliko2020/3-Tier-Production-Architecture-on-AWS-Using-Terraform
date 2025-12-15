import ProductCard from "./ProductCard";
import products from "../data/newproducts";


const BrandNewProducts = () => {
  return (
    <section className="py-10 px-5 bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-8">
        BRAND NEW PRODUCTS
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BrandNewProducts;
