import { Link } from "react-router-dom";
import styles from "../TopBar/TopBar.module.css";

const TopBarButton = ({ actioncValue, language }) => {
  if (actioncValue === "english") {
    return (
      <Link to="/">
        <button className={`btn__green ${styles.topbar__btn}`}>Continue</button>
      </Link>
    );
  } else if (actioncValue === "other") {
    return (
      <Link to="/country-language">
        <button className={`btn__green ${styles.topbar__btn}`}>Continue</button>
      </Link>
    );
  } else {
    return (
      <Link to={language.toLocaleLowerCase()}>
        <button className={`btn__green ${styles.topbar__btn}`}>Continue</button>
      </Link>
    );
  }
};
export default TopBarButton;
