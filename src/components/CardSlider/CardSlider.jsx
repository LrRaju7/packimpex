import React , { useEffect, useState } from 'react';
import styles from "../CardSlider/CardSlider.module.css";
import axios from 'axios';
import { getCardSliderData } from '../../api/getData';
import { CONTENT_COMPONENT_FOUR_CARD } from '../../constants/componentTypes';

const CardSlider = ({componentID}) => {
  const [loading, setLoading] = useState(true);
  const [fieldTitle, setFieldTitle] = useState(null);
  const [btnUrl, setBtnUrl] = useState(null);
  const [btnTitle, setBtnTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    getCardSliderData(setFieldTitle,setBtnUrl,setBtnTitle,setImgUrl,CONTENT_COMPONENT_FOUR_CARD,componentID,setLoading);
  }, []);
  return (
    <>
      {loading ? null : (
        <div className={`img-fluid ${styles.cardSlider__image}`}>
          <img src={imgUrl} alt={btnUrl} />
          <div className={`${styles.cardSlider__top__area}`}>
            <button className={`btn__white `}>
              <a href={btnUrl}>{btnTitle}</a>
            </button>
          </div>
          <div className={`${styles.cardSlider__contents}`}>
            <h4 className={`${styles.cardSlider__title}`}>
              {fieldTitle}
            </h4>
          </div>
        </div>
      )}
    </>
  )
}

export default CardSlider
