import React, { useState, useEffect } from "react";
import styles from "../ParagraphTwo/ParagraphTwo.module.css";
import axios from "axios";
import Image from "./Image";
const ParagraphTwo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev-innoways.managedcoder.com/jsonapi/paragraph/content_component_with_image_tit/cd6ee6ec-0a33-416f-8988-d040dda5b575"
        );
        setData(response.data);
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
    <div className={`container ${styles.paragraphTwo}`}>
      <div className={`row`}>
        <div className={`col-md-12 ${styles.paragraphTwo__container}`}>
          <div className="col-lg-9 col-md-12">
            <h2>{data.data.attributes.field_content_title}</h2>
            <div className={` ${styles.paragraphTwo__content}`}>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.data.attributes.field_description.processed,
                }}
              ></p>
              <button className={`btn__green`}>
                <a href={data.data.links.self.href}>GET SUPPORT NOW →</a>
              </button>
            </div>
          </div>

          <div className={`${styles.img__container} img-fluid`}>
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParagraphTwo;
