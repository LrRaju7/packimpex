import React from "react";
import styles from "../Loader/Loader.module.css";

function Loader() {
  return (
    <>
      <div className={styles.loader}>
        <div
          className={`spinner-border ${styles.spinner__border__color}`}
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>

        {/* <div
          className={`spinner-grow ${styles.spinner__background}`}
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div> */}
      </div>
    </>
  );
}

export default Loader;
