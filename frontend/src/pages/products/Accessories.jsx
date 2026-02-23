import { useState } from "react";
import ProductCard from "@/components/productsCategory/ProductCard";
import accessories from "@/data/accessories";
import Filter from "@/components/filters/Filter";

const Accessories = () => {
  const [filteredAccessories, setFilteredAccessories] = useState(accessories);

  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto">

        <Filter
          products={accessories}
          onFilter={setFilteredAccessories}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {filteredAccessories.map((accessory) => (
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