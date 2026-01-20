import ProductCard from "../../components/ProductCard";
import desktops from "../../data/desktops"; 

const Desktops = () => {
  const displayedDesktops = desktops.slice(0, 5);

  return (
    <section className="px-5">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-gray-500 font-semibold">
            Desktops
          </h1>
        </div>

    
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {displayedDesktops.map((desktop) => (
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
