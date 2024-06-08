import React from "react";
import { Link } from "react-router-dom";
import UseRole from "../../hooks/UseRole";

const SinglePost = ({ post }) => {
  const [role, isLoading] = UseRole(post.author.email);
  console.log(post.author.email, role);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 p-1 relative">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={post.image}
        alt={post.post_name}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {post.post_name}
        </h3>
        <span className="text-xs text-gray-600">{post.posted_date}</span>
        <p>{post.other_info}</p>
        <Link to={`/posts/${post._id}`}>
          <button
            type="button"
            className="my-4 px-6 py-3 text-sm rounded-md hover:underline text-gray-600 btn bg-slate-400"
          >
            Read more
          </button>
        </Link>
        {!isLoading && role.isAdmin && (
          <span className="text-xs text-white bg-teal-500 p-2 rounded-2xl absolute right-0 bottom-1">
            Posted by Admin
          </span>
        )}
        {!isLoading && role.isTrainer && (
          <span className="text-xs text-white bg-teal-500 p-2 rounded-2xl absolute right-0 bottom-1">
            Posted by Trainer
          </span>
        )}
        {!isLoading && !role.isAdmin && !role.isTrainer && (
          <span className="text-xs text-white bg-teal-500 p-2 rounded-2xl absolute right-0 bottom-1">
            Posted by Member{" "}
          </span>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
