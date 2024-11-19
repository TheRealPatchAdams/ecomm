import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} PATCH22 |{" "}
          <a href="/privacy" className="hover:text-yellow-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
