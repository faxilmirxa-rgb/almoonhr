import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [ 
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Jobs", path: "/jobs" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+918976663732";

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-2 border-[#1871db]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="ALMON HR" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-['DM_Sans'] text-gray-600 hover:text-[#1871db] transition-colors duration-300 text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Start a Conversation Button (Desktop) */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center bg-[#1871db] text-white px-6 py-2.5 rounded-full font-['DM_Sans'] text-base font-semibold hover:bg-[#1460b8] transition-all duration-300 hover:scale-105 shadow-md shrink-0"
          >
            Start a Conversation
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-gray-700 focus:outline-none p-1"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block font-['DM_Sans'] text-gray-600 hover:text-[#1871db] py-2 transition-colors text-base font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-[#1871db] text-white px-4 py-3 rounded-full font-['DM_Sans'] text-base font-semibold hover:bg-[#1460b8] transition-all duration-300 w-full mt-3"
                >
                  Start a Conversation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;