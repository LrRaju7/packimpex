import React from 'react'
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import History from "../../components/History/History";
import ImageTextLeft from "../../components/ImageTextLeft/ImageTextLeft";
import ImageTextRight from "../../components/ImageTextRight/ImageTextRight";

const Home = () => {
  return (
    <div className="App">
        <Header />
        <Banner />
        <History />
        <ImageTextLeft />
        <br></br>
        <ImageTextRight />
        <Footer />
    </div>
  )
}

export default Home