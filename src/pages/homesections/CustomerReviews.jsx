import LocationOnIcon from "@mui/icons-material/LocationOn";

const CustomerReviews = () => {
  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-600 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">See What Our Customers Say</h2>
        <p className="text-lg mb-8">
          We constantly survey our customers and ask if they’re willing to say a
          few words. We’re proud of our high-quality products and services, and
          most proud of the value we’ve delivered to these clients.
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-1">{review.name}</h3>
                <div className="flex items-center text-sm">
                  <LocationOnIcon fontSize="small" />
                  <p className="ml-1">{review.location}</p>
                </div>
              </div>
            </div>
            <p className="text-lg mb-4">{review.review}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CustomerReviews;

const reviews = [
  {
    name: "Emily Brown",
    review:
      "printexpress123 has exceeded my expectations! The printer I bought works like a charm, and the customer support team was very helpful.",
    location: "Chicago, IL",
    image:
      "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?t=st=1720073470~exp=1720077070~hmac=f58d0fff3d606916126a4878c1e64a3bfaf3513a28f5db298f4a89bda1337f16&w=740",
  },
  {
    name: "Michael Johnson",
    review:
      "I've been using printexpress123 for a year now, and I'm impressed with the quality and reliability of their products. Highly recommended!",
    location: "Houston, TX",
    image:
      "https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142767.jpg?t=st=1720074862~exp=1720078462~hmac=cf401f8da919e38130da3cb8f745ace515b14e6b563d9b8ad94f7d99b93810a3&w=740",
  },
  {
    name: "Sarah Williams",
    review:
      "Great experience shopping with printexpress123. The printer arrived quickly, and setting it up was a breeze. Will buy again!",
    location: "Miami, FL",
    image:
      "https://img.freepik.com/free-photo/successful-good-looking-businesswoman-wearing-red-jacket-cross-arms-confident-smiling-self-assured-assertive-knowing-how-work-customers-managing-own-business-white-wall_176420-35497.jpg?t=st=1720074879~exp=1720078479~hmac=8c9662827aa76bd48f2fe9d273a3f2492ad72e763d4e331f8e0d8e7d52b785ea&w=740",
  },
  {
    name: "David Smith",
    review:
      "The customer service at printexpress123 is outstanding. They were patient and helped me find the perfect printer for my home office.",
    location: "Seattle, WA",
    image:
      "https://img.freepik.com/free-photo/elegant-man-with-folded-arms_1262-727.jpg?t=st=1720074814~exp=1720078414~hmac=734da8ff22e8f0e26fe3fe08b2f4339b779032a87da191059a8990b1ef42dbe9&w=740",
  },
];
