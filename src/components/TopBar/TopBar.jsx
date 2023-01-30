import React from "react";
import { useState, useEffect } from "react";
import styles from "../TopBar/TopBar.module.css";
import TopBarButton from "./TopBarButton";
import { getUserIPData } from "../../api/getData";
import { IP_API } from "../../constants/drupalApiEndPoints";

function TopBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userLanguage, setUserLanguage] = useState("");
  // eslint-disable-next-line
  const [userCountry, setUserCountry] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    getUserIPData(setUserLanguage, setUserCountry, setLoading, IP_API);
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      {!loading && isVisible && (
        <div className={styles.topbar}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-5 col-md-7">
                <p>
                  Choose another country or region to see content specific to
                  your location.
                </p>
              </div>
              <div className="col-sm-7 col-md-5">
                {userLanguage && (
                  <select
                    className="form-select my-2"
                    aria-label="Default select example"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option value=""> -- Select -- </option>
                    <option value={userLanguage}>{userLanguage}</option>
                    <option value="english">English</option>
                    <option value="other">Other Country or Region</option>
                  </select>
                )}
                {selectedValue ? (
                  <TopBarButton
                    actioncValue={selectedValue}
                    language={userLanguage}
                  />
                ) : (
                  <button className={`btn__green ${styles.topbar__btn}`}>
                    Continue
                  </button>
                )}
                <button className={styles.close__btn} onClick={handleClose}>
                  &#10005;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TopBar;
