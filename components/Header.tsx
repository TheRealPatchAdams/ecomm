import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-secondary shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">PATCH22</Link>
        </h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/products" className="hover:text-yellow-400">Shop</Link>
          <Link href="/custom" className="hover:text-yellow-400">Design</Link>
        </nav>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-secondary" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-secondary" />
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary text-secondary px-4 py-2">
          <Link href="/" className="block py-1 hover:text-yellow-400">Home</Link>
          <Link href="/products" className="block py-1 hover:text-yellow-400">Shop</Link>
          <Link href="/custom" className="block py-1 hover:text-yellow-400">Design</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
