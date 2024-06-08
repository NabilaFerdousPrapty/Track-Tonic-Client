import React from 'react';
import img from '../../assets/404 error lost in space.gif'
const ErrorPage = () => {
    return (
        <div className='h-screen'>
            <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<img src={img} alt="" />
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold  bg-[#17ACAC] text-white rounded-xl">Back to homepage</a>
		</div>
	</div>
</section>
        </div>
    );
};

export default ErrorPage;