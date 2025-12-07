import React, { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import RecoCard from "../../../Components/RecoCard/RecoCard";

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
