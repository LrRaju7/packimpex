import React, { useEffect, useState } from 'react'
import { getPageComponents } from "../../api/getData";
import { BANNER_WITH_TITLE_IMAGE, CONTENT_COMPONENT_WITH_IMAGE_TITLE, TWO_COLUMN_COMPONENT_YEAR_TITLE, CONTENT_COMPONENT_WITH_TITLE, CONTENT_COMPONENT_FOUR_CARD, CARD_COMPONENT_WITH_TITLE_IMAGE } from "../../constants/componentTypes"
import Banner from '../../components/Banner/Banner'
import BannerWithTitleDescButton from '../../components/BannerWithTitleDescButton/BannerWithTitleDescButton'
import TitleDescription from '../../components/TitleDescription/TitleDescription'
import CardSliderWithTitle from '../../components/CardSliderWithTitle/CardSliderWithTitle'
import TriCardWithDesc from '../../components/TriCardWithDesc/TriCardWithDesc'
import ImageTextLeftRight from '../../components/ImageTextLeftRight/ImageTextLeftRight'

const Page = ({ locator, pageID }) => {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setPageData(null);
    getPageComponents(pageID, setPageData, setLoading);
  }, [locator, pageID]);
  return (
    <>
      {loading ? null : (
        <>
          {pageData.data.length > 0 ? (
            <>
              {pageData.data.map((data) => {
                return (
                  <>
                    {(data.type.match(BANNER_WITH_TITLE_IMAGE) && (
                      <Banner
                        componentID={
                          data.id
                        }
                      />
                    ))
                    ||
                    (data.type.match(CONTENT_COMPONENT_WITH_IMAGE_TITLE) && (
                      <BannerWithTitleDescButton
                        componentID={
                          data.id
                        }
                      />
                    ))
                    ||
                    (data.type.match(TWO_COLUMN_COMPONENT_YEAR_TITLE) && (
                      <ImageTextLeftRight
                        componentID={
                          data.id
                        }
                      />
                    ))
                    ||
                    (data.type.match(CONTENT_COMPONENT_WITH_TITLE) && (
                      <TitleDescription
                        componentID={
                          data.id
                        }
                      />
                    ))
                    ||
                    (data.type.match(CONTENT_COMPONENT_FOUR_CARD) && (
                      <CardSliderWithTitle
                        componentID={
                          data.id
                        }
                      />
                    ))
                    ||
                    (data.type.match(CARD_COMPONENT_WITH_TITLE_IMAGE) && (
                      <TriCardWithDesc
                        componentID={
                          data.id
                        }
                      />
                    ))
                    ||
                    <h1 className='text-center'>COMPONENT IS UNDER DEVELOPMENT</h1>
                    }

                  </>
                );
              })}
              {locator === "/" ? (
                <></>
              ) : null}

            </>
          ) : (
            <h1 className="text-center p-5">CONTENT NOT FOUND</h1>
          )}
        </>
      )}




    </>
  );
};
export default Page;