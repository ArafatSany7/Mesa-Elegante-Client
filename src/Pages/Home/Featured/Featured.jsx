import React from "react";
import SectionTittle from "./../../../Components/SectionTittle/SectionTittle";
import fimage from "../../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="feature-item backdrop-blur-3xl my-8"
      style={{ backgroundImage: `url(${fimage})` }}
    >
      <div className="text-black pt-8">
        <SectionTittle
          subHeading={"Cheking Out"}
          heading={"Feature"}
        ></SectionTittle>
      </div>
      <div className="md:flex justify-between items-center py-8 px-16">
        <div>
          <img src={fimage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Nov 20 2025</p>
          <p className="uppercase"> Where can i get some</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            architecto cum blanditiis, eum perspiciatis, id distinctio dolor,
            aspernatur quasi aut possimus dolores! Earum quos excepturi saepe
            velit ab aperiam debitis.
          </p>
          <button className="btn btn-accent">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
