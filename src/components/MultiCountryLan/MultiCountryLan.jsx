import { useState, useEffect } from "react";
import { getCountryData } from "../../api/getData";
import { TAXONOMY_TERM_COUNTRY } from "../../constants/taxonomyTerms";
import styles from "../MultiCountryLan/MultiCountryLan.module.css";
import flag from "../../assets/belgium-round.svg";
import MultiCountry from "./MultiCountry";
const MultiCountryLan = ({setSelectedLanguage, setSelectedCountry}) => {
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getCountryData(setCountryData, setLoading, TAXONOMY_TERM_COUNTRY);
  }, []);
  return (
    <>
      <div className="pxy-100">
        {loading ? null : (
          <div className="multicountry__area">
            <div className="container">
              <div className={styles.heading__area}>
                <h2>
                  Choose a<br />
                  region and language
                </h2>
                <div className="row">
                  {countryData &&
                    countryData.map((data, index) => (
                      <>
                        {data.attributes.name === "Global" ? (
                          ""
                        ) : (
                          <div key={index} className="lan__card__area col-md-4">
                            <div className={`${styles.language__block}`}>
                              <div
                                className={`${styles.multicountry__contents}`}
                              >
                                <div className={`${styles.lang__area}`}>
                                  <div className={`${styles.lang__title}`}>
                                    {data.relationships.field_country_flag
                                      ?.data ? (
                                      <img
                                        src={
                                          data.relationships.field_country_flag
                                            ?.data
                                        }
                                        alt="flag"
                                      />
                                    ) : (
                                      <img src={flag} alt="flag" />
                                    )}
                                    <span>{data.attributes.name}</span>
                                  </div>
                                  <div className={`${styles.languages__area}`}>
                                    <ul>
                                      <MultiCountry
                                        countryLanguages={
                                          data.relationships
                                            .field_country_languages?.data
                                        }
                                      />
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MultiCountryLan;
