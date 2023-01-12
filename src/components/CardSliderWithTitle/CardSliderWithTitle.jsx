import React , { useEffect, useState } from 'react';
import styles from "../CardSliderWithTitle/CardSliderWithTitle.module.css";
import CardSlider from "../CardSlider/CardSlider";
import axios from "axios";

const CardSliderWithTitle = ({ componentID }) => {
  const [headerData, setHeaderData] = useState(null);
  const dataID = "6f36220c-1e2e-49d1-806a-8075a7f7a0dc";

  useEffect(() => {
    const baseURL = "https://packimpex-cms.zmallplanet.com/";
    const apiURL = baseURL + "jsonapi/paragraph/four_card_component/";
    axios
      .get(apiURL + dataID)
      .then((response) => {
        setHeaderData(response.data.data.attributes.field_heading);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className={`${styles.cardSlider__title__area}`}>
      <div className={`container`}>
        <h3 className={`${styles.cardSlider__title}`}>{headerData}</h3>
        <CardSlider dataID={dataID} />
      </div>
    </div>
  );
};

export default CardSliderWithTitle;
