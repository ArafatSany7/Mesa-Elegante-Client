import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import SectionTittle from "../../Components/SectionTittle/SectionTittle";
import FoodCard from "../../Components/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";
import shopBanner from "../../../../assets/shop/banner2.jpg";

const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];

const Shop = () => {
  const { category } = useParams();
  const [menu] = useMenu();
  const defaultIndex = categories.indexOf(category);
  const [active, setActive] = useState(defaultIndex >= 0 ? category : "salad");

  const filteredItems = useMemo(
    () => menu.filter((item) => item.category === active),
    [active, menu]
  );

  return (
    <div>
      <Helmet>
        <title>Mesa Elegante | Shop</title>
      </Helmet>

      <Cover img={shopBanner} tittle="Order Food"></Cover>

      <div className="section-shell">
        <SectionTittle
          heading="Select Favorite"
          subHeading="Order online"
        ></SectionTittle>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`btn btn-sm uppercase rounded-full px-4 ${
                active === cat
                  ? "btn-primary text-white"
                  : "btn-outline border-primary text-primary hover:btn-primary hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-12">
          {filteredItems.map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
