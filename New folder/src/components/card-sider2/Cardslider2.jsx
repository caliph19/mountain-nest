import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./cardslider2.css";
import { FreeMode, Pagination } from "swiper/modules";
import { IoIosMan } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import photo11 from "../../images/clint1.jpg";
import photo12 from "../../images/clint2.jpg";
import photo13 from "../../images/hotel3.png";

const Cardslider2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide id="set-slider-card1">
          <div className="card11">
            <div className="card1-img">
              <div className="empty">
                <img src={photo12} id="set-map-image" />
              </div>
            </div>
            <div className="card11-details22">
              <div className="card11-details22-center">
                <div className="sliderclintname">
                  <h1>Moin Khan</h1>
                </div>
                <div className="sliderclintjob">
                  <p>Traveller</p>
                </div>
                <div className="sliderclintreview">
                  <p>
                    The objects visited are very interesting and complete. Truly
                    an unforgettable experience trip with Mountain Nest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="set-slider-card1">
          <div className="card11">
            <div className="card1-img">
              <div className="empty">
                <img src={photo11} id="set-map-image" />
              </div>
            </div>
            <div className="card11-details22">
              <div className="card11-details22-center">
                <div className="sliderclintname">
                  <h1>Maurelia</h1>
                </div>
                <div className="sliderclintjob">
                  <p>Adventure Enthusiast</p>
                </div>
                <div className="sliderclintreview">
                  <p>
                    The objects visited are very interesting and complete. Truly
                    an unforgettable experience trip with Mountain Nest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="set-slider-card1">
          <div className="card11">
            <div className="card1-img">
              <div className="empty">
                <img src={photo12} id="set-map-image" />
              </div>
            </div>
            <div className="card11-details22">
              <div className="card11-details22-center">
                <div className="sliderclintname">
                  <h1>Moin Khan</h1>
                </div>
                <div className="sliderclintjob">
                  <p>Traveller</p>
                </div>
                <div className="sliderclintreview">
                  <p>
                    The objects visited are very interesting and complete. Truly
                    an unforgettable experience trip with Mountain Nest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="set-slider-card1">
          <div className="card11">
            <div className="card1-img">
              <div className="empty">
                <img src={photo11} id="set-map-image" />
              </div>
            </div>
            <div className="card11-details22">
              <div className="card11-details22-center">
                <div className="sliderclintname">
                  <h1>Moin Khan</h1>
                </div>
                <div className="sliderclintjob">
                  <p>Traveller</p>
                </div>
                <div className="sliderclintreview">
                  <p>
                    The objects visited are very interesting and complete. Truly
                    an unforgettable experience trip with Mountain Nest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="set-slider-card1">
          <div className="card11">
            <div className="card1-img">
              <div className="empty">
                <img src={photo12} id="set-map-image" />
              </div>
            </div>
            <div className="card11-details22">
              <div className="card11-details22-center">
                <div className="sliderclintname">
                  <h1>Moin Khan</h1>
                </div>
                <div className="sliderclintjob">
                  <p>Traveller</p>
                </div>
                <div className="sliderclintreview">
                  <p>
                    The objects visited are very interesting and complete. Truly
                    an unforgettable experience trip with Mountain Nest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="set-slider-card1">
          <div className="card11">
            <div className="card1-img">
              <div className="empty">
                <img src={photo12} id="set-map-image" />
              </div>
            </div>
            <div className="card11-details22">
              <div className="card11-details22-center">
                <div className="sliderclintname">
                  <h1>Moin Khan</h1>
                </div>
                <div className="sliderclintjob">
                  <p>Traveller</p>
                </div>
                <div className="sliderclintreview">
                  <p>
                    The objects visited are very interesting and complete. Truly
                    an unforgettable experience trip with Mountain Nest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Cardslider2;
