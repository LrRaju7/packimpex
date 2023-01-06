import React, { useState, useEffect } from "react";
import styles from "../Banner/Banner.module.css";
import { getBannerComponentData } from "../../api/getData";
import { BANNER_WITH_TITLE_IMAGE } from "../../constants/componentTypes";

function Banner({componentID}) {
  function handleClick() {
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  }
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
          <div onClick={handleClick} className={styles.arrow__button}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img className={styles.banner__img} src={image} alt={imageAlt}/>
           <div className={styles.title__text}>
          <h2
            dangerouslySetInnerHTML={{
              __html: bannerData,
            }}
          />
        </div>
        </div>
      )}      
    </>
  );
}

export default Banner;
