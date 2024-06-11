
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination,Navigation,Autoplay } from "swiper/modules";
import UseAxiosCommon from "../../../hooks/UseAxiosCommon";

import { useQuery } from "@tanstack/react-query";

const Testimonial = () => {
 const axiosCommon = UseAxiosCommon();
  const { data: testimonials = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/reviews");
      return data;
    },
  });
  
  // console.log(testimonials);
  return (
    <div>
      <Swiper
      
        effect={"coverflow"}
        
        centeredSlides={true}
        navigation={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id} className="border-2 border-gray-200 my-4 rounded-lg bg-slate-200">
          
            <div className="flex flex-col items-center justify-center p-4 bg-transparent rounded-lg shadow-lg ">
              <img
                className="object-cover w-20 h-20 mx-auto rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-gray-100">
                {testimonial.name}
              </h2>
              <Rating
                  style={{ maxWidth: 120 }}
                  value={testimonial.rating}
                  readOnly
                />
            
              <p className="text-sm text-center text-gray-600 dark:text-gray-300 my-6">
                {testimonial.review}
              </p>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
