import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
const LatestBlog = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">In the Spotlight</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {blogPosts.map((post) => (
          <div key={post.id} className=" rounded-lg overflow-hidden shadow-md ">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <span
                className="text-whitebg-gradient-to-r from-cyan-500 to-blue-600 mb-4 font-semibold
               py-1 rounded  px-2"
              >
                {post.category}
              </span>
              <p className="text-gray-800">{post.content[0]}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 hover:underline mt-2 inline-block"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LatestBlog;
