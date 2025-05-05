import React, { useState, useEffect } from "react";
import { printerData } from "./printerData"; // Assuming printerData is imported correctly

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("DeskJet Printers"); // State to track selected category

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to render product cards based on selected category
  const renderProducts = () => {
    // Find the selected category from printerData
    const categoryData = printerData.find(
      (category) => category.category === selectedCategory
    );

    if (!categoryData) {
      return <p>No products found for this category.</p>; // Handle case where category is not found
    }

    // Render product cards for the selected category
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryData.printers.map((printer) => (
          <div key={printer.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={printer.image}
              alt={printer.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{printer.name}</h3>
            <p className="text-gray-600">{printer.description}</p>
            <p className="font-bold mt-2">${printer.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="flex space-x-4 mb-4">
        {printerData.map((category) => (
          <button
            key={category.category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category.category
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-700`}
            onClick={() => handleCategorySelect(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory || "All Products"}
        </h2>
        {renderProducts()}
      </div>
    </div>
  );
};

export default Category;
