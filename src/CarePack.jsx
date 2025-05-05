import React, { useState } from "react";
import {
  FaDesktop,
  FaPrint,
  FaWifi,
  FaEnvelope,
  FaWindows,
  FaPlug,
} from "react-icons/fa";

const CarePack = () => {
  const [carePackQuantity, setCarePackQuantity] = useState(1); // State to track quantity of Care Pack
  const [payPerIncidentQuantity, setPayPerIncidentQuantity] = useState(1); // State to track quantity of Pay Per Incident

  const carePackPrice = 49.99; // Price for Care Pack (example value)
  const payPerIncidentPrice = 29.99; // Price for Pay Per Incident (example value)

  // Function to handle quantity change for Care Pack
  const handleCarePackQuantityChange = (event) => {
    setCarePackQuantity(Number(event.target.value));
  };

  // Function to handle quantity change for Pay Per Incident
  const handlePayPerIncidentQuantityChange = (event) => {
    setPayPerIncidentQuantity(Number(event.target.value));
  };

  // Function to add items to cart (placeholder)
  const handleAddToCart = () => {
    // Placeholder function to add items to cart context or state
    alert("Added to cart.");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Having Issues With Your Device?
        </h1>
        <p className="text-lg mb-8 text-center">
          Get It Fixed By Our CompTIA A+ Certified Technicians
        </p>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center text-center">
            <FaDesktop className="text-4xl text-blue-900 transition duration-300 transform hover:scale-110" />
            <span className="text-xl mt-2">Desktop/Laptop</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPrint className="text-4xl text-blue-900 transition duration-300 transform hover:scale-110" />
            <span className="text-xl mt-2">Printer/Scanner</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaWifi className="text-4xl text-blue-900 transition duration-300 transform hover:scale-110" />
            <span className="text-xl mt-2">WiFi Router</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-blue-900 transition duration-300 transform hover:scale-110" />
            <span className="text-xl mt-2">Email Outlook</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaWindows className="text-4xl text-blue-900 transition duration-300 transform hover:scale-110" />
            <span className="text-xl mt-2">Operating System</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPlug className="text-4xl text-blue-900 transition duration-300 transform hover:scale-110" />
            <span className="text-xl mt-2">Other devices</span>
          </div>
        </div>
      </div>
      {/* ------------------------------- */}
      <section className="flex justify-center items-center">
        <img
          src="https://i.ibb.co/zswmpyp/image.png"
          alt=""
          className="w-full"
        />
      </section>
      {/* ----------------------- */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Providing You Satisfaction Is Our Profession
        </h1>
        <p className="text-lg mb-8 text-center">
          Best IT Support For A Hassle-Free Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Care Pack */}
          <div className="flex items-center flex-col space-y-4 bg-white rounded-lg shadow-md p-6">
            <img
              src="https://printlivepro.com/wp-content/uploads/2024/02/Frame-267.png"
              alt="Care Pack"
              className="w-full h-full object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">CarePack</h3>
            <span className="text-gray-600">Care Pack quantity</span>
            <input
              type="number"
              className="border border-gray-300 rounded-md px-3 py-1 w-20 text-center"
              value={carePackQuantity}
              onChange={handleCarePackQuantityChange}
            />
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">
                ${(carePackPrice * carePackQuantity).toFixed(2)}
              </span>
            </div>
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Pay Per Incident */}
          <div className="flex items-center flex-col space-y-4 bg-white rounded-lg shadow-md p-6">
            <img
              src="https://printlivepro.com/wp-content/uploads/2024/02/Frame-265.png"
              alt="Pay Per Incident"
              className="w-full h-full object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">Pay Per Incident</h3>
            <span className="text-gray-600">Pay Per Incident quantity</span>
            <input
              type="number"
              className="border border-gray-300 rounded-md px-3 py-1 w-20 text-center"
              value={payPerIncidentQuantity}
              onChange={handlePayPerIncidentQuantityChange}
            />
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">
                ${(payPerIncidentPrice * payPerIncidentQuantity).toFixed(2)}
              </span>
            </div>
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Example Third Service */}
          <div className="flex items-center flex-col space-y-4 bg-white rounded-lg shadow-md p-6">
            <img
              src="https://printlivepro.com/wp-content/uploads/2024/02/Frame-266.png"
              alt="Third Service"
              className="w-full h-full object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">Third Service</h3>
            <span className="text-gray-600">Third Service quantity</span>
            <input
              type="number"
              className="border border-gray-300 rounded-md px-3 py-1 w-20 text-center"
              value={1} // Adjust as needed for the third service
              onChange={() => {}}
              disabled // Disable input for demonstration purposes
            />
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">
                ${(99.99).toFixed(2)}
              </span>
            </div>
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarePack;
