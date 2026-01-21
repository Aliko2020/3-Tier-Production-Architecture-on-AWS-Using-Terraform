import { ProductCategoryCard } from "./ProductCategoryCard";


const CategorySection = () => {

  const categories = [
    { title: "Laptops", image: "/images/laptop.webp", path: "/laptops" },
    { title: "Desktops", image: "/images/desktop.webp", path: "/desktops" },
    { title: "Accessories", image: "/images/accessories.webp", path: "/accessories" },
  ];

  return (
    <section className="py-4 text-gray-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <ProductCategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection

