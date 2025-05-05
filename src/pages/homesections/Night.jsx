const Night = () => {
    return (
      <div className="mb-8">
        <div
          className="bg-white mx-auto max-w-[1230px] m-auto sm:w-[90%] md:w-[87%] bg-cover bg-center rounded-lg flex items-center mt-1 md:mt-3"
          style={{
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/thumbnails/019/946/760/small/dark-blue-smoke-background-navy-blue-watercolor-and-paper-texture-beautiful-dark-gradient-hand-drawn-by-brush-grunge-background-watercolor-wash-aqua-painted-texture-close-up-background-with-rays-vector.jpg)", 
          }}
        >
          <div className="p-4 sm:p-8 text-black text-center sm:text-left w-full">
            {/* Heading */}
            <h2 className="text-[20px] text-white sm:text-[24px] md:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] md:leading-[48px] mb-2 sm:mb-4 font-bold">
              Print Smarter, Work Faster!
            </h2>
  
            {/* Offer Text */}
            <h3 className="text-[14px] text-white sm:text-[16px] md:text-[26px] lg:text-[32px] leading-[22px] sm:leading-[30px] md:leading-[44px] mb-2 sm:mb-4">
              Discover high-quality printers with unbeatable prices and fast delivery.
            </h3>
  
            {/* CTA Button */}
            <p className="inline-flex items-center bg-blue-600 text-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.2rem] px-4 py-2 rounded-md min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px]">
              Explore Now
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Night;
  