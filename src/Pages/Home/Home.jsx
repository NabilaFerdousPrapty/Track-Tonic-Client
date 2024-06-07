import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import FeaturedClasses from './FeaturedClasses/FeaturedClasses';
import Testimonial from './Testimonial/Testimonial';
import Newsletter from './News/Newsletter';
import LatestCommunity from './LatestCommunity/LatestCommunity';
import Team from './Team/Team';


const Home = () => {
    return (
        <div>
         <Banner/>
         <Features/>
         <FeaturedClasses/>
         <Testimonial/>
         <LatestCommunity/>
         <Newsletter/>
         <Team/>
        </div>
    );
};

export default Home;