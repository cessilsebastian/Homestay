import React from "react";
import amenitiesCSS from "./../Amenities/Amenities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "./../../assets/img1.jpg";
import img2 from "./../../assets/image1.jpg";
import img3 from "./../../assets/image1.jpg";

function Amenities() {
  return (
    <div className={`${amenitiesCSS.amenities_wrapper} section`}>
      <small className="section__Heading">Luxury Amenities</small>
      <h2 className="section__Title">
        Our Best <span>Amenities</span>
      </h2>

      <Swiper
        className={amenitiesCSS.swiper}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        speed={2000}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className={amenitiesCSS.amenities__item}>
            <img src={img1} alt="Pool" />
            <div className={amenitiesCSS.content}>
              <h2>Swimming pool</h2>
              <p>Our pool is open 24/7 for your convenience</p>
              <button>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={amenitiesCSS.amenities__item}>
            <img src={img2} alt="Gym" />
            <div className={amenitiesCSS.content}>
              <h2>Swimming pool</h2>
              <p>Our pool is open 24/7 for your convenience</p>
              <button>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={amenitiesCSS.amenities__item}>
            <img src={img3} alt="Volleyball Court" />
            <div className={amenitiesCSS.content}>
              <h2>Swimming pool</h2>
              <p>Our pool is open 24/7 for your convenience</p>
              <button>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Amenities;
