import React from "react";
import SectionTittle from "./../../../Components/SectionTittle/SectionTittle";
import fimage from "../../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="relative my-12 bg-fixed"
      style={{ backgroundImage: `url(${fimage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="flex flex-col section-shell relative py-4 my-4">
        <SectionTittle
          subHeading={"Chef's pick"}
          heading={"Featured Dish"}
        ></SectionTittle>
        <div className="glass-card grid gap-8 mb-4 rounded-3xl m-auto md:grid-cols-2 md:p-10 backdrop-blur-sm">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={fimage}
              alt="Feature"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 ">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Nov 20, 2025
            </p>
            <h3 className="text-2xl font-semibold">Where flavor meets craft</h3>
            <p className="leading-relaxed">
              A slow-roasted signature featuring seasonal produce, crisp greens,
              and a velvety reduction. Served with house-made sourdough and
              herb-infused butter.
            </p>
            <button className="btn btn-primary mt-4 px-6">Order now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
