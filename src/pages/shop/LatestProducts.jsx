import { Link } from "react-router-dom";
import { printerData } from "./printerData";
import BannerSection from "./BannerSection";

const LatestProducts = () => {
  // Extracting the latest four products from each category
  const latestProducts = [];
  printerData.forEach((category) => {
    category.printers.slice(0, 4).forEach((printer) => {
      latestProducts.push(printer);
    });
  });

  return (
    <>
      <section className="py-8 bg-gradient-to-r from-cyan-500 to-blue-600 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold  border-b p-2 mb-8 text-white">
            Latest Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {latestProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="rounded-lg overflow-hidden shadow-md bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <Link
                    to="/shop"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-blue-800 text-white py-2 px-4 
                  rounded"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BannerSection />
    </>
  );
};

export default LatestProducts;
