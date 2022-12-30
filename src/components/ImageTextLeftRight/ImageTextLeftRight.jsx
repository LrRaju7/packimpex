import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../ImageTextLeftRight/ImageTextLeftRight.module.css";

function ImageTextLeftRight() {
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get(
        "https://dev-innoways.managedcoder.com/jsonapi/paragraph/two_column_component_year_title_/0fce1258-91cb-4f12-99df-e2cee6611d29"
      );
      const response2 = await axios.get(
        "https://dev-innoways.managedcoder.com/jsonapi/file/file/d6b7edf5-c581-452d-8e4e-effd713b0ca9"
      );

      setYear(response.data.data.attributes.field_year);
      setTitle(response.data.data.attributes.field_title_2);
      setDescription(response.data.data.attributes.field_description_2.value);
      setLink(response.data.data.attributes.field_cta_button);
      setPosition(response.data.data.attributes.field_image_position);
      setImage(
        "https://dev-innoways.managedcoder.com/" +
          response2.data.data.attributes.uri.url
      );
      console.log(response.data.data);
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
      <div
        className={`container-fluid ${styles.imagetextleftright__container}`}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            <span className={styles.year}>{year}</span>
            <h2>{title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
            <p>{link}</p>
            {/* <p>{position}</p> */}
          </div>

          <div className="col-md-6">
            <img className={styles.style__img} src={image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageTextLeftRight;
