import React from "react";

import { developerText } from "../data/develop";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "../css/developer.css";

export default function Developer_Contents() {
  return (
    <section>
      <h2 className="developer_title"> 추천 개발자를 소개합니다.</h2>
      <div className="develpoer_inner">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {developerText.map((developer, key) => (
            <SwiperSlide key={key}>
              <div className="develpoer" key={key}>
                <div className="develpoer_img play_icon">
                  <Link to={`/channel/${developer.channelId}`}>
                    <img src={developer.img} alt={developer.name} />
                  </Link>
                </div>
                <div className="develpoer_info">
                  <Link to={`/channel/${developer.channelId}`}>
                    {developer.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
