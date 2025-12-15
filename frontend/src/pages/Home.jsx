import BrandNewProducts from "../components/BrandNew"
import DiscountSale from "../components/DiscountSale"
import { CategorySection } from "../components/CategorySection"

export const Home = () => {
  return (
    <div>
        <CategorySection />
        <BrandNewProducts />
        <DiscountSale />
    </div>
  )
}
