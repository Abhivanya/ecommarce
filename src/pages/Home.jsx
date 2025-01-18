import React from "react";
import Banner from "../components/Home/Banner";
import LatestCollection from "../components/Home/LatestCollection";
import BestSeller from "../components/Home/BestSeller";
import OurPolicy from "../components/Home/OurPolicy";
import NewsLetterBox from "../components/Home/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
