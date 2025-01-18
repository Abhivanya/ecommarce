import React from "react";
import Banner from "../components/Home/Banner";
import LatestCollection from "../components/Home/LatestCollection";
import BestSeller from "../components/Home/BestSeller";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
