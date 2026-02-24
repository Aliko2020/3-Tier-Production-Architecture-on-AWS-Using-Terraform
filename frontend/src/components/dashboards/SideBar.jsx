import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Plus, BarChart2, User, Settings, LogOut, Menu} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      location.pathname === path
        ? "bg-gray-100 text-gray-700"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed md:static z-50 h-screen w-64 bg-[#E5E4E2] shadow-md p-5 rounded-md flex flex-col transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <nav className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
          <Link to="/" className={linkStyle("/")}>
            <Home size={18} /> Home
          </Link>

          <Link to="/dashboard/stats" className={linkStyle("/dashboard/stats")}>
            <BarChart2 size={18} /> My Stats
          </Link>

          <Link
            to="/dashboard/create"
            className={linkStyle("/dashboard/create")}
          >
            <Plus size={18} /> Add Product
          </Link>

          <Link
            to="/dashboard/profile"
            className={linkStyle("/dashboard/profile")}
          >
            <User size={18} /> Profile
          </Link>

          <Link
            to="/dashboard/settings"
            className={linkStyle("/dashboard/settings")}
          >
            <Settings size={18} /> Account Settings
          </Link>
        </nav>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 w-full transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
