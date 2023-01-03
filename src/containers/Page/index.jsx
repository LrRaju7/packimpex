import React, { useEffect, useState } from 'react'
import { getPageComponents } from "../../api/getData";
import { BANNER_WITH_TITLE_IMAGE, CONTENT_COMPONENT_WITH_IMAGE_TITLE, TWO_COLUMN_COMPONENT_YEAR_TITLE, CONTENT_COMPONENT_WITH_TITLE } from "../../constants/componentTypes"
import Banner from "../../components/Banner/Banner";
import ParagraphTwo from '../../components/ParagraphTwo/ParagraphTwo';
import ImageTextLeftRight from '../../components/ImageTextLeftRight/ImageTextLeftRight';
import TitleDescription from '../../components/TitleDescription/TitleDescription';

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
                      <ParagraphTwo
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