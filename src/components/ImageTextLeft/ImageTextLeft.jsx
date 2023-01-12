import React from "react";
import RightImage from "../../assets/bern.jpg";
import styles from "../ImageTextLeft/ImageTextLeft.module.css";

function ImageTextLeft() {
  return (
    <>
      <div className={`container-fluid ${styles.imagetextleft__container}`}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <span className={styles.year}>2021</span>
            <h2>Our CEO becomes partner</h2>
            <p>
              CEO Damian Aebischer becomes a Packimpex shareholder, highlighting
              his long-term commitment to the company after more than a decade
              in senior leadership.
            </p>
          </div>
          <div className="col-md-6">
            <img src={RightImage} width="100%" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageTextLeft;
