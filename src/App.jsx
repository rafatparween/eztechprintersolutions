import React from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homesections/HomePage";
import MainBlogPage from "./pages/homesections/MainBlogPage";
import BlogDetailPage from "./pages/homesections/BlogDetailPage";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import MyAccount from "./pages/MyAccount";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/shop/Cart";
import Category from "./pages/shop/Category";
import CarePack from "./CarePack";
import Disclaimer from "./pages/footersection/Disclaimer";
import PrivacyPolicy from "./pages/footersection/PrivacyPolicy";
import { CartProvider } from "./pages/shop/CartContext";
import TermsAndConditions from "./pages/footersection/TermsAndConditions";
import RefundAndReturnsPolicy from "./pages/footersection/RefundAndReturnsPolicy";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<MainBlogPage />} />
          <Route path="/blog/:blogID" element={<BlogDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/care-pack" element={<CarePack />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/refund-and-returns-policy"
            element={<RefundAndReturnsPolicy />}
          />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
