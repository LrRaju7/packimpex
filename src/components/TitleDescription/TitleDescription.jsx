import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../TitleDescription/TitleDescription.module.css";

function TitleDescription() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get(
        "https://dev-innoways.managedcoder.com/jsonapi/paragraph/content_component_with_title_and/781d799b-0133-4f2f-93f8-f54ff6b1788c/"
      );

      setTitle(response.data.data.attributes.field_component_title);
      setDescription(response.data.data.attributes.field_component_description);
      console.log(response.data.data.attributes);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {isError !== "" && <h2 className="text-center">{isError}</h2>}
      <div className={`container-fluid ${styles.description__container}`}>
        <div className="row">
          <div className="col-md-7">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TitleDescription;
