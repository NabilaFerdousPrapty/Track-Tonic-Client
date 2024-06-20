import React from 'react'
import UseAxiosCommon from '../../../hooks/UseAxiosCommon'
import { useQuery } from '@tanstack/react-query'
import { Link,  } from 'react-router-dom'

const LatestCommunity = () => {
	const axiosCommon = UseAxiosCommon()
	
	let { data: posts = [],isLoading } = useQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			const { data } = await axiosCommon.get('/posts')
			return data
		},
	})
	
	const sortedPosts = posts.sort(
		(a, b) => new Date(b.posted_date) - new Date(a.posted_date),
	)
	const recentPosts = sortedPosts.slice(0, 6)
	posts = recentPosts

	//   console.log(posts);
	if (isLoading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='w-24 h-24 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin'></div>
			</div>
		)
	}
	return (
		<div>
			<section className='bg-gray-100 text-gray-800 rounded-2xl'>
				<div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
					<h1 className='text-3xl font-semibold text-center'>
						Latest Community Posts
					</h1>
					<p className='max-w-2xl mx-auto text-center text-gray-600'>
						Stay up to date with the latest community posts. Share your thoughts
						and ideas with the community.
					</p>

					<div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{posts.map((post) => (
							<a
								key={post._id}
								rel='noopener noreferrer'
								href='#'
								className='max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50'
							>
								<img
									role='presentation'
									className='object-cover w-full rounded h-44 bg-gray-500'
									src={post.image}
								/>
								<div className='p-6 space-y-2'>
									<h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
										{post.post_name}
									</h3>
									<span className='text-xs text-gray-600'>
										{post.posted_date}
									</span>
									<p>{post.other_info}</p>

									<Link to={`/posts/${post._id}`}>
										<button
											type='button'
											className='my-4 px-6 py-3 text-sm rounded-md hover:underline  text-gray-600 btn bg-slate-400'
										>
											Read more
										</button>
									</Link>
								</div>
							</a>
						))}
					</div>
					<div className='flex justify-center'>
						<Link to={"/community"}>
						<button
							type='button'
							className='px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600'
						>
							Load more posts...
						</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default LatestCommunity
