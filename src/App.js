import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCustomPageUrls, getGlobalPageUrls, getIPBasedPageUrls } from "./api/getData";
import Layout from "./components/Layout/Layout";
import Page from "./containers/Page";
import NotFound from "./components/NotFound/NotFound";
import AllComponent from "./containers/AllComponent/index";
import MultiCountryLan from "./components/MultiCountryLan/MultiCountryLan";

function App() {
  const [GlobalPageURL, setGlobalPageURL] = useState(null);
  const [pageURL, setPageURL] = useState(null);
  const [ipLocation, setIpLocation] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('default');
  const [selectedCountry, setSelectedCountry] = useState('default');
  window.tryToLoadFromSite = (item) => {
    if (item.src.includes("https://packimpex-cms.zmallplanet.com") == false) {
      let origSrc = item.src;
      if (origSrc.includes(window.location.origin)) {
        origSrc = origSrc.replace(window.location.origin, "");
      }
      item.src = "https://packimpex-cms.zmallplanet.com/" + origSrc;
    }
  };
  useEffect(() => {
    getIPBasedPageUrls(setIpLocation);
    if(selectedCountry === 'default' && selectedLanguage === 'default'){
      getGlobalPageUrls(setGlobalPageURL);
    }else{
      getCustomPageUrls(setPageURL,selectedLanguage,selectedCountry);
    }
  }, [selectedCountry,selectedLanguage]);
  return (
    <Router>
      <Layout>
        {GlobalPageURL !== null ? (
          <Routes>
            {GlobalPageURL.map((url) => (
              <>
                {url.map((globalPage) => (
                  <>
                    <Route
                      key={globalPage.id}
                      path={`${globalPage.attributes.field_page_url}`}
                      exact
                      element={
                        <Page
                          locator={`${globalPage.attributes.field_page_url}`}
                          pageID={`${globalPage.id}`}
                        />
                      }
                    />
                  </>
                ))}
              </>
            ))}
            <Route
              path="/test-all-components"
              exact
              element={<AllComponent />}
            />
            <Route
              path="/country-language"
              exact
              element={<MultiCountryLan language = {setSelectedLanguage} country = {setSelectedCountry}/>}
            />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        ) : <>
        {
          pageURL !== null ? (
            <Routes>
            {pageURL.map((url) => (
              <>
                {url.map((page) => (
                  <>
                    {
                      selectedLanguage !== 'default' ? (
                        <Route
                          key={page.id}
                          path={`/${selectedCountry}-${selectedLanguage}${page.attributes.field_page_url}`}
                          exact
                          element={
                            <Page
                              locator={`${page.attributes.field_page_url}`}
                              pageID={`${page.id}`}
                            />
                          }
                        />
                      ) : (
                        <Route
                          key={page.id}
                          path={`/${selectedCountry}${page.attributes.field_page_url}`}
                          exact
                          element={
                            <Page
                              locator={`${page.attributes.field_page_url}`}
                              pageID={`${page.id}`}
                            />
                          }
                        />
                      )
                    }
                  </>
                ))}
              </>
            ))}
            <Route
              path="/test-all-components"
              exact
              element={<AllComponent />}
            />
            <Route
              path="/country-language"
              exact
              element={<MultiCountryLan setSelectedLanguage setSelectedCountry/>}
            />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
          ) : null
        }
        </>}
      </Layout>
    </Router>
  );
}

export default App;
