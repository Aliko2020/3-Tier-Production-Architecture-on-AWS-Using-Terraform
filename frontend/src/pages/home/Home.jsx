import SearchBar from "@/components/search/SearchBar";
import CategorySection from "@/components/productsCategory/CategorySection";
import NewProducts from "@/components/productsCategory/NewProducts";
import DiscountSale from "@/components/common/DiscountSale";

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <SearchBar />
      <CategorySection />
      <NewProducts />
      <DiscountSale />
    </main>
  );
};

export default Home;
