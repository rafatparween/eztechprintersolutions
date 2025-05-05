import { Link } from "react-router-dom";
// import FeaturesSection from "./FeaturesSection";
// import CustomerReviews from "./CustomerReviews";
import BlogPosts from "./LatestBlog";
import LatestProducts from "../shop/LatestProducts";
import PrinterThree from "./PrinterThree";
import BannerSection from "../shop/BannerSection";
import Night from "./Night";

const HomePage = () => {
  return (
    <>
      <div className="w-screen overflow-hidden">
      
      {/* Background Section */}
      <div className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat">
        
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2024/03/01/202582-918431489_tiny.mp4" type="video/mp4" />
        </video>
       

        {/* Background Image Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8297818/pexels-photo-8297818.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        />

        {/* Navbar */}
        {/* <NavBar /> */}

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* <h1 className="text-4xl md:text-6xl font-normal text-black">
            Elevate Your Craftsmanship
          </h1> */}

<a
  href="#/Shop"
  className="inline-block mt-[40vh] text-2xl md:text-3xl text-white underline px-5 py-2 relative w-[400px]" // control width if needed
>
  <div className="rotating-text h-[2.5rem] overflow-hidden relative inline-block w-full">
    <span>Begin Your Printing Masterpiece</span>
    <span>Premium Quality Prints</span>
    <span>Fast Delivery Guaranteed</span>
    <span>Creative Design Solutions</span>
  </div>

  <style jsx>{`
    .rotating-text {
      display: inline-block;
    }

    .rotating-text span {
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      animation: rotateText 12s linear infinite;
    }

    .rotating-text span:nth-child(1) {
      animation-delay: 0s;
    }

    .rotating-text span:nth-child(2) {
      animation-delay: 3s;
    }

    .rotating-text span:nth-child(3) {
      animation-delay: 6s;
    }

    .rotating-text span:nth-child(4) {
      animation-delay: 9s;
    }

    @keyframes rotateText {
      0% { opacity: 0; transform: translateY(100%); }
      5% { opacity: 1; transform: translateY(0); }
      25% { opacity: 1; transform: translateY(0); }
      30% { opacity: 0; transform: translateY(-100%); }
      100% { opacity: 0; }
    }
  `}</style>
</a>

        </div>
      </div>

      {/* Footer */}
    </div>
      <PrinterThree/>
      <BannerSection/>
{/* 
      <FeaturesSection />
      <LatestProducts />
      <CustomerReviews /> */}
     <Night/>
    </>
  );
};

export default HomePage;
