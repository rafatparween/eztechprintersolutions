import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaBlog, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopyright } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiRefund2Fill } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BsShop className="mr-2 text-2xl" />
              EzTech-Print
            </h2>
            <p className="mb-6 text-blue-100">
              Your one-stop solution for all office needs. We provide a wide range of 
              small business and home office printers.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <FiMail className="mr-3 text-lg" />
                <span>support@eztechprintersolutions.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 text-lg" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-lg" />
                <span>United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaHome className="mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaHome className="mr-3 opacity-80" />
                <Link to="/" className="hover:text-blue-200 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <FaShoppingBag className="mr-3 opacity-80" />
                <Link to="/shop" className="hover:text-blue-200 transition-colors">
                  Shop
                </Link>
              </li>
              <li className="flex items-center">
                <FaBlog className="mr-3 opacity-80" />
                <Link to="/blog" className="hover:text-blue-200 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 opacity-80" />
                <Link to="/contact" className="hover:text-blue-200 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <HiOutlineDocumentText className="mr-2" />
              Legal
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <HiOutlineDocumentText className="mr-3 opacity-80" />
                <Link to="/disclaimer" className="hover:text-blue-200 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li className="flex items-center">
                <HiOutlineDocumentText className="mr-3 opacity-80" />
                <Link to="/privacy-policy" className="hover:text-blue-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center">
                <HiOutlineDocumentText className="mr-3 opacity-80" />
                <Link to="/terms-and-conditions" className="hover:text-blue-200 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li className="flex items-center">
                <RiRefund2Fill className="mr-3 opacity-80" />
                <Link to="/refund-and-returns-policy" className="hover:text-blue-200 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="mb-4 text-blue-100">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-blue-500 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social}
                  >
                    <span className="text-white">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400 mt-8 pt-6 text-center text-blue-100 flex items-center justify-center">
          <FaCopyright className="mr-2" />
          <span>Copyright 2025 © eztechprintersolutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;