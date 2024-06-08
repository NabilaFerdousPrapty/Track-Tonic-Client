import React from 'react';
import UseAxiosCommon from '../../hooks/UseAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import SinglePost from './SinglePost';
import UseAdmin from './../../hooks/UseAdmin';

const Community = () => {
    const axiosCommon = UseAxiosCommon();
    
    const { data: posts = [], isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const { data } = await axiosCommon.get("/posts");
            return data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='my-5'>
            <section className="bg-gray-100 text-gray-800 rounded-2xl">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <h1 className="text-3xl font-semibold text-center">All Community Posts</h1>
                    <p className="max-w-2xl mx-auto text-center text-gray-600">
                        Here you can find all the community posts. Share your thoughts and ideas with the community.
                        Get yourself updated with the latest community posts. Do not forget to share your thoughts and ideas with the community.
                    </p>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            posts.map(post => <SinglePost key={post._id} post={post} />)
                        }
                    </div>
                  
                </div>
            </section>
        </div>
    );
};

export default Community;
