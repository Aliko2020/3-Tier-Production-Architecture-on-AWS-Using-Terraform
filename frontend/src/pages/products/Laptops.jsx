import { useState } from "react";
import ProductCard from "@/components/productsCategory/ProductCard";
import laptops from "@/data/laptops";
import Filter from "@/components/filters/Filter";

const Laptops = () => {
  const [filteredProducts, setFilteredProducts] = useState(laptops);

  return (
    <section className="px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <Filter products={laptops} onFilter={setFilteredProducts} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((laptop) => (
            <ProductCard key={laptop.id} product={laptop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Laptops;
