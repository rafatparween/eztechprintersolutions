import React from "react";
import { FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div className="text-blue-900 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg">
            <FaShippingFast className="text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">FREE SHIPPING & RETURNS</h3>
            <p className="text-sm">
              Free shipping offers may be available on all orders over $99.
            </p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg">
            <FaDollarSign className="text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-sm">
              You can try a product or service without any financial risk.
            </p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg">
            <FaHeadset className="text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">ONLINE SUPPORT</h3>
            <p className="text-sm">
              Online assistance provided by Print LivePro is efficient,
              friendly, and courteous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
