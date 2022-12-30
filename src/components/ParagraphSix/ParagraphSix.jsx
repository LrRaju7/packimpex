import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../ParagraphSix/ParagraphSix.module.css";
import Img1 from "../../assets/Demo1.jpg";
import Img2 from "../../assets/Demo2.jpg";
import Img3 from "../../assets/Demo3.jpg";

const data = {
  image: Img1,
  title: "what we do",
  link: "read more",
  detail:
    "Are you passionate about people and relocation? Do you like solving problems on a tight schedule? Get in touch.",
};

function ParagraphSix() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [isError, setIsError] = useState("");
  // const getApiData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://jsonplaceholder.typicode.com/posts"
  //     );
  //     setTitle(response.data[0].title);
  //     setDescription(response.data[0].body);
  //     console.log(response.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getApiData();
  // }, []);
  return (
    <div className={`container ${styles.paragraph__six__container}`}>
      <div className="row">
        <div className="col-md-4">
          <div className={`${styles.paragraph__six__image}`}>
            <img src={data.image} />

            <div className={`${styles.paragraph__six__contents}`}>
              <h3 className={`${styles.paragraph__six__title}`}>
                {data.title}
              </h3>
              <p>{data.detail}</p>
              <button className={`${styles.paragraph__six__link}`}>
                {data.link}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ParagraphSix;

{
  /* <div className={`container ${styles.paragraph__six__container}`}>
      {data.map(({ image, title, link, detail }, index) => {
        return (
          <div className="row">
            <div className="col-md-4">
              <div key={index} className={`${styles.paragraphSix}`}>
                <div className={`${styles.paragraph__six__image}`}>
                  <img src={image} />
                </div>
                <div className={`${styles.paragraph__six__contents}`}>
                  <h3 className={`${styles.paragraph__six__title}`}>{title}</h3>
                  <p>{detail}</p>
                  <button className={`${styles.paragraph__six__link}`}>
                    {link}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div> */
}
