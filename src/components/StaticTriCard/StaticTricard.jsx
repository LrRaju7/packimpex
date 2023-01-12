import styles from "../StaticTriCard/StaticTriCard.module.css";
import CardSliderParent from "../CardSlider/CardSliderParent";
import TitleDescription from "../TitleDescription/TitleDescription";

const StaticTriCard = () => {
  return (
    <>
      <div className={`${styles.StaticTriCard__area}`}>
        <div className="container">
          <div className={`row`}>
            <div className={`col-md-12 ${styles.StaticTriCard__container}`}>
              <div className={`${styles.static__cards__top}`}>
                <TitleDescription />
              </div>
              <div className={`${styles.static__cards}`}>
                <CardSliderParent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StaticTriCard;
