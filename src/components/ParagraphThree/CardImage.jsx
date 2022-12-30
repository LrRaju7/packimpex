import React, { useState, useEffect } from "react";
import styles from "../ParagraphThree/ParagraphThree.module.css";
import axios from "axios";
const CardImage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev-innoways.managedcoder.com/jsonapi/file/file/b6604a27-e5ad-49c6-ba15-fe91bd252862"
        );
        setData(
          "https://dev-innoways.managedcoder.com/" +
            response.data.data.attributes.uri.url
        );
        console.log("hello", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (data === null) {
    return <h1> loading </h1>;
  }
  return (
    // <div className={`card ${styles.card__img}`}>
    //   <img src={data} />
    // </div>
    <img src={data} />
  );
};

export default CardImage;
