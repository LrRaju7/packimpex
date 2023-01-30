import React from "react";
import Menu from "../Header/Menu";
import Footer from "../Footer/Footer";
import PackImpex from "./PackImpex";
import SocialMedia from "../Footer/SocialMedia";

const Layout = (props) => {
  return (
    <>
      <Menu />
      <div className="h100-pc"></div>
      {props.children}
      <div className="h80"></div>
      <Footer />
      <SocialMedia />
    </>
  );
};

export default Layout;
