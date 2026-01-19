import { NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const MobileSidebar = ({ navLinks, menuOpen, setMenuOpen }) => {

  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white transform
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out z-50`}
    >
      
      <div className="flex justify-between items-center px-4 py-1 border-b mt-5">
        <h2 className="text-lg text-gray-700 font-semibold">Menu</h2>
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
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }`
            }
          >
            {name}
          </NavLink>
        ))}

        
        {!isLoggedIn ? (
          <button
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
            className="py-3 px-8 text-white bg-green-500 rounded-md font-medium"
          >
            Login
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                navigate("/userdashboard");
                setMenuOpen(false);
              }}
              className="py-3 px-8 text-white bg-blue-500 rounded-md font-medium"
            >
              Dashboard
            </button>

            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="py-3 px-8 text-white bg-red-500 rounded-md font-medium"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
