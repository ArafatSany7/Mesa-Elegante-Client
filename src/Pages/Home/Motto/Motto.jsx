import React from "react";
import img1 from "../../../../../assets/home/chef-service.jpg";

const Motto = () => {
  return (
    <section className="section-shell my-12">
      <div
        className="relative h-72 overflow-hidden rounded-3xl shadow-2xl"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/25"></div>
        <div className="relative h-full flex flex-col items-start justify-center px-8 md:px-12 lg:px-16 text-white space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200">
            Our philosophy
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">Mesa Elegante</h2>
          <p className="max-w-2xl text-sm md:text-base text-white/85">
            Crafted plates, warm ambiance, and thoughtful service. Whether it is
            a casual brunch or a late-night celebration, we make every table
            feel like the best seat in the house.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motto;
