import ProductCard from "@/components/productsCategory/ProductCard";
import laptops from "@/data/laptops";

const Laptops = () => {
  return (
    <section className="px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {laptops.map((laptop) => {
            return (
              <ProductCard
                key={laptop.id}
                product={laptop}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Laptops;
