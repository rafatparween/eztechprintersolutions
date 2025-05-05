import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";

const BlogDetailPage = () => {
  // Using useParams to get the dynamic parameter (blog post id) from the URL
  const { blogID } = useParams();

  // Finding the specific blog post based on postId
  const post = blogPosts.find((post) => post.id === parseInt(blogID));

  // If the post is not found, you can handle it here (e.g., show a 404 page or redirect)
  if (!post) {
    return <div className="text-center text-gray-800 mt-8">Post not found</div>; // Example fallback if post is not found
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-red">
      <img
        src={post.image}
        alt={post.title}
        className="mb-8 rounded-lg shadow-md w-full h-80 object-cover"
      />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-2">{post.date}</p>
        <span
          className="text-whitebg-gradient-to-r from-cyan-500 to-blue-600 mb-4 font-semibold
               py-1 px-2 rounded"
        >
          {post.category}
        </span>
        <div className="space-y-4">
          {post.content.map((line, idx) => (
            <p key={idx} className="text-gray-700">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
