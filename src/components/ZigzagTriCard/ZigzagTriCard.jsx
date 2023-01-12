import React, { useState, useEffect } from "react";
import styles from "../ZigzagTriCard/ZigzagTriCard.module.css";
import ZigzagTriCardSingle from "../ZigzagTriCard/ZigzagTriCardSingle";
import axios from "axios";

const ZigzagTriCard = ({ componentID }) => {
  const [headerData, setHeaderData] = useState(null);
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    const baseURL = "https://packimpex-cms.zmallplanet.com/";
    const apiURL =
      baseURL + "jsonapi/paragraph/c11_three_card_comp_with_title/";
    axios
      .get(apiURL + componentID)
      .then((response) => {
        setHeaderData(response.data.data.attributes.field_title_3);
        setSvg(response.data.data.attributes.field_svg_code_component?.value);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      {headerData && (
        <div className={` ${styles.zigzagCard__area}`}>
          <div className="container">
            <div className={`row`}>
              <div className={`col-md-12 ${styles.zigzagCard__container}`}>
                <h3>{headerData}</h3>

                <ZigzagTriCardSingle componentID={componentID}/>
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
  );
};
export default ZigzagTriCard;
