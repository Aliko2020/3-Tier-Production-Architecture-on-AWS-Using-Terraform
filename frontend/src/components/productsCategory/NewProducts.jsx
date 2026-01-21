import ProductCard from "./ProductCard";
import products from "../../data/newproducts";


const BrandNewProducts = () => {
  return (
    <section className="py-8 px-5">
      <h2 className="font-bold text-gray-500 mb-8">
       New Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category={product.category} />
        ))}
      </div>
    </section>
  );
};

export default BrandNewProducts;
