import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

const LatestBlog = () => {
  return (
    <div className="p-4 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Blogs </h1>
      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md"
          >
            <div className="md:w-1/3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover object-center"
              />
            </div>
            <div className="md:w-2/3 p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <span
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 mb-4 font-semibold
               py-1 rounded  px-2"
              >
                {post.category}
              </span>
              <p className="text-gray-800">{post.content[0]}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 hover:underline mt-2 inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
