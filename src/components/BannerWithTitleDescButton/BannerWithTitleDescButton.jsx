import React, { useState, useEffect } from "react";
import styles from "../BannerWithTitleDescButton/BannerWithTitleDescButton.module.css";
import { getBannerWithTitleDescButtonData } from "../../api/getData";
import { CONTENT_COMPONENT_WITH_IMAGE_TITLE } from "../../constants/componentTypes";

const BannerWithTitleDescButton = ({componentID}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [btnUrl, setBtnUrl] = useState(null);
  const [btnTitle, setBtnTitle] = useState(null);
  const [imageAlt, setImageAlt] = useState(null);
  const [image, setImage] = useState(null);
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    getBannerWithTitleDescButtonData(setData,setBtnTitle, setBtnUrl,setSvg,setImageAlt,setImage,CONTENT_COMPONENT_WITH_IMAGE_TITLE, componentID, setLoading);
  },[]);

  return (
    <>
      {loading ? null : (
        <>
          <div className={`${styles.banner__area}`}>
            <div className="container">
              <div className={`row`}>
                <div className={`col-md-12 ${styles.banner__container}`}>
                  <div className="col-lg-9 col-md-12">
                    <span>{data.data.attributes.field_kicker_headline}</span>
                    <h2>{data.data.attributes.field_content_title}</h2>
                    <div className={` ${styles.banner__content}`}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.data.attributes.field_description?.processed,
                        }}
                      ></p>
                      {btnUrl && (
                        <button className={`btn__green`}>
                          <a href={btnUrl}>{btnTitle}</a>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className={`${styles.img__container} img-fluid`}>
                    <img src={image} alt={imageAlt}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {svg !== null && (
            <>
              <div
                className={styles.svg__block__1__up}
                dangerouslySetInnerHTML={{
                  __html: svg,
                }}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
export default BannerWithTitleDescButton;
