import React, { useEffect, useState } from 'react'
import Helmet from "react-helmet";
import { getPageComponents } from "../../api/getData";
import {
  BANNER_WITH_TITLE_IMAGE,
  CONTENT_COMPONENT_WITH_IMAGE_TITLE,
  TWO_COLUMN_COMPONENT_YEAR_TITLE,
  CONTENT_COMPONENT_WITH_TITLE,
  CONTENT_COMPONENT_FOUR_CARD,
  THREE_CARD_COMPONENT_WITH_TITLE,
  THREE_CARD_COMPONENT_WITH_KICKER,
} from "../../constants/componentTypes";
import Banner from "../../components/Banner/Banner";
import BannerWithTitleDescButton from "../../components/BannerWithTitleDescButton/BannerWithTitleDescButton";
import TitleDescription from "../../components/TitleDescription/TitleDescription";
import CardSliderWithTitle from "../../components/CardSliderWithTitle/CardSliderWithTitle";
import ZigzagHexaCards from "../../components/ZigzagHexaCards/ZigzagHexaCards";
import ImageTextLeftRight from "../../components/ImageTextLeftRight/ImageTextLeftRight";
import ZigzagTriCard from '../../components/ZigzagTriCard/ZigzagTriCard';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Page = ({ locator, pageID }) => {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);
  const [pageAttributes, setPageAttributes] = useState(null);
  const [pageBreadcrumb, setPageBreadcrumb] = useState(false);
  const [pageBreadcrumbData, setPageBreadcrumbData] = useState(null);

  useEffect(() => {
    setPageData(null);
    getPageComponents(pageID, setPageData, setPageAttributes, setPageBreadcrumb, setPageBreadcrumbData,setLoading);
  }, [locator, pageID]);
  return (
    <>
      {loading ? null : (
        <>
          {pageAttributes !== null ? (
            <Helmet>
            <meta charSet="utf-8" />
            <title>
              {pageAttributes.field_page_meta_tags?.meta_title || pageAttributes.title} | Packimpex
            </title>
            <meta
              name="title"
              content={pageAttributes.field_page_meta_tags?.meta_title || pageAttributes.title}
            ></meta>
            <meta name="description" content={pageAttributes.field_page_description} />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content={pageAttributes.field_page_meta_tags?.meta_title || pageAttributes.title}
            />
            <meta
              property="og:description"
              content={pageAttributes.field_page_description}
            />
          </Helmet>
          ): null}
          
          {pageBreadcrumb ? (
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <>
                  {pageBreadcrumbData.map((data) => {
                    return(
                      <Breadcrumb id={data.id}/> 
                    )
                  })}
                </>
              </ol>
            </nav>
            ) : (
              null
            )
          }
          {pageData.data.length > 0 ? (
            <>
              {pageData.data.map((data) => {
                return (
                  <>
                    {(data.type.match(BANNER_WITH_TITLE_IMAGE) && (
                      <Banner componentID={data.id} />
                    )) ||
                      (data.type.match(CONTENT_COMPONENT_WITH_IMAGE_TITLE) && (
                        <BannerWithTitleDescButton componentID={data.id} />
                      )) ||
                      (data.type.match(TWO_COLUMN_COMPONENT_YEAR_TITLE) && (
                        <ImageTextLeftRight componentID={data.id} />
                      )) ||
                      (data.type.match(CONTENT_COMPONENT_WITH_TITLE) && (
                        <TitleDescription componentID={data.id} />
                      )) ||
                      (data.type.match(CONTENT_COMPONENT_FOUR_CARD) && (
                        <CardSliderWithTitle componentID={data.id} />
                      )) ||
                      (data.type.match(THREE_CARD_COMPONENT_WITH_KICKER) && (
                        <ZigzagHexaCards componentID={data.id} />
                      )) || (data.type.match(THREE_CARD_COMPONENT_WITH_TITLE) && (
                        <ZigzagTriCard componentID={data.id} />
                      ))}
                  </>
                );
              })}
              {locator === "/" ? <></> : null}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};
export default Page;
