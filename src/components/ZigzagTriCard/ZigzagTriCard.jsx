import React, { useState, useEffect } from "react";
import styles from "../ZigzagTriCard/ZigzagTriCard.module.css";
import stylesZigzagTriCardSingle from "../ZigzagTriCard/ZigzagTriCard.module.css";
import ZigzagTriCardSingle from "../ZigzagTriCard/ZigzagTriCardSingle";
import { getZigzagTriCardData } from "../../api/getData";
import { THREE_CARD_COMPONENT_WITH_TITLE } from "../../constants/componentTypes"

const ZigzagTriCard = ({ componentID }) => {
  const [loading, setLoading] = useState(true);
  const [headerData, setHeaderData] = useState(null);
  const [svg, setSvg] = useState(null);
  
  useEffect(() => {
      getZigzagTriCardData(setHeaderData,setSvg,THREE_CARD_COMPONENT_WITH_TITLE,componentID,setLoading);
  });
  return (
    <>
      {loading ? null : (
        <>
          {headerData && (
            <div className={` ${styles.zigzagCard__area}`}>
              <div className="container">
                <div className={`row`}>
                  <div className={`col-md-12 ${styles.zigzagCard__container}`}>
                    <h3>{headerData}</h3>
                      <div className={`${stylesZigzagTriCardSingle.single__zigzag__container}`}>
                        <ZigzagTriCardSingle componentID={componentID}/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
export default ZigzagTriCard;
