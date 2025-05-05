import React from "react";
import { motion } from "framer-motion";

export default function PrinterThree() {
  return (
    <div className="bg-gradient-to-br from-[#0a192f] to-[#172a45] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Print Perfection Awaits
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover professional-grade printers that deliver stunning results for home, office, and creative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Print Quality */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex flex-col items-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-xl w-20 h-20 flex items-center justify-center rounded-full shadow-lg z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="border-dashed border-t-2 border-cyan-400/30 w-40 h-10 mt-[-1rem] z-0"></div>
            </div>
            <h3 className="text-2xl font-bold mt-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ultra-HD</span> Resolution
            </h3>
            <p className="text-gray-300 mt-4 px-4 text-sm md:text-base max-w-xs">
              Experience photorealistic prints with 4800×1200 dpi resolution, delivering razor-sharp text and vibrant, true-to-life colors. Perfect for photos, presentations, and professional documents.
            </p>
          </motion.div>

          {/* Wireless Printing */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex flex-col items-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl w-20 h-20 flex items-center justify-center rounded-full shadow-lg z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div className="border-dashed border-t-2 border-blue-400/30 w-40 h-10 mt-[-1rem] z-0"></div>
            </div>
            <h3 className="text-2xl font-bold mt-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Smart</span> Connectivity
            </h3>
            <p className="text-gray-300 mt-4 px-4 text-sm md:text-base max-w-xs">
              Print effortlessly from any device with advanced WiFi, Bluetooth, and cloud printing support. Compatible with AirPrint, Google Cloud Print, and Mopria for seamless mobile printing.
            </p>
          </motion.div>

          {/* Eco-Friendly */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex flex-col items-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl w-20 h-20 flex items-center justify-center rounded-full shadow-lg z-10">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="border-dashed border-t-2 border-green-400/30 w-40 h-10 mt-[-1rem] z-0"></div>
            </div>
            <h3 className="text-2xl font-bold mt-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Eco</span> Efficient
            </h3>
            <p className="text-gray-300 mt-4 px-4 text-sm md:text-base max-w-xs">
              Energy Star certified with automatic duplex printing that reduces paper use by up to 50%. Our printers use 30% less energy and feature high-yield ink cartridges to minimize waste.
            </p>
          </motion.div>
        </div>

        {/* Additional Features Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Printers?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>2-Year Warranty</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Easy Returns</span>
            </div>
          </div>
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 relative"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg px-12 py-4 rounded-full transition-all shadow-xl"
          >
            <span className="relative z-10">EXPLORE OUR PRINTER COLLECTION &rarr;</span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ 
                x: [null, 400, -100],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white/20 to-transparent skew-x-12"
            />
          </motion.button>
          
          {/* Special Offer Badge */}
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -right-10 -top-5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          >
            LIMITED STOCK!
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}