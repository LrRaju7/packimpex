import React, { useState, useEffect } from "react";
import styles from "../Banner/Banner.module.css";
import { getBannerComponentData } from "../../api/getData";
import { BANNER_WITH_TITLE_IMAGE } from "../../constants/componentTypes";

function Banner({componentID}) {
  const [loading, setLoading] = useState(true);
  const [bannerData, setBannerData] = useState(null);
  const [image, setImage] = useState(null);
  const [imageAlt, setImageAlt] = useState(null);

  useEffect(() => {
    getBannerComponentData(setBannerData, setImage,setImageAlt, BANNER_WITH_TITLE_IMAGE, componentID,setLoading);
  });

  return (
    <>
      {loading ? null : (
        <div className={styles.banner__container}>
          <div className={styles.arrow__button}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img className={styles.banner__img} src={image} alt={imageAlt}/>
          <div className={styles.svg__block}>
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1440 30.82"
              preserveAspectRatio="none"
              style="enable-background: new 0 0 1440 30.82; display: block"
              xml:space="preserve"
            >
              <path
                className={styles.wave__white__up}
                d="M0,3.09c0,0,78.29,1.41,85.09,1.85c6.79,0.44,189.03,5.41,202.68,5.65c13.65,0.24,191.06,1.18,210.12,0.47
            c19.06-0.71,206.35-5.18,217.41-5.65s183.06-4.71,192.47-4.71s182.12,2.12,200.47,3.53c18.35,1.41,259.06,14.24,277.76,15.18
            c18.71,0.94,54,3.41,54,3.41v8H0V3.09z"     
              ></path>
            </svg> */}
          </div>
          <div className={styles.title__text}>
            <h2>{bannerData}</h2>
          </div>
        </div>
      )}      
    </>
  );
}

export default Banner;
