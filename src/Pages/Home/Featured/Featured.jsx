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
      <div className="section-shell relative py-12">
        <SectionTittle
          subHeading={"Chef's pick"}
          heading={"Featured Dish"}
        ></SectionTittle>
        <div className="grid gap-8 rounded-3xl bg-white/90 p-6 md:grid-cols-2 md:p-10 shadow-2xl backdrop-blur-sm">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={fimage}
              alt="Feature"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-neutral-800">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Nov 20, 2025
            </p>
            <h3 className="text-2xl font-semibold">Where flavor meets craft</h3>
            <p className="leading-relaxed text-neutral-700">
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
