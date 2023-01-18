import React, { useEffect, useState } from "react";
import styles from "../CardSliderWithTitle/CardSliderWithTitle.module.css";
import stylesCardSlider from "../CardSlider/CardSlider.module.css";
import CardSlider from "../CardSlider/CardSlider";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { getCardSliderWithTitleData } from '../../api/getData';
import { CONTENT_COMPONENT_FOUR_CARD } from '../../constants/componentTypes';

const CardSliderWithTitle = ({ componentID }) => {
  const [loading, setLoading] = useState(true);
  const [headerData, setHeaderData] = useState(null);
  const [cardSliderData, setCardSliderData] = useState(null);

  useEffect(() => {
      getCardSliderWithTitleData(setHeaderData,setCardSliderData,CONTENT_COMPONENT_FOUR_CARD,componentID,setLoading);
  }, []);
  return (
    <>
      {loading ? null : (
        <div className={`${styles.cardSlider__title__area}`}>
          <div className={`container`}>
            <h3 className={`${styles.cardSlider__title}`}>{headerData}</h3>
            <Swiper
              className={`container ${stylesCardSlider.cardSlider__container}`}
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {cardSliderData &&
                cardSliderData.map(
                  (data, index) => {
                    return (
                      <SwiperSlide
                        key={index}
                        className={`${stylesCardSlider.cardSlider__area}`}
                      >
                        <CardSlider componentID={data.id} />
                      </SwiperSlide>
                    );
                  }
                )}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default CardSliderWithTitle;
