import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerWithTitleDescButton from "../../components/BannerWithTitleDescButton/BannerWithTitleDescButton";
import TitleDescription from "../../components/TitleDescription/TitleDescription";
import CardSliderWithTitle from "../../components/CardSliderWithTitle/CardSliderWithTitle";
import ZigzagHexaCards from "../../components/ZigzagHexaCards/ZigzagHexaCards";
import ImageTextLeftRight from "../../components/ImageTextLeftRight/ImageTextLeftRight";
import ZigzagTriCard from "../../components/ZigzagTriCard/ZigzagTriCard";

const AllComponent = () => {
  return (
    <>
      <Banner componentID="7899f8a5-94a3-48f0-96eb-ef58a57c8b41" />
      <TitleDescription componentID="781d799b-0133-4f2f-93f8-f54ff6b1788c" />
      <ImageTextLeftRight componentID="31f1b2af-269e-4ade-99b5-766f0cc3a77e" />
      <BannerWithTitleDescButton componentID="2fdc25ec-e634-4e37-aa28-38aaec4f3be2" />
      <CardSliderWithTitle componentID="7899f8a5-94a3-48f0-96eb-ef58a57c8b41" />
      <ZigzagHexaCards componentID="4f8d9145-fd52-4337-86c1-7a80414ad136" />
      <ZigzagTriCard componentID="4c7b4ef0-b8ea-4600-ad50-d29cf43af9b3" />
    </>
  );
};

export default AllComponent;
