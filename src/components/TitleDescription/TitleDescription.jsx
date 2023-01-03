import React from "react";
import { useState, useEffect } from "react";
import { getTitleDescriptionData } from "../../api/getData";
import { CONTENT_COMPONENT_WITH_TITLE } from "../../constants/componentTypes";
import styles from "../TitleDescription/TitleDescription.module.css";

function TitleDescription({componentID}) {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getTitleDescriptionData(setTitle, setDescription, CONTENT_COMPONENT_WITH_TITLE, componentID, setLoading);
  });

  return (
    <>
      {loading ? null : (
      <div className={`container-fluid ${styles.description__container}`}>
        <div className="row">
          <div className="col-md-7">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>)}
    </>
  );
}
export default TitleDescription;
