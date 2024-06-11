import React from "react";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import FeaturedClasses from "./FeaturedClasses/FeaturedClasses";
import Testimonial from "./Testimonial/Testimonial";
import Newsletter from "./News/Newsletter";
import LatestCommunity from "./LatestCommunity/LatestCommunity";
import Team from "./Team/Team";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Track Tonic || Home</title>
      </Helmet>
      <Banner />
      <Features />
      <FeaturedClasses />
      <Testimonial />
      <LatestCommunity />
      <Newsletter />
      <Team />
    </div>
  );
};

export default Home;
