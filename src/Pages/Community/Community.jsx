import React, { useState } from 'react';
import UseAxiosCommon from '../../hooks/UseAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import SinglePost from './SinglePost';
import UseAdmin from './../../hooks/UseAdmin';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Community = () => {
    const axiosCommon = UseAxiosCommon();
    const [currentPage, setCurrentPage] = useState(1);
    const postsCount = useLoaderData();
    const { count } = postsCount;
    const postsPerPage = 6;
    const numberOfPages = Math.ceil(count / postsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const { data: posts = [], isLoading, refetch } = useQuery({
      queryKey: ["posts", currentPage],
      queryFn: async () => {
          const { data } = await axiosCommon.get(`/posts?page=${currentPage - 1}&size=${postsPerPage}`);
          return data;
      },
  });
  
  
    if (isLoading) {
        return (
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto animate-pulse">
                        <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                            {[...Array(postsPerPage).keys()].map((index) => (
                                <div key={index} className="w-full ">
                                    <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className='my-5'>
            <Helmet>
                <title>Track Tonic || Community</title>
            </Helmet>
            <section className="bg-gray-100 text-gray-800 rounded-2xl">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <h1 className="text-3xl font-semibold text-center">All Community Posts</h1>
                    <p className="max-w-2xl mx-auto text-center text-gray-600">
                        Here you can find all the community posts. Share your thoughts and ideas with the community.
                        Get yourself updated with the latest community posts. Do not forget to share your thoughts and ideas with the community.
                    </p>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map(post => <SinglePost refetch={refetch} key={post._id} post={post} />)}
                    </div>
                    <div className="flex justify-center mt-4">
                        {pages.map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page + 1)}
                                className={`px-3 py-1 mx-1 border rounded ${currentPage === page + 1 ? "bg-teal-500 text-white" : "bg-white text-black"}`}
                            >
                                {page + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;
