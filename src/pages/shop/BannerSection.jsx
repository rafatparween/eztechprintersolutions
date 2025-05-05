// import { Link } from "react-router-dom";

// const BannerSection = () => {
//   return (
//     <div className="flex justify-center items-center p-10">
//       <section className="w-[95%] flex gap-10">
//         {/* Banner 1 */}
//         <div
//           className="bg-cover bg-center py-24 flex-1 rounded-xl "
//           style={{
//             backgroundImage: `url('http://printlivepro.com/wp-content/uploads/2023/10/banner-print-assured.jpg')`,
//           }}
//         >
//           <div className="max-w-7xl mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Genuine Printers at Affordable Prices
//             </h2>
//             <Link
//               to="/shop"
//               className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>

//         {/* Banner 2 */}
//         <div
//           className="bg-cover bg-center py-24 flex-1 rounded-xl "
//           style={{
//             backgroundImage: `url('http://printlivepro.com/wp-content/uploads/2023/10/print-assured-banner.jpg')`,
//           }}
//         >
//           <div className="max-w-7xl mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Change Tires for Winter Ensure Your Safety
//             </h2>
//             <Link to="/shop" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BannerSection;



// import Image from "next/image";


// const fonts = [
//   { name: "Script Fonts", image: "/font1.jpg" },
//   { name: "Display Fonts", image: "/font2.png" },
//   { name: "Sans Serif Fonts", image: "/font3.png" },
//   { name: "Serif Fonts", image: "/font4.jpg" },
//   { name: "Blackletter Fonts", image: "/fonnt5.jpg" },
//   { name: "Slab Serif Fonts", image: "/font6.png" },
//   { name: "Decorative Fonts", image: "/font7.png" },
//   { name: "Dingbats Fonts", image: "/font8.png" },
//   { name: "Colorful Fonts", image: "/font9.jpg" },
//   { name: "Wedding Fonts", image: "/font10.jpg" }
// ];

// export default function FontsSection() {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto text-center mt-12">
//   <h2 className="text-3xl font-playfair font-bold text-gray-900">Learn the Art of Calligraphy</h2>
//   <p className="text-gray-600 mt-4">
//     Master the timeless beauty of calligraphy with our expert-led classes. Whether you're a beginner or an experienced artist, 
//     our courses are designed to enhance your skills and creativity.
//   </p>
//   <p className="text-gray-600 mt-2">
//     Join our <span className="font-semibold text-gray-900">online and offline</span> sessions and explore a variety of calligraphy styles, from 
//     elegant script fonts to artistic decorative lettering.
//   </p>
//   <p className="text-gray-600 mt-2">
//     Start your journey today and transform your handwriting into an art form!
//   </p>
//   <div className="mt-6">
//     <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
//       Enroll Now
//     </button>
//   </div>
// </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[1250px] mx-auto mt-8 px-4">
//         {fonts.map((font, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <Image
//               src={font.image}
//               alt={font.name}
//               width={400}
//               height={300}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold text-gray-800">{font.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";

