import Img1 from "../../assets/image1.jpg";
import Img2 from "../../assets/image2.jpg";
import Img3 from "../../assets/image3.jpg";
import Img4 from "../../assets/image4.jpg";
import React, { useState, useEffect } from "react";
import styles from "../ParagraphThree/ParagraphThree.module.css";
import CardImage from "./CardImage";
import axios from "axios";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: Img1,
    title: "what we do",
    link: "read more",
  },
  {
    image: Img2,
    title: "what we do",
    link: "read more",
  },
  {
    image: Img3,
    title: "what we do",
    link: "read more",
  },
  {
    image: Img4,
    title: "what we do",
    link: "read more",
  },
  {
    image: Img1,
    title: "what we do",
    link: "read more",
  },
];
const ParagraphThree = () => {
  return (
    <Swiper
      className="container paragraph__three__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={4}
      pagination={{ clickable: true }}
    >
      {data.map(({ image, title, link }, index) => {
        return (
          <SwiperSlide key={index} className={`${styles.paragraphThree}`}>
            <div className={`${styles.paragraph__three__image}`}>
              <img src={image} />
            </div>
            <div className={`${styles.paragraph__three__contents}`}>
              <h3 className={`${styles.paragraph__three__title}`}>{title}</h3>
              <button className={`${styles.paragraph__three__link}`}>
                {link}
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ParagraphThree;

//<div className="card__container row">
//     <div className={` ${styles.card} col-md-4`}>
//       <a>
//         <div className="card__block card">
//           <div className={`${styles.card__image__container}`}>
//             <CardImage />
//             <div className={`${styles.card__contents}`}>
//               <div className={`${styles.card__button}`}>
//                 <button
//                   className={`text__primary ${styles.card__btn__area}`}
//                 >
//                   <a href={card.link}>Read more</a>
//                 </button>
//               </div>
//               <div className={`${styles.card__title}`}>
//                 <h3>{card.title}</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   </div>

//******************************* */
// <div>
//   <Swiper
//     className="container parahraphThree__area"
//     // install Swiper modules
//     modules={[Pagination]}
//     spaceBetween={40}
//     slidesPerView={4}
//     pagination={{ clickable: true }}
//   >
//     {CardImage.map(({}, index) => {
//       return (
//         <SwiperSlide key={index} className="paragraphThree">
//           <div className="client__avatar">
//             <CardImage />
//           </div>
//           <h5 className="client__name">{CardImage.title}</h5>
//           <small className="client__review">{CardImage.link}</small>
//         </SwiperSlide>
//       );
//     })}
//   </Swiper>
// </div>

// const [data, setData] = useState(null);
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://dev-innoways.managedcoder.com/jsonapi/paragraph/content_component_with_image_tit/cd6ee6ec-0a33-416f-8988-d040dda5b575"
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchData();
// }, []);
// if (data === null) {
//   return <h1> loading </h1>;
// }
