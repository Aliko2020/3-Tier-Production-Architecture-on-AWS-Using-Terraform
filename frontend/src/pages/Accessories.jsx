import ProductCard from "../components/ProductCard";
import accessories from "../data/accessories";

const Accessories = () => {
  const displayedAccessories = accessories.slice(0, 8);

  return (
    <section className="px-5 bg-white py-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-lg font-bold text-gray-800">ACCESSORIES COLLECTION</h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {displayedAccessories.map((accessory) => (
            <ProductCard
              key={accessory.id}
              product={accessory}
              category="ACCESSORIES"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
