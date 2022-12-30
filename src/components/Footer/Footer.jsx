import React from "react";
import styles from "../Footer/Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className="container-fluid px-4 pb-5">
        <div className={`row ${styles.footer__top}`}>
          <div className="col-md-3">
            <h2 className={styles.footer__title}>Our services</h2>
            <ul>
              <li>
                <a href="#">Corporate Relocation</a>
              </li>
              <li>
                <a href="#">Corporate Housing</a>
              </li>
              <li>
                <a href="#">Services for Individuals</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className={styles.footer__title}>About Us</h2>
            <ul>
              <li>
                <a href="#">About Packimpex</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className={styles.footer__title}>Find out more</h2>
            <ul>
              <li>
                <a href="#">Packimpex Academy</a>
              </li>
              <li>
                <a href="#">Why Packimpex</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className={styles.footer__title}>Contact</h2>
            <ul>
              <li>
                <a href="#">info@packimpex.com</a>
              </li>
              <li>
                <a href="#">+31 20 80 89 050</a>
              </li>
              <li>
                <a href="#">
                  Packimpex Netherlands B.V., Schiphol Boulevard 359, D Tower,
                  11th Floor, 1118BJ Schiphol
                </a>
              </li>
              <li>
                <a href="#">
                  Headquarters: Packimpex Ltd., Switzerland www.packimpex.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className={`row ${styles.footer__bottom}`}>
          <div className="col-md-5"></div>
          <div className="col-md-7">
            <ul>
              <li>
                <a href="#">Term & Condition</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;