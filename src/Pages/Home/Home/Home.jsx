import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Motto from "../Motto/Motto";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Motto></Motto>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
