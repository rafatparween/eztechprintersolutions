import React from "react";
import { FiPackage, FiMail, FiSearch } from "react-icons/fi";

const OrderTracker = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 mt-[65px]">
      <div className="max-w-3xl mx-auto">
        {/* Header with icon */}
        <div className="text-center mb-10">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
            <FiPackage className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Track Your Order
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your Order ID and billing email below to check your order status.
            You'll find these details in your confirmation email.
          </p>
        </div>

        {/* Tracking Card */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <form className="space-y-6">
              {/* Order ID Field */}
              <div className="relative">
                <label
                  htmlFor="order-id"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Order ID
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="order-id"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md border text-lg"
                    placeholder="e.g. ORD-123456"
                  />
                </div>
              </div>

              {/* Billing Email Field */}
              <div className="relative">
                <label
                  htmlFor="billing-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Billing Email
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="billing-email"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md border text-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Track Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <FiSearch className="mr-2 h-5 w-5" />
                  Track Order
                </button>
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="bg-gray-50 px-6 py-4 sm:px-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Need help finding your order details?
            </h3>
            <p className="text-sm text-gray-500">
              Check your email inbox for our order confirmation, or contact our{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                customer support
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>

        {/* Status Visualization (Placeholder) */}
        <div className="mt-12 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Status Guide
          </h2>
          <div className="flex justify-between items-center">
            {['Processing', 'Shipped', 'In Transit', 'Delivered'].map((status, index) => (
              <div key={status} className="flex flex-col items-center">
                <div className={`h-3 w-3 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'} mb-2`}></div>
                <span className={`text-sm ${index === 0 ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;