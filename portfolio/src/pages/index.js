import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import InfoSection2 from "../components/Infosection2";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection2 {...homeObjTwo} />
      <Services />
      <Tools />
      <InfoSection2 {...homeObjThree} />
      <Portfolio />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
