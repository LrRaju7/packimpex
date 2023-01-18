import React, { Component, Fragment } from "react";
import axios from "axios";
import styles from "../ZigzagTriCard/ZigzagTriCard.module.css";
import { DRUPAL_API_ENDPOINT, FETCH_SPECIFIC_COMPONENT } from '../../constants/drupalApiEndPoints';
import { THREE_CARD_COMPONENT_WITH_TITLE } from '../../constants/componentTypes';
class ZigzagTriCardSingle extends Component {
  constructor() {
    super();
    this.state = {
      fieldData: null,
      cardData: null,
    };
  }
  componentDidMount() {
    const apiURL = DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +THREE_CARD_COMPONENT_WITH_TITLE ;
    const results = [];
    axios
      .get(apiURL + this.props.componentID)
      .then((response) => {
        this.setState({
          fieldData:
            response.data.data.relationships?.field_card_components_2?.data,
        });
        if (this.state.fieldData) {
          this.state.fieldData.forEach((data) => {
            axios
              .get(apiURL + data.id)
              .then((response) => {
                const fieldTitle =
                  response.data.data.attributes?.field_card_title;
                const fieldDescription =
                  response.data.data.attributes?.field_card_description;
                const btnUrl =
                  response.data.data.attributes?.field_card_button?.uri;
                const btnTitle =
                  response.data.data.attributes?.field_card_button?.title;
                const imgApi =
                  response.data.data.relationships?.field_card_image?.links?.related?.href;
                axios
                  .get(imgApi)
                  .then((response) => {
                    const imgName = response.data.data?.attributes?.name;
                    const imgFullDate = response.data.data?.attributes?.created;
                    const imgDate = new Date(imgFullDate);
                    const imgYear = imgDate.getFullYear();
                    const imgMonth = ("0" + (imgDate.getMonth() + 1)).slice(-2);
                    var imgUrl = "";
                    if (imgName && imgFullDate) {
                      imgUrl =
                      DRUPAL_API_ENDPOINT +
                        "/sites/default/files/" +
                        imgYear +
                        "-" +
                        imgMonth +
                        "/" +
                        imgName;
                    } else {
                      imgUrl =
                      DRUPAL_API_ENDPOINT +
                        "/sites/default/files/2022-12/Packimpex-Family-Shoot-9314-4001.jpg";
                    }
                    results.push({
                      fieldTitle,
                      fieldDescription,
                      btnUrl,
                      btnTitle,
                      imgUrl,
                    });
                    this.setState({ cardData: results });
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              })
              .catch((error) => {
                console.error(error);
              });
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
      <>
        <div className={`${styles.single__zigzag__container}`}>
          {cardDataView &&
            cardDataView.map(
              (
                { fieldTitle, fieldDescription, btnUrl, btnTitle, imgUrl },
                index
              ) => {
                return (
                  <div className={`${styles.single__zigzag__card}`}>
                    <div
                      className={`img-fluid ${styles.single__triCard__image}`}
                    >
                      <img src={imgUrl} alt={btnUrl} />
                      <div className={`${styles.single__triCard__top}`}>
                        <button className={`btn__white `}>{btnTitle}</button>
                      </div>
                      <div className={`${styles.single__triCard__contents}`}>
                        <h4 className={`${styles.single__triCard__title}`}>
                          {fieldTitle}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </>
    );
  }
}
export default ZigzagTriCardSingle;
