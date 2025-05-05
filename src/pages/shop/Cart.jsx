import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const allPrice = cartItems
    .map((item) => item.price)
    .reduce((acc, curr) => acc + curr, 0);

  // Function to handle removing an item from cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  // Function to check if payment method is added
  const paymentMethodAdded = () => {
    // Replace with your logic to check if payment method is added
    return true; // For demonstration purposes; adjust as needed
  };

  // Function to handle proceeding to checkout
  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add items to proceed.");
    } else if (!paymentMethodAdded()) {
      alert("No payment method added. Add a payment method to proceed.");
    } else {
      // Proceed to checkout logic
      alert("No payment method added. Add a payment method to proceed.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20 h-full grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold text-center mb-8">My Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between w-full">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      {item.name}
                    </h4>
                    <p className="text-gray-700">{item.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-blue-900 font-semibold">
                        Quantity: {item.quantity}
                      </span>
                      <button
                        className="bg-red-600 hover:bg-red-500 text-white py-1 px-4 rounded"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm">Item Subtotal:</span>
                    <span className="font-semibold">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Billing Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total Items:</span>
          <span>{cartItems.length}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Subtotal:</span>
          <span>${allPrice}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span> <span>${allPrice}</span>
        </div>
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-blue-800 text-white py-2 px-6 rounded"
          onClick={handleProceedToCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
