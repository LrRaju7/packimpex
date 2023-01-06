import React from 'react'
import Banner from '../../components/Banner/Banner'
import BannerWithTitleDescButton from '../../components/BannerWithTitleDescButton/BannerWithTitleDescButton'
import TitleDescription from '../../components/TitleDescription/TitleDescription'
import CardSliderWithTitle from '../../components/CardSliderWithTitle/CardSliderWithTitle'
import TriCardWithDesc from '../../components/TriCardWithDesc/TriCardWithDesc'
import ImageTextLeftRight from '../../components/ImageTextLeftRight/ImageTextLeftRight'

const AllComponent = () => {
  return (
    <>
      <Banner componentID='7899f8a5-94a3-48f0-96eb-ef58a57c8b41'/>
      <TitleDescription componentID='781d799b-0133-4f2f-93f8-f54ff6b1788c'/>
      <ImageTextLeftRight componentID='31f1b2af-269e-4ade-99b5-766f0cc3a77e'/>
      <BannerWithTitleDescButton componentID='7899f8a5-94a3-48f0-96eb-ef58a57c8b41'/>
      <CardSliderWithTitle componentID='7899f8a5-94a3-48f0-96eb-ef58a57c8b41'/>
      <TriCardWithDesc componentID='7899f8a5-94a3-48f0-96eb-ef58a57c8b41'/>
    </>
  )
}

export default AllComponent