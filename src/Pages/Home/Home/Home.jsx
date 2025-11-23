import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Motto from "../Motto/Motto";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recomended from "../Recomended/Recomended";
import Featured from "../Featured/Featured";
import Testimmonial from "../Testimonial/Testimmonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Motto></Motto>
      <PopularMenu></PopularMenu>
      <Recomended></Recomended>
      <Featured></Featured>
      <Testimmonial></Testimmonial>
    </div>
  );
};

export default Home;
