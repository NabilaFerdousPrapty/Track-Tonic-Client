import React from 'react';

const Newsletter = () => {
    return (
        <div className='py-7'>
           <div className="w-full py-3 bg-gray-500 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" style={{backgroundImage: "url('https://i.ibb.co/5YyvYNn/pexels-pixabay-531880.jpg')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover"}}>
	<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
		<h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">Get Our Updates</h1>
		<p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            Get fitness tips and updates from our trainers 1-2 times a week.
            So you can stay on track with your fitness goals.
        </p>
		<div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-[#17ACAC] text-white ">Subscribe</button>
		</div>
	</div>
</div>
 
        </div>
    );
};

export default Newsletter;