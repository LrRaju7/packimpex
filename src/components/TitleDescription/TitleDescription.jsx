import React, { useState, useEffect } from "react";
import { getTitleDescriptionData } from "../../api/getData";
import { CONTENT_COMPONENT_WITH_TITLE } from "../../constants/componentTypes";
import styles from "../TitleDescription/TitleDescription.module.css";

function TitleDescription({ componentID }) {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    getTitleDescriptionData(
      setTitle,
      setDescription,
      setSvg,
      CONTENT_COMPONENT_WITH_TITLE,
      componentID,
      setLoading
    );
  }, [componentID]);

  return (
    <>
      {loading ? null : (
        <>
          <div className="pxy-100">
            <div className={`container ${styles.description__container}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-lg-9  col-md-12">
                    <h2>{title}</h2>
                    <div className={`${styles.content__area}`}>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {svg !== null && (
            <>
              <div
                className={styles.svg__block__1__up}
                dangerouslySetInnerHTML={{
                  __html: svg,
                }}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
export default TitleDescription;
