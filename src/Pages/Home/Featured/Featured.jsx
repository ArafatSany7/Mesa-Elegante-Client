import React from "react";
import SectionTittle from "./../../../Components/SectionTittle/SectionTittle";
import fimage from "../../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="feature-item backdrop-blur-3xl bg-fixed h-[700px]  my-8"
      style={{ backgroundImage: `url(${fimage})` }}
    >
      <div className="backdrop-blur-xl h-full">
        <div className="text-black pt-8">
          <SectionTittle
            subHeading={"Cheking Out"}
            heading={"Feature"}
          ></SectionTittle>
        </div>
        <div className="md:flex justify-between items-center py-8 px-16 text-black">
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
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
