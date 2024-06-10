import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseRole from "../../hooks/UseRole";
import { FaArrowDown, FaArrowUp, FaUps } from "react-icons/fa";
import UseAxiosCommon from "../../hooks/UseAxiosCommon";
import Swal from "sweetalert2";

const SinglePost = ({ post }) => {
  const [role, isLoading] = UseRole(post.author.email);
  console.log(post.author.email, role);
  const axiosCommon=UseAxiosCommon();
 
  const [voteState, setVoteState] = useState(null); // 'upvote', 'downvote', or null

  const handleVote = async (voteType) => {
    try {
      // Make a POST request to your backend API to register the vote
      const response = await axiosCommon.patch(`/posts/${post._id}/vote`, { type: voteType });
      console.log(response.data); // Log the response from the backend

      // Update the local state to reflect the user's vote choice
      setVoteState(voteType);
      Swal
      .fire({
        title: "Success",
        text: "Vote added successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.error('Error voting:', error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Ok",
      });
      // Handle error (e.g., display an error message to the user)
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      <div className="flex">
        <button
          className="text-gray-600"
          disabled={!role || voteState === 'upvote'}
          onClick={() => handleVote('upvote')}
        >
          <FaArrowUp/>
        </button>
        <button
          className="text-gray-600 ml-2"
          disabled={!role || voteState === 'downvote'}
          onClick={() => handleVote('downvote')}
        >
          <FaArrowDown/>
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
