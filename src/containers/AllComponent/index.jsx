import React from 'react'
import Banner from '../../components/Banner/Banner'
import ParagraphTwo from '../../components/ParagraphTwo/ParagraphTwo'
import TitleDescription from '../../components/TitleDescription/TitleDescription'
import ParagraphFour from '../../components/ParagraphFour/ParagraphFour'
import ParagraphSix from '../../components/ParagraphSix/ParagraphSix'
import ImageTextLeftRight from '../../components/ImageTextLeftRight/ImageTextLeftRight'

const AllComponent = () => {
  return (
    <>
      <Banner componentID='7899f8a5-94a3-48f0-96eb-ef58a57c8b41'/>
      <TitleDescription componentID='781d799b-0133-4f2f-93f8-f54ff6b1788c'/>
      <ImageTextLeftRight omponentID='0fce1258-91cb-4f12-99df-e2cee6611d29'/>
      <ParagraphTwo />
      <ParagraphFour />
      <ParagraphSix />
    </>
  )
}

export default AllComponent