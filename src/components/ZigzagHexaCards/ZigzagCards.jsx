import React, { Component } from "react";
import axios from "axios";
import styles from "../ZigzagHexaCards/ZigzagHexaCards.module.css";

class ZigzagCards extends Component {
  constructor() {
    super();
    this.state = {
      fieldData: null,
      cardData: null,
    };
  }
  componentDidMount() {
    const baseURL = "https://packimpex-cms.zmallplanet.com/";
    const apiURL =
      baseURL + "jsonapi/paragraph/three_card_component_with_kicker/";
    const results = [];
    axios
      .get(apiURL + this.props.componentID)
      .then((response) => {
        this.setState({
          fieldData:
            response.data.data.relationships.field_card_components_1.data,
        });
        if (this.state.fieldData) {
          let id = 1;
          this.state.fieldData.forEach((data) => {
            axios
              .get(apiURL + data.id)
              .then((response) => {
                const fieldTitle =
                  response.data.data.attributes.field_card_title;
                const fieldDescription =
                  response.data.data.attributes.field_card_description.value;
                const btnUrl =
                  response.data.data.attributes.field_card_button.uri;
                const btnTitle =
                  response.data.data.attributes.field_card_button.title;
                const imgApi =
                  response.data.data.relationships.field_card_image.links
                    .related.href;
                axios
                  .get(imgApi)
                  .then((response) => {
                    const imgName = response.data.data?.attributes.name;
                    const imgFullDate = response.data.data?.attributes.created;
                    const imgDate = new Date(imgFullDate);
                    const imgYear = imgDate.getFullYear();
                    const imgMonth = ("0" + (imgDate.getMonth() + 1)).slice(-2);
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
                        baseURL +
                        "sites/default/files/2023-01/Packimpex-Family-Shoot-9314-4001.jpg";
                    }
                    results.push({
                      id,
                      fieldTitle,
                      fieldDescription,
                      btnUrl,
                      btnTitle,
                      imgUrl,
                    });
                    id++;
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
      <div className={` ${styles.cardWithTitleImageDescButton__container}`}>
        <div className={` ${styles.card__container}`}>
          {cardDataView &&
            cardDataView.map(
              ({
                id,
                fieldTitle,
                fieldDescription,
                btnUrl,
                btnTitle,
                imgUrl,
              }) => {
                return (
                  <div key={id} className={`single__card__area`}>
                    <div className={`${styles.card__image} img-fluid`}>
                      <img src={imgUrl} alt={btnUrl} />
                      <div className={`${styles.single__card__button}`}>
                        <button className={`btn__white `}>{btnTitle}</button>
                      </div>

                      <div className={`${styles.singleCard__content}`}>
                        <h4>{fieldTitle}</h4>

                        <p
                          dangerouslySetInnerHTML={{
                            __html: fieldDescription,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    );
  }
}
export default ZigzagCards;
