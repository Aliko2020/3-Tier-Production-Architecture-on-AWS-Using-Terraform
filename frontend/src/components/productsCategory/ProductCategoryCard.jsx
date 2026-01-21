import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ProductCategoryCard = ({ title, image, path }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <NavLink
      to={path}
      className="relative group border overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300 min-w-[260px] min-h-[340px]"
    >

      <div className="relative w-full h-64 overflow-hidden">
        
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}

        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-105
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />
      </div>

      <div className="absolute top-0 left-0 w-0 h-0 border-t-[120px] border-t-black/10 border-r-[120px] border-r-transparent" />

      <div className="p-4">
        <h3 className="text-lg font-bold leading-tight">
          {title.split(" ")[0]}
          {title.split(" ")[1] && <br />}
          <span>{title.split(" ")[1]}</span>
        </h3>

        <span className="inline-flex items-center mt-2 text-sm font-semibold hover:text-orange-700">
          SHOP <ArrowRight size={14} className="ml-1" />
        </span>
      </div>
    </NavLink>
  );
};
