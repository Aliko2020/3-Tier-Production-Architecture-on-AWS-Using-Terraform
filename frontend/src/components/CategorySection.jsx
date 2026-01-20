import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export const CategorySection = () => {
  const categories = [
    { title: "Laptops", image: "/images/laptop.png", path: "/laptops" },
    { title: "Desktops", image: "/images/desktop.png", path: "/desktops" },
    {
      title: "Accessories",
      image: "/images/accessories.png",
      path: "/accessories",
    },
  ];

  return (
    <section className="py-4 text-gray-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(({ title, image, path }) => (
          <NavLink
            to={path}
            key={title}
            className="relative group border overflow-hidden rounded-lg hover:shadow-sm transition-shadow duration-300 min-w-[260px] min-h-[340px]"
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute top-0 left-0 w-0 h-0 border-t-[120px] border-t-black/10 border-r-[120px] border-r-transparent" />

            <div className="p-4">
              <div className="">
                <h3 className="text-lg font-bold  leading-tight">
                  {title.split(" ")[0]}
                  {title.split(" ")[1] && <br />}
                  <span className="">{title.split(" ")[1]}</span>
                </h3>
              </div>
              <span className="inline-flex items-center mt-2 text-sm font-semibold hover:text-orange-700">
                SHOP <ArrowRight size={14} className="ml-1" />
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};
