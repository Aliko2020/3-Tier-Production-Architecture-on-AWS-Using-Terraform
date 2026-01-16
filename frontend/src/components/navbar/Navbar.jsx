import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Laptops", path: "/laptops" },
    { name: "Desktops", path: "/desktops" },
    { name: "Accessories", path: "/accessories" },
    { name: "Hot Discounts", path: "/discounts" },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="flex justify-between items-center mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
        {/* Left: Menu button (mobile) */}
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              end
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Right: Cart + Auth Links */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <div className="relative lg:hidden">
            <ShoppingCart className="w-6 h-6 text-black" />
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>

          {/* Auth Links */}
          {!isLoggedIn ? (
            <div className="hidden lg:flex space-x-4">
              <Link to="/login" className="flex items-center font-medium">
                Login
              </Link>

              <span>|</span>

              <Link to="/register" className="flex items-center font-medium">
                Register
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => navigate("/userdashboard")}
                className="flex items-center text-gray-500"
                title="User Dashboard"
              >
                <User size={22} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}

      <MobileSidebar
        navLinks={navLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
