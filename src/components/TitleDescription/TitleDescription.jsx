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
        <div className="pxy-100">
          <div className={`container ${styles.description__container}`}>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div
                    className=" col-sm-12 
            col-md-10"
                  >
                    <h2>{title}</h2>
                  </div>
                </div>
                <p>{description}</p>
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
        </div>
      )}
    </>
  );
}
export default TitleDescription;
