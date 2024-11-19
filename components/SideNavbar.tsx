import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Updated import
import Link from "next/link"; // Use Link for navigation in Next.js

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/products" },
  { name: "Custom Patch App", link: "/custom" },
  { name: "About Us", link: "/about" },
  { name: "Community", link: "/community" },
];

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 h-screen flex z-50">
      {/* Hamburger Icon */}
      <button
        onClick={toggleNavbar}
        className="p-4 bg-gray-800 text-white rounded-r-lg focus:outline-none"
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Side Navbar */}
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 text-white w-64 h-full p-6"
      >
        <h1 className="text-xl font-bold mb-6">Morale Patch Store</h1>
        <ul className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} passHref>
                <a
                  className="hover:underline text-lg"
                  onClick={toggleNavbar}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <footer className="absolute bottom-6 text-sm">
          <p>© 2024 Patch22. All Rights Reserved.</p>
        </footer>
      </motion.nav>
    </div>
  );
}
