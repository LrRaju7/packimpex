import styles from "../Footer/Social.module.css";
import { useState, useEffect } from "react";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "./Font/selection.json";
import { IP_API } from "../../constants/drupalApiEndPoints";
import { getUserIPData } from "../../api/getData";
const SocialMedia = () => {
  const [loading, setLoading] = useState(true);
  const [userLanguage, setUserLanguage] = useState("");
  const [userCountry, setUserCountry] = useState("");

  useEffect(() => {
    getUserIPData(setUserLanguage, setUserCountry, setLoading, IP_API);
  }, []);
  return (
    <div className="footer__links my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={`${styles.social__icons}`}>
              <a
                className={`${styles.footer__icon}`}
                href="https://www.linkedin.com/company/packimpex-sa"
              >
                <IcomoonReact
                  iconSet={iconSet}
                  size={22}
                  color="#fff"
                  icon="linkedin2"
                />
              </a>
              <a
                className={`${styles.footer__icon}`}
                href="https://www.facebook.com/packimpex/"
              >
                <IcomoonReact
                  iconSet={iconSet}
                  size={22}
                  color="#fff"
                  icon="facebook"
                />
              </a>
              <a
                className={`${styles.footer__icon}`}
                href="https://twitter.com/packimpexsa"
              >
                <IcomoonReact
                  iconSet={iconSet}
                  size={22}
                  color="#fff"
                  icon="twitter"
                />
              </a>
              <a
                className={`${styles.footer__icon}`}
                href="https://www.youtube.com/user/PackimpexSA"
              >
                <IcomoonReact
                  iconSet={iconSet}
                  size={22}
                  color="#fff"
                  icon="youtube"
                />
              </a>
              <a
                className={`${styles.footer__icon}`}
                href="https://www.xing.com/pages/packimpexltd"
              >
                <IcomoonReact
                  iconSet={iconSet}
                  size={25}
                  color="#fff"
                  icon="xing2"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            {userCountry && (
              <div className={styles.footer__lag}>
                <span>
                  <a href={userLanguage.toLocaleLowerCase()}>{userCountry}</a>
                </span>
                <span className={styles.footer__line}> | </span>
                <span>
                  <a href="/">English</a>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
