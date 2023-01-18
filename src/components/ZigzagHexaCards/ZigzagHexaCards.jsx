import styles from "../ZigzagHexaCards/ZigzagHexaCards.module.css";
import ZigzagCards from "./ZigzagCards";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ZigzagHexaCards = ({componentID}) => {
  const [headlineData, setHeadlineData] = useState(null);
  const [titleData, setTitleData] = useState(null);
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    const baseURL = "https://packimpex-cms.zmallplanet.com/";
    const apiURL =
      baseURL + "jsonapi/paragraph/three_card_component_with_kicker/";
    axios
      .get(apiURL + componentID)
      .then((response) => {
        setHeadlineData(response.data.data.attributes?.field_kicker_headline_1);
        setTitleData(response.data.data.attributes?.field_title_1);
        setSvg(response.data.data.attributes?.field_svg_code_component?.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
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
            <ZigzagCards componentID={componentID}/>
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
  );
};
export default ZigzagHexaCards;
