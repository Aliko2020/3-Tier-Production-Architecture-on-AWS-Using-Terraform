import BrandNewProducts from "../../components/BrandNew"
import DiscountSale from "@/components/common/DiscountSale"
import { CategorySection } from "../../components/CategorySection"

const Home = () => {
  return (
    <div>
        <CategorySection />
        <BrandNewProducts />
        <DiscountSale />
    </div>
  )
}

export default Home