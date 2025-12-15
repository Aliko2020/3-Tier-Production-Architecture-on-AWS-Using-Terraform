import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!localStorage.getItem("token");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Laptop", path: "/laptops" },
    { name: "Desktop", path: "/desktops" },
    { name: "Accessories", path: "/accessories" },
    { name: "Hot Discounts", path: "/discounts" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

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
              <button
                onClick={() => navigate("/login")}
                className="flex items-center text-green-600 font-medium"
              >
                <User size={18} className="mr-1" />
                Login
              </button>
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
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d0f16] text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-green-700 mt-5">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 mt-8 px-4">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive ? "text-green-500" : "hover:text-red-400"
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Mobile Auth Links */}
          {!isLoggedIn ? (
            <div className="flex">
              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="py-3 px-8 text-white bg-green-500 rounded-md font-medium"
              >
                Login
              </button>
            </div>
          ) : (
            <>
              {/* ✅ Mobile User Dashboard */}
              <div className="flex">
                <button
                  onClick={() => {
                    navigate("/userdashboard");
                    setMenuOpen(false);
                  }}
                  className="py-3 px-8 text-white bg-blue-500 rounded-md font-medium"
                >
                  Dashboard
                </button>
              </div>

              <div className="flex">
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="py-3 px-8 text-white bg-green-500 rounded-md font-medium"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

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
