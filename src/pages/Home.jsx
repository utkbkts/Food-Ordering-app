import React from "react";
import Offer from "../components/Offer";
import Sectionfood from "../components/Sectionfood";
import Hero from "../components/Hero";
import SectionAdvert from "../components/SectionAdvert";
const Home = () => {
  return (
    <div>
      <Hero />
      <Offer />
      <Sectionfood />
      <SectionAdvert/>
    </div>
  );
};

export default Home;
