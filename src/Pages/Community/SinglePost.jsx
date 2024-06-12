import React from "react";
import { Link } from "react-router-dom";
import UseRole from "../../hooks/UseRole";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import UseAxiosCommon from "../../hooks/UseAxiosCommon";
import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";

const SinglePost = ({ post, refetch }) => {
  const axiosCommon = UseAxiosCommon();
  const [role, isLoading] = UseRole(post?.author?.email);
  const { user } = useAuth();

  const handleUpVote = (id) => {
    axiosCommon
      .patch(`/posts/upvote/${id}`)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Upvoted successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        refetch();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const handleDownVote = (id) => {
    axiosCommon
      .patch(`/posts/downvote/${id}`)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Downvoted successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        refetch();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const isAuthorAdmin = role.isAdmin;
  const isAuthorTrainer = role.isTrainer;

  if (isLoading) {
    return (
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div>
            <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>
          </div>
        </section>
      </div>
    );
  }

  const handleVoteClick = (type, id) => {
    if (!user) {
      Swal.fire({
        title: "Error",
        text: "Please login to vote",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (type === "up") {
      handleUpVote(id);
    } else {
      handleDownVote(id);
    }
  };

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
        {role && (
          <span
            className={`text-xs text-white p-2 rounded-2xl absolute right-0 bottom-1 ${
              isAuthorAdmin
                ? "bg-teal-500"
                : isAuthorTrainer
                ? "bg-blue-500"
                : "bg-green-500"
            }`}
          >
            Posted by{" "}
            {isAuthorAdmin ? "Admin" : isAuthorTrainer ? "Trainer" : "Anonymous"}
          </span>
        )}
      </div>
      <div className="flex">
        <button
          className="text-gray-200 ml-2 bg-zinc-800 p-3 rounded-lg"
          onClick={() => handleVoteClick("up", post._id)}
        >
          <p className="flex justify-between items-center">
            <span className="text-sm">{post.upvote}</span>
            <FaArrowUp />
          </p>
        </button>
        <button
          className="text-gray-200 ml-2 bg-zinc-800 p-3 rounded-lg"
          onClick={() => handleVoteClick("down", post._id)}
        >
          <p className="flex justify-between items-center">
            <span className="text-sm">{post.downvote}</span>
            <FaArrowDown />
          </p>
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
