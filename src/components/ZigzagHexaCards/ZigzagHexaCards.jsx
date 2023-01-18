import React, { useEffect, useState } from "react";
import styles from "../ZigzagHexaCards/ZigzagHexaCards.module.css";
import stylesZigzagCards from "../ZigzagHexaCards/ZigzagHexaCards.module.css";
import ZigzagCards from "./ZigzagCards";
import { getZigzagHexaCardsData } from "../../api/getData";
import { THREE_CARD_COMPONENT_WITH_KICKER } from "../../constants/componentTypes";

const ZigzagHexaCards = ({componentID}) => {
  const [loading, setLoading] = useState(true);
  const [headlineData, setHeadlineData] = useState(null);
  const [titleData, setTitleData] = useState(null);
  const [zigzagHexaCardData, setZigzagHexaCardData] = useState(null);
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    getZigzagHexaCardsData(setHeadlineData,setTitleData,setZigzagHexaCardData,setSvg,THREE_CARD_COMPONENT_WITH_KICKER,componentID,setLoading);
  }, []);

  return (
    <>
      {loading ? null : (
        <>
          <div className={`${styles.hexa__card__container}`}>
            {headlineData && titleData && (
              <div className={`container ${styles.tricard__title__area}`}>
                <div className={`row align-items-right`}>
                  <div className="col-md-6"></div>
                  <div className="col-lg-6 col-md-12">
                    <span>{headlineData}</span>
                    <h6>{titleData}</h6>
                  </div>
                </div>
                <div className={` ${stylesZigzagCards.cardWithTitleImageDescButton__container}`}>
                  <div className={` ${stylesZigzagCards.card__container}`}>
                    {zigzagHexaCardData &&
                      zigzagHexaCardData.map(
                      (data) => {
                        return (
                          <ZigzagCards componentID={data.id}/>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            )}
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
export default ZigzagHexaCards;
