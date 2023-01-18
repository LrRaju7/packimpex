import React, { useEffect, useState } from "react";
import styles from "../ZigzagHexaCards/ZigzagHexaCards.module.css";
import { getZigzagCardsData } from "../../api/getData";
import { THREE_CARD_COMPONENT_WITH_KICKER } from "../../constants/componentTypes";

const ZigzagCards = ({componentID}) => {
  const [loading, setLoading] = useState(true);
  const [fieldTitle, setFieldTitle] = useState(null);
  const [fieldDescription, setFieldDescription] = useState(null);
  const [btnUrl, setBtnUrl] = useState(null);
  const [btnTitle, setBtnTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    getZigzagCardsData(setFieldTitle,setFieldDescription,setBtnUrl,setBtnTitle,setImgUrl,THREE_CARD_COMPONENT_WITH_KICKER,componentID,setLoading);
  }, []);
  return (
    <>
      {loading ? null : (
        <>
          <div key={componentID} className={`single__card__area`}>
            <div className={`${styles.card__image} img-fluid`}>
              <img src={imgUrl} alt={btnUrl} />
              <div className={`${styles.single__card__button}`}>
                <button className={`btn__white `}>{btnTitle}</button>
              </div>

              <div className={`${styles.singleCard__content}`}>
                <h4>{fieldTitle}</h4>

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

export default ZigzagCards