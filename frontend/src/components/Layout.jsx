import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      <main className="flex-grow flex justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-screen-xl">
          <Outlet />
        </div>
      </main>

      <footer className="text-gray-300 text-center py-4">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
