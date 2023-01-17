import React, { useState, useEffect } from "react";
import SliderSingleCard from "./SliderSingleCard";
import { getCardSliderParentData } from "../../api/getData";
import { CONTENT_COMPONENT_FOUR_CARD } from "../../constants/componentTypes";
import CardSlider from "./CardSlider";

const CardSliderParent = ({componentID}) => {
  const [loading, setLoading] = useState(true);
  const [dataLenght, setDataLenght] = useState(null);

  useEffect(() => {
    getCardSliderParentData(setDataLenght,CONTENT_COMPONENT_FOUR_CARD,componentID,setLoading);
  });
  return (
    <>
      {loading ? null : (
        <>
          {dataLenght === 3 ? (
            <SliderSingleCard dataID={componentID} />
          ) : (
            <CardSlider componentID={componentID} />
          )}
        </>
      )}
    </>
  );
};
export default CardSliderParent;
