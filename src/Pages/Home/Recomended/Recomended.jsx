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
    <div className="max-w-7xl my-12">
      <div className="h-60 my-9 " style={{ backgroundImage: `url(${img2})` }}>
        <h2 className="h-60 backdrop-blur-2xl  backdrop-saturate-50 text-black text-7xl text-center pt-14">
          01406584258
        </h2>
      </div>
      <section>
        <SectionTittle
          heading={"CHEF RECOMMENDS"}
          subHeading={"Should Try"}
        ></SectionTittle>
      </section>
      <div className="grid md:grid-cols-4">
        {menu.map((item) => (
          <RecoCard key={item._id} item={item}></RecoCard>
        ))}
      </div>
    </div>
  );
};

export default Recomended;
