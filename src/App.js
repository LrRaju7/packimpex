import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getGlobalPageUrls } from "./api/getData";
import Layout from './components/Layout/Layout';
import Page from './containers/Page'
import NotFound from './components/NotFound/NotFound';
import AllComponent from './containers/AllComponent/index';


function App() {
  const [pageURL, setPageURL] = useState(null);
  useEffect(() => {
    getGlobalPageUrls(setPageURL);
  }, []);
  return (
    <Router>
      <Layout>
        {
          pageURL !== null ? <Routes>
            {pageURL.map((page) => (
              <>
                <Route key={page.id} path={`${page.attributes.field_page_url}`} exact element={<Page locator={`${page.attributes.field_page_url}`} pageID={`${page.id}`}/>} />
              </>
            ))}
            <Route path="/test-all-components" exact element={<AllComponent />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes> : null
        }
      </Layout>   
    </Router>
  );
}

export default App;