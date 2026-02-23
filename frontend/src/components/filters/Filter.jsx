import { useEffect, useState, useMemo } from "react";
import { MdOutlineClear } from "react-icons/md";
import { CiFilter } from "react-icons/ci";

const Filter = ({ products, onFilter }) => {
  const brands = useMemo(
    () => [...new Set(products.map((product) => product.brand))],
    [products],
  );

  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    let filtered = [...products];

    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    if (minPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price >= Number(minPrice),
      );
    }

    if (maxPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price <= Number(maxPrice),
      );
    }

    onFilter(filtered);
  }, [selectedBrand, minPrice, maxPrice, products, onFilter]);

  return (
    <div className="py-4 space-y-4 mb-8">
      
      <div className="flex text-sm rounded-md max-w-sm text-gray-400 flex-row gap-2">
        <div className="flex items-center hover:scale-105">
          <CiFilter size={30} />
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-white py-2 focus:outline-none"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="hover:scale-105">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="max-w-24 p-2 focus:outline-none border rounded-md"
            placeholder="Mini price"
          />
        </div>

        <div className="hover:scale-105">
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="max-w-24 p-2 focus:outline-none border rounded-md"
            placeholder="Maxi price"
          />
        </div>

        <button
          onClick={() => {
            setSelectedBrand("");
            setMinPrice("");
            setMaxPrice("");
          }}
          className="hover:scale-150"
        >
         <MdOutlineClear size={20} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
