import React, { useState, useEffect } from "react";
import styles from "../ZigzagTriCard/ZigzagTriCard.module.css";
import { getZigzagTriCardSingleData } from "../../api/getData";
import { THREE_CARD_COMPONENT_WITH_TITLE } from '../../constants/componentTypes';

const ZigzagTriCardSingle = ({componentID}) => {
  const [loading, setLoading] = useState(true);
  const [fieldTitle, setFieldTitle] = useState(null);
  const [fieldDescription, setFieldDescription] = useState(null);
  const [btnUrl, setBtnUrl] = useState(null);
  const [btnTitle, setBtnTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    getZigzagTriCardSingleData(setFieldTitle,setFieldDescription,setBtnUrl,setBtnTitle,setImgUrl,THREE_CARD_COMPONENT_WITH_TITLE,componentID,setLoading);
  });
  return (
    <>
      {loading ? null : (
        <>
          <div key={componentID} className={`${styles.single__zigzag__card}`}>
            <div
              className={`img-fluid ${styles.single__triCard__image}`}
            >
              <img src={imgUrl} alt={btnUrl} />
              <div className={`${styles.single__triCard__top}`}>
                <button className={`btn__white `}><a href={btnUrl}>{btnTitle}</a></button>
              </div>
              <div className={`${styles.single__triCard__contents}`}>
                <h4 className={`${styles.single__triCard__title}`}>
                  {fieldTitle}
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: fieldDescription,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ZigzagTriCardSingle
