import React,{ useState, useEffect } from "react";
import styles from "../TriCardWithDesc/TriCardWithDesc.module.css";
import Img1 from "../../assets/Demo1.jpg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "what we do",
    link: "read more",
    detail:
      "Are you passionate about people and relocation? Do you like solving problems on a tight schedule? Get in touch.",
  },
  {
    id: 2,
    image: Img1,
    title: "what we do",
    link: "read more",
    detail:
      "Are you passionate about people and relocation? Do you like solving problems on a tight schedule? Get in touch.",
  },
  {
    id: 3,
    image: Img1,
    title: "what we do",
    link: "read more",
    detail:
      "Are you passionate about people and relocation? Do you like solving problems on a tight schedule? Get in touch.",
  },
  {
    id: 4,
    image: Img1,
    title: "what we do",
    link: "read more",
    detail:
      "Are you passionate about people and relocation? Do you like solving problems on a tight schedule? Get in touch.",
  },
  {
    id: 5,
    image: Img1,
    title: "what we do",
    link: "read more",
    detail:
      "Are you passionate about people and relocation? Do you like solving problems on a tight schedule? Get in touch.",
  },
  {
    id: 6,
    image: Img1,
    title: "what we do",
    link: "read more",
    detail:
      "Are you passionate about people and relocation? Do you like solving problems on a tight schedule? Get in touch.",
  },
];
function TriCardWithDesc() {
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
    <div className={` ${styles.cardWithTitleImageDescButton__container}`}>
      <div className={`container ${styles.card__container}`}>
        {data.map(({ id, image, title, link, detail }) => {
          return (
            <div key={id} className={`single__card__area`}>
              <div className={`${styles.card__image} img-fluid`}>
                <img src={image} />
                <div className={`${styles.single__card__button}`}>
                  <button className={`btn__white `}>{link}</button>
                </div>

                <div className={`${styles.singleCard__content}`}>
                  <h4>{title}</h4>
                  <p
                    className={`${styles.cardWithTitleImageDescButton__description}`}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TriCardWithDesc;
