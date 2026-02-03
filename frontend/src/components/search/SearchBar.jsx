import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ query });
  };

  return (
    <section
      className="relative bg-cover bg-center py-20 px-4 rounded-b-2xl"
      style={{
        backgroundImage:
          "url('/public/images/herobg.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/5 rounded-b-2xl" />

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-xl text-black/50 font-semibold mb-6">
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
              placeholder="Dell xps 13, Hp Elitebook, Webcam"
              className="w-full border px-4 py-3 pr-10 rounded-lg text-black focus:outline-none"
            />

            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
