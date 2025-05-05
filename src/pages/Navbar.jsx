import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "./shop/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-bg-gradient-to-r from-[#00c6ff] to-[#0072ff] to-r from-[#209AC6] to-[#4BC0C8] text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <paths
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">
              EzTech-Print
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link>
                <Link
                  to="/categories"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Categories
                </Link>
                <Link
                  to="/shop"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Shop
                </Link>
                <Link
                  to="/account"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Account
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
                {/* <Link
                  to="/care-pack"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Care Pack
                </Link> */}
                <Link
                  to="/cart"
                  className="relative text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <ShoppingCartIcon />
                  <span className="ml-2">Cart</span>
                  {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center transform -translate-y-2 translate-x-2">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <Link
              to="/categories"
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Categories
            </Link>
            <Link
              to="/shop"
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Shop
            </Link>
            <Link
              to="/account"
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              My Account
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
            {/* <Link
              to="/care-pack"
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Care Pack
            </Link> */}
            <Link
              to="/cart"
              className="relative text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <ShoppingCartIcon />
              <span className="ml-2">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center transform -translate-y-2 translate-x-2">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import React from 'react';
// import './Navbar.css'; // Add the CSS file for Navbar styles
// // import './fonts.css'; // Add the CSS file for fonts
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="navbar-links">
//         <Link to="/">
//           {/* <Image 
//             src="/logo.png" // Update with your actual logo path (place logo inside 'public' folder)
//             alt="Company Logo"
//             width={150} // Adjust width as needed
//             height={50} // Adjust height as needed
//             className="logo"
//           /> */}
//           <h1 className="navbar-links">Print Assist</h1>  
//         </Link>
//       </div>
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         <Link to="/">About</Link>
//         <Link to="/">Contact</Link>
//         {/* <Link to="/Cart"><ShoppingBag className="cart-icon" /></Link> */}
//       </div>
//     </div>
//   );
// }

// export default Navbar;


