// Shop.js
import React, { useContext } from "react";
import { printerData } from "./printerData";
import { CartContext } from "./CartContext";

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const allPrinters = printerData.reduce((acc, category) => {
    return acc.concat(category.printers);
  }, []);

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://printlivepro.com/wp-content/uploads/2022/10/pngtree-banner-background-of-blue-technology-mobile-communication-conference-image_925353.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50"></div>
        <h2 className="relative text-white text-4xl font-bold">
          The Sale of Best Products
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allPrinters.map((printer) => (
            <div
              key={printer.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={printer.image}
                alt={printer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-blue-900">
                  {printer.name}
                </h4>
                <p className="text-gray-700">{printer.description}</p>
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-blue-800 text-white py-1 px-14 rounded"
                  onClick={() => addToCart(printer)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
