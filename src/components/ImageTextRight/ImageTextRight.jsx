import React from "react";
import LeftImage from "../../assets/staff.jpg";
import styles from "../ImageTextRight/ImageTextRight.module.css";

function ImageTextRight() {
  return (
    <>
      <div className={`container-fluid ${styles.imagetextright__container}`}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={LeftImage} width="100%" />
          </div>
          <div className="col-md-6">
            <span className={styles.year}>2021</span>
            <h2>Growing in Belgium, The Netherlands and the UK</h2>
            <p>
              Demonstrating our firm commitment to our European expansion
              strategy, 2021 was a year of bold moves. In February we proudly
              publicised the integration the Belgium relocation...
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageTextRight;
