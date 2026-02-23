import { useState } from "react";
import ProductCard from "../../components/productsCategory/ProductCard";
import desktops from "../../data/desktops";
import Filter from "../../components/filters/Filter";

const Desktops = () => {
  const [filteredDesktops, setFilteredDesktops] = useState(desktops);

  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto">

        <Filter
          products={desktops}
          onFilter={setFilteredDesktops}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {filteredDesktops.map((desktop) => (
            <ProductCard
              key={desktop.id}
              product={desktop}
              category="DESKTOPS"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Desktops;