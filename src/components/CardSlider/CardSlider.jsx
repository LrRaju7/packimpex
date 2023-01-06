import React, { Component } from "react";
import styles from "../CardSlider/CardSlider.module.css";
import axios from "axios";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
class CardSlider extends Component {
  constructor() {
    super();
    this.state = {
      fieldData: null,
      cardData: null,
    };
  }
  componentDidMount() {
    const baseURL = "https://dev-innoways.managedcoder.com/";
    const apiURL = baseURL + "jsonapi/paragraph/four_card_component/";
    const results = [];
    axios
      .get(apiURL + "6f36220c-1e2e-49d1-806a-8075a7f7a0dc")
      .then((response) => {
        this.setState({
          fieldData:
            response.data.data.relationships.field_card_components.data,
        });
        console.log("Field Data");
        console.log(this.state.fieldData);
        const values = this.state.fieldData
          ? this.state.fieldData.map((data) => data.id)
          : [];
        for (let i = 0; i < values.length; i++) {
          axios
            .get(apiURL + values[i])
            .then((response) => {
              const fieldTitle = response.data.data.attributes.field_title;
              const btnUrl = response.data.data.attributes.field_button.uri;
              const btnTitle = response.data.data.attributes.field_button.title;
              const imgApi =
                response.data.data.relationships.field_image.links.related.href;
              axios
                .get(imgApi)
                .then((response) => {
                  const imgName = response.data.data?.attributes.name;
                  const imgFullDate = response.data.data?.attributes.created;
                  const imgDate = new Date(imgFullDate);
                  const imgYear = imgDate.getFullYear();
                  const imgMonth = imgDate.getMonth() + 1;
                  var imgUrl = "";
                  if (imgName && imgFullDate) {
                    imgUrl =
                      baseURL +
                      "sites/default/files/" +
                      imgYear +
                      "-" +
                      imgMonth +
                      "/" +
                      imgName;
                  } else {
                    imgUrl =
                      baseURL + "sites/default/files/2022-12/Basel-3703.jpg";
                  }
                  results.push({ fieldTitle, btnUrl, btnTitle, imgUrl });
                  console.log(results);
                  this.setState({ cardData: results });
                  console.log("Card Data");
                  console.log(this.state.cardData);
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }
  render() {
    const cardDataView = this.state.cardData;
    return (
      <Swiper
        className={`container ${styles.cardSlider__container}`}
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cardDataView &&
          cardDataView.map(
            ({ fieldTitle, btnUrl, btnTitle, imgUrl }, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className={`${styles.cardSlider__area}`}
                >
                  <div className={`img-fluid ${styles.cardSlider__image}`}>
                    <img src={imgUrl} />
                    <div className={`${styles.cardSlider__top__area}`}>
                      <button className={`btn__white `}>{btnTitle}</button>
                    </div>
                    <div className={`${styles.cardSlider__contents}`}>
                      <h4 className={`${styles.cardSlider__title}`}>
                        {fieldTitle}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
      </Swiper>
    );
  }
}
export default CardSlider;