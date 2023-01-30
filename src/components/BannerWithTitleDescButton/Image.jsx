import React, { useState, useEffect } from "react";
import axios from "axios";
const Image = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev-innoways.managedcoder.com/jsonapi/file/file/01df28db-4726-4dbf-891e-6a99367ffd8e"
        );
        setData(
          "https://dev-innoways.managedcoder.com/" +
            response.data.data.attributes.uri.url
        );
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
    <>
      <img src={data} />
    </>
  );
};

export default Image;
