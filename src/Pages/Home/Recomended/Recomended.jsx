import React, { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import RecoCard from "../../../Components/RecoCard/RecoCard";
import img2 from "../../../../../assets/dashboard/image-5.jpg";

const Recomended = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("Menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recomendedItem = data.filter(
          (item) => item.category === "offered"
        );
        setMenu(recomendedItem);
      });
  }, []);
  return (
    <section className="section-shell my-14">
      <div
        className="relative mb-10 overflow-hidden rounded-3xl bg-cover bg-center shadow-2xl"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative flex flex-col items-center justify-center gap-2 px-6 py-16 text-center text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
            Reservations
          </p>
          <h2 className="text-3xl font-semibold">
            Call us to reserve: 01406 584 258
          </h2>
          <p className="max-w-2xl text-sm text-white/80">
            Prefer speaking to a host? Reach out and we will arrange the perfect
            table for your occasion.
          </p>
        </div>
      </div>

      <SectionTittle
        heading={"Chef Recommends"}
        subHeading={"Should try"}
      ></SectionTittle>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menu.map((item) => (
          <RecoCard key={item._id} item={item}></RecoCard>
        ))}
      </div>
    </section>
  );
};

export default Recomended;
