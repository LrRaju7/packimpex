import React, {useEffect, useState} from 'react'
import { getPageComponents } from "../../api/getData";
import { BANNER_WITH_TITLE_IMAGE, CONTENT_COMPONENT_WITH_IMAGE_TIT } from "../../constants/componentTypes"
import Banner from "../../components/Banner/Banner";
import ParagraphTwo from '../../components/ParagraphTwo/ParagraphTwo';

const Page = ({ locator, pageID }) => {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setPageData(null);
    getPageComponents(pageID,setPageData, setLoading);
  }, [locator]);
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
                      (data.type.match(CONTENT_COMPONENT_WITH_IMAGE_TIT) && (
                        <ParagraphTwo
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