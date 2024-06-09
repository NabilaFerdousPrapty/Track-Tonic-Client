import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UseAxiosCommon from '../../hooks/UseAxiosCommon';

const BookATrainer = () => {
    const { id } = useParams();
    
    const axiosCommon = UseAxiosCommon();
    const [trainer, setTrainer] = useState(null);

    useEffect(() => {
        axiosCommon.get(`trainers/${id}`)
            .then((response) => {
                console.log(response.data);
                setTrainer(response.data);
            })
            .catch((error) => {
                console.error('Error fetching trainer data:', error);
            });
    }, [axiosCommon, id]);

   

    return (
        <div>
           <div className='flex justify-center items-center my-3 shadow-xl'>
           <div className="max-w-xl p-4 shadow-md bg-gray-50 text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800">
                Year of Experience:{
                    trainer?.years_of_experience
                }
            </a>
		</div>
		<a rel="noopener noreferrer" href="#">
            {
                trainer?.name
            }
        </a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={
                trainer?.profile_image
            } alt="" className="block object-cover object-center w-full rounded-md h-full bg-gray-500" />
			<div className="flex items-center text-xs ">
				<span>
                    {
                        trainer?.
                        designation
                        
                    }
                </span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-indigo-600">
                    {
                        trainer?.
                        background_and_qualifications
                    }
                </h3>
			</a>
			<p className="leading-snug text-gray-600">
                {
                    trainer?.bio
                }
            </p>
		</div>
	</div>
</div>
           </div>
           <section className="py-20 bg-gray-100 text-gray-800 my-4 shadow-2xl">
    <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-indigo-600">Pricing</span>
            <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex justify-between flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold">Basic Membership</h4>
                        <span className="text-6xl font-bold">$10
                            <span className="text-sm tracking-wide">/month</span>
                        </span>
                    </div>
                    <div>
                    <p className="mt-3 leading-relaxed text-gray-600">Access to gym facilities during regular operating hours.</p>
                    <p className="leading-relaxed">Use of basic fitness equipment.</p>
                    <p className="leading-relaxed">Access to fitness tracking app - Track Tonic.</p>
                    <p className="leading-relaxed">Monthly fitness assessment.</p>
                    </div>
                    <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-indigo-600 text-gray-50 justify-end items-end">Get Started</button>
                </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex justify-between flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-indigo-600 text-gray-50">
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold">Standard Membership</h4>
                        <span className="text-6xl font-bold">$50
                            <span className="text-sm tracking-wide">/month</span>
                        </span>
                    </div>
                    <p className="leading-relaxed">All benefits of the basic membership.</p>
                    <p className="leading-relaxed">Access to group fitness classes such as yoga, spinning, and Zumba.</p>
                    <p className="leading-relaxed">Access to premium fitness equipment.</p>
                    <p className="leading-relaxed">Personalized workout plans.</p>
                    <p className="leading-relaxed">Nutritional guidance.</p>
                    <button type="button" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-100 text-indigo-600 justify-end items-end">Get Started</button>
                </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex justify-between flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold">Premium Membership</h4>
                        <span className="text-6xl font-bold">$100
                            <span className="text-sm tracking-wide">/month</span>
                        </span>
                    </div>
                    <p className="leading-relaxed">All benefits of the standard membership.</p>
                    <p className="leading-relaxed">Use of cardio and strength training equipment.</p>
                    <p className="leading-relaxed">Access to locker rooms and showers.</p>
                    <p className="leading-relaxed">Use of additional amenities like a sauna or steam room.</p>
                    <p className="leading-relaxed">Access to personal training sessions with certified trainers.</p>
                    <p className="leading-relaxed">Discounts on additional services such as massage therapy or nutrition counseling.</p>
                    <button type="button" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-indigo-600 text-gray-50 justify-end items-end">Get Started</button>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default BookATrainer;
