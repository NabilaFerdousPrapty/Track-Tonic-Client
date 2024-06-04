import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import FeaturedClasses from './FeaturedClasses/FeaturedClasses';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
         <Banner/>
         <Features/>
         <FeaturedClasses/>
         <Testimonial/>
        </div>
    );
};

export default Home;