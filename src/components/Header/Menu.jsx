import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MenuItems from "../themeComponents/MegaMenu/MenuItems";
import TopBar from "../TopBar/TopBar";
const Menu = () => {
  const [pages, setPages] = useState([]);
  const menuItems = useSelector((state) => state.menu.menuItems);

  return (
    <div className="sticky-header" id="top">
      <TopBar />
      <div className="start-sticky">
        <div className="start-sticky-wrap">
          <label>
            <a href="https://www.packimpex.ch/testimonials" target="_blank">
              <div className="start-sticky-total">
                <div>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <span>4.6</span> &nbsp; (4885 Reviews)
              </div>
            </a>
          </label>
        </div>
      </div>
      <div className="header-container">
        <MenuItems></MenuItems>
      </div>
    </div>
  );
};

export default Menu;
