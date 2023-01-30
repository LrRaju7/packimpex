import React, { useEffect } from 'react'
import Logo from "../../../assets/image/Packimpex_Claim_2c.svg"
import { Link } from 'react-router-dom'
import ComponentDecider from "../ComponentDecider" 
export default function MenuDesktop(props) {
  return (
    <div className="header-bottom show-search-box">
      <div className="header-logo-outer">
        <a className="header-logo" href="/">
          <img className="" src={Logo} alt="" width="100%" /></a>
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
                <span>4.6</span> &nbsp;
                (4885 Reviews)
              </div>
            </a>
          </label>
        </div>
      </div>
      <div className="header-nav header-nav-hk">
        <div className="header-nav-scroll">
          <ul className="lg-nav-items">
            {
              props?.items?.map((item) => {
                return (
                  <li className="lg-nav-item nav-hover drop-down-nav" key={item.id}>
                      <a href="corporate_relocation.html" className="active-white"><span>{item?.attributes?.field_mega_menu_title}</span></a>
                      <ComponentDecider items={item?.relationships?.field_mega_?.data}></ComponentDecider>
                  </li>
                )
              })
            }
            
          </ul>
        </div>
      </div>
      <div className="header-tools">
        <div className="header-menu-search-mb">
          <span className="header-icon-search"></span>
        </div>
        <ul className="header-tools-right header-main">
          <li className="header-register"><a href="contact_us.html" className="btn js-register"> Get a quote </a></li>
          <li className="">
            <div className="top-bar-line"></div>
          </li>
          <li className=""> <img src="/packimpex/images/NL_icons/search.svg" alt="" /></li>
        </ul>
        <div className="header-menu-mb hamburger material-icons" id="ham">
          <div className="mb-menu">MENU</div>
          <div className="mb-close">CLOSE</div>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
