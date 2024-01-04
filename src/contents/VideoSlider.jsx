import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../css/web.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function VideoSlider({ videos, title, id }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const youtubeClass = loading ? "isLoading" : "isLoaded";

  return (
    <section id={id}>
      <h2 className="web_title">{title}</h2>
      <div className="web_wrap">
        <div className="video_slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper-${id}`}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1600: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {videos.map((video, key) => (
              <SwiperSlide key={key}>
                <div className="video" key={key}>
                  <div className="video__thumb play__icon">
                    <Link to={`/video/${video.videoId}`}>
                      <img src={video.img} alt={video.title} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
