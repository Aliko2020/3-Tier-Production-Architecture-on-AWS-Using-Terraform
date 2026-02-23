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
      
      <div className="flex text-sm p-1 max-w-sm text-gray-400 flex-row gap-2">
        <div className="flex items-center p-2 mt-1 border rounded-md">
          <CiFilter size={20} />
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-white focus:outline-none"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="max-w-16 p-2 mt-1 border rounded-md focus:outline-none"
            placeholder="Min"
          />
        </div>

        <div className="">
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="max-w-16 p-2 mt-1 border rounded-md focus:outline-none"
            placeholder="Max"
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
