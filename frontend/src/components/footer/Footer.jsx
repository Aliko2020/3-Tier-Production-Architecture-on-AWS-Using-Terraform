import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-gray-700">

      {/* Bottom Bar */}
      <div className="mt-6">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <p className="text-gray-500">
            © 2025 • Bytecraft Savannah • All Rights Reserved
          </p>
          <div className="hidden gap-4 text-gray-500 sm:flex">
            <a
              href="#"
              className="hover:text-orange-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-orange-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
