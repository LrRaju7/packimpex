import styles from "../CardSliderWithTitle/CardSliderWithTitle.module.css";
import CardSlider from "../CardSlider/CardSlider";

const CardSliderWithTitle = () => {
  return (
    <div className={`container ${styles.cardSlider__title}`}>
      <h3>More on Relocation Support</h3>
      <CardSlider />
    </div>
  );
};

export default CardSliderWithTitle;
