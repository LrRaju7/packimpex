import React, { Component } from "react";
import styles from "../CardSlider/CardSlider.module.css";
import axios from "axios";
class SliderSingleCard extends Component {
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
      .get(apiURL + this.props.dataID)
      .then((response) => {
        this.setState({
          fieldData:
            response.data.data.relationships.field_card_components.data,
        });
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
                  this.setState({ cardData: results });
                })
                .catch((error) => {
                  console.error(error);
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
      <div className={`container ${styles.slider__single__card}`}>
        {cardDataView &&
          cardDataView.map(
            ({ fieldTitle, btnUrl, btnTitle, imgUrl }, index) => {
              return (
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
              );
            }
          )}
      </div>
    );
  }
}
export default SliderSingleCard;
