import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ location, query });
    
  };

  return (
    <section className="border text-[#b3b1b1] py-14 px-4 rounded-b-2xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-6">
          What are you looking for?
        </h2>

        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-3 justify-center"
        >
          
          <div className="relative w-full sm:w-[420px]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder=""
              className="w-full border px-4 py-3 pr-10 rounded-lg focus:outline-none"
            />

            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#DBDBDB]"
            >
              <Search size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
