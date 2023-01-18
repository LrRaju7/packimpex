import React, { useState, useEffect } from "react";
import { getCardSliderParentData } from "../../api/getData";
import { CONTENT_COMPONENT_FOUR_CARD } from "../../constants/componentTypes";
import CardSlider from "./CardSlider";
import styles from "../CardSlider/CardSlider.module.css";

const CardSliderParent = ({componentID}) => {
  const [loading, setLoading] = useState(true);
  const [dataLenght, setDataLenght] = useState(null);
  const [cardSliderData, setCardSliderData] = useState(null);

  useEffect(() => {
    getCardSliderParentData(setDataLenght,setCardSliderData,CONTENT_COMPONENT_FOUR_CARD,componentID,setLoading);
  });
  return (
    <>
      {loading ? null : (
        <>
          {dataLenght === 3 ? (
            <>
              {cardSliderData &&
              cardSliderData.map(
                (data, index) => {
                  return (
                    <CardSlider componentID={data.id} />
                  );
                }
              )}
            </>
          ) : (
            <Swiper
              className={`container ${styles.cardSlider__container}`}
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
                        className={`${styles.cardSlider__area}`}
                      >
                        <CardSlider componentID={data.id} />
                      </SwiperSlide>
                    );
                  }
                )}
            </Swiper>
          )}
        </>
      )}
    </>
  );
};
export default CardSliderParent;