const printersList = [
  { name: "Inkjet Printers", image: "https://media.istockphoto.com/id/154188061/photo/digital-printing-wide-format.jpg?s=612x612&w=0&k=20&c=BmIPt1rOW4cXghJMLbRz47TvkF9Xtp1EJpMAXqVlRqQ=" },
  { name: "Laser Printers", image: "https://media.istockphoto.com/id/931155882/photo/technician-using-tablet-control-with-format-large-inkjet-printing-blue-vinyl.jpg?s=612x612&w=0&k=20&c=VOJXpB4trOan1EK1fH7bIoWa8ooVh0zGjaLCGqbjdU8=" },
  { name: "Photo Printers", image: "https://media.istockphoto.com/id/1212744091/photo/technician-operator-works-on-large-premium-industrial-printer-plotter-machine.jpg?s=612x612&w=0&k=20&c=_iMdqSqwtDYsJ81152mw-4s_ArpOH4k_RUflcEOlHjc=" },
  { name: "All-in-One Printers", image: "https://media.istockphoto.com/id/1139641986/photo/wide-format-printer-for-on-fabric-and-paper.jpg?s=612x612&w=0&k=20&c=071Kh3tP4v2gS7EkvwGEd1uKzl_ADMcBM9lVJTeWX2Y=" },
  { name: "Wireless Printers", image: "https://media.istockphoto.com/id/1051401804/photo/printing-photo-banner-on-large-format-color-plotter.jpg?s=612x612&w=0&k=20&c=rtJPXaJq7LSoF9YeqMEYLe6ajH-gAd6IYAI-G8Nb1NQ=" },
  { name: "Color Printers", image: "https://media.istockphoto.com/id/178452238/photo/office-copying-machine.jpg?s=612x612&w=0&k=20&c=05VUgD3YEBcrmIcxPUBtcwN-6qAqBMymSZPKDM5LwJg=" },
  { name: "Black & White Printers", image: "https://media.istockphoto.com/id/2053182348/photo/professional-female-employees-working-in-a-printing-house.jpg?s=612x612&w=0&k=20&c=VHli1MK8Eo8kXDJFTvC6iwKpu8GKppvbdpzBj6lXtPQ=" },
  { name: "Compact Printers", image: "https://media.istockphoto.com/id/2194370687/photo/spending-my-free-time-in-a-game-room.jpg?s=1024x1024&w=is&k=20&c=AvzMxya2piUzomSAKS60emuLLF4dwGzzocQ_cn3uO4o=" },
  { name: "Office Printers", image: "https://media.istockphoto.com/id/119444614/photo/working-industrial-large-format-uv-inkjet-printer.jpg?s=612x612&w=0&k=20&c=FvVpYBXvWdjNI-Sm4LoKGWsjybJMPeoVksutkfGrDxA=" },
  { name: "Large Format Printers", image: "https://media.istockphoto.com/id/2148765781/photo/close-up-of-graphic-workers-hands-screen-printing-with-squeegee.jpg?s=612x612&w=0&k=20&c=X1RKu-SkfgaH1_8vit0CTuEWxu6E5jm7w8uM2OWJURY=" },
];

const printers = [
  { name: "Canon PIXMA TS9120", image: "https://media.istockphoto.com/id/1390844337/photo/young-woman-in-architecture-office-printing-blueprints-in-plotter.jpg?s=612x612&w=0&k=20&c=PY1a92IZa4MI-m3tXaLddFpcHA5W1SD4l5wi7xzNpoY=", link: "https://www.canon.com/printers/PIXMA_TS9120" },
  { name: "HP Envy 6055e", image: "https://media.istockphoto.com/id/917826848/photo/young-woman-working-in-printshop.jpg?s=612x612&w=0&k=20&c=x7pASKmKEycf5KOJx_S8cv_d4UKj0MAi6WF6sPHKJ5A=", link: "https://www.hp.com/us-en/shop/pdp/hp-envy-6055e" },
  { name: "Epson EcoTank ET-4760", image: "https://media.istockphoto.com/id/1225779275/photo/work-at-home-in-a-large-white-and-blue-room.jpg?s=612x612&w=0&k=20&c=4zyJn1vkpmJJO03y4TekSARvnHhLc1L2mZRam9fMkbM=", link: "https://www.epson.com/For-Home/Printers/Inkjet/EcoTank-ET-4760-All-in-One-Cartridge-Free-Supertank-Printer/p/C11CG94201" },
];

export default function PrintersSection() {
  return (
    <section className="relative w-full h-full py-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://cdn.pixabay.com/video/2017/02/22/7895-205257266_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto text-center text-white px-6">
        <h2 className="text-7xl font-playfair font-bold">Discover the Best Printers Online</h2>
        <p className="mt-4 text-3xl">
          Explore a wide range of top-rated printers for your home, office, or business needs. 
          We bring you the latest models with high performance and budget-friendly pricing.
        </p>
        <p className="mt-2 text-2xl">
          Choose from trusted brands like <span className="font-semibold">Canon, HP, and Epson</span> – all in one place. 
          Get reliable printing solutions with fast delivery and dedicated customer support.
        </p>
        <p className="mt-2 text-2xl">
          Shop now and elevate your printing experience with premium quality and unbeatable value!
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>

      {/* Printer Categories Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[1250px] mx-auto mt-8 px-4">
        {printersList.map((printer, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={printer.image}
              alt={printer.name}
              width={400}
              height={300}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{printer.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Top Recommended Printers */}
      <div className="relative max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Top Recommended Printers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {printers.map((printer, index) => (
            <a
              key={index}
              href={printer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={printer.image}
                alt={printer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{printer.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
