import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
       const post =useLoaderData();
    return (
        <div>
   
            <h1>
                Post Details:
                {post.post_name}
            </h1>
        </div>
    );
};

export default PostDetails;