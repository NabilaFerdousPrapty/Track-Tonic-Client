import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div className=" my-5 bg-slate-300 rounded-2xl shadow-2xl">
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={post.image}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src={post.author.image}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                {post.post_name}
              </h3>
              <p className="text-sm text-slate-400">
                {" "}
                By {post.author.name}, {post.posted_date}
              </p>
            </div>
          </header>
          <p className=" font-merriweather text-justify">{post.details}.</p>
          <p className="my-7 font-semibold ">
            <span className="font-bold text-teal-500">
                <i className="fas fa-info-circle"></i>
                Other information about the post:
            </span>
            {post.other_info}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
