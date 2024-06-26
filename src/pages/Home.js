import React from "react";
import Header from "../Component/Header";
import Intro from "../Component/Intro";
// import About from "../Component/About";
import Look from "../Component/Look";
import Services from "../Component/Services";
import Barbers from "../Component/Barbers";
import Address from "../Component/Address";
import LocalBarbers from "../Component/LocalBarbers";
import Slider from "../Component/Slider";
import Barbershop from "../Component/Barbershop";
import There from "../Component/There";
import SliderRevolution from "../Component/SliderRevolution";
import TheMost from "../Component/TheMost";
import Join from "../Component/Join";
import NewsLetter from "../Component/NewsLetter";
import Resources from "../Component/Resources";
import Icon from "../Component/Icon";
// import Table from "../Component/Table";

function Home() {
  return (
    <div className="main">
      <Header></Header>
      <Intro></Intro>
      <Look></Look>
      <Services></Services>
      <Barbers></Barbers>
      <Address></Address>
      <LocalBarbers></LocalBarbers>
      <Slider></Slider>
      <Barbershop></Barbershop>
      <There></There>
      <SliderRevolution></SliderRevolution>
      <TheMost></TheMost>
      <Join></Join>
      <NewsLetter></NewsLetter>
      <Resources></Resources>
      <Icon></Icon>
    </div>
  );
}

export default Home;
