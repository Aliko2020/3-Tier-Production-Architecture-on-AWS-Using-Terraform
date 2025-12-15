import { useState } from "react";
import ProductCard from "../components/ProductCard";
import laptops from "../data/laptops";

const Laptops = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const brands = ["All", ...new Set(laptops.map((l) => l.brand).filter(Boolean))];

  const filteredLaptops =
    selectedBrand === "All"
      ? laptops
      : laptops.filter(
          (l) => l.brand?.toLowerCase() === selectedBrand.toLowerCase()
        );

  return (
    <section className="px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          
          {/* Brand Filter Dropdown */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="brandFilter"
              className="text-gray-700 font-medium text-sm"
            >
              Filter by Brand:
            </label>
            <select
              id="brandFilter"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Laptop Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {filteredLaptops.length > 0 ? (
            filteredLaptops.map((laptop) => (
              <ProductCard
                key={laptop.id}
                product={laptop}
                category="LAPTOPS"
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No laptops found for this brand.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Laptops;
