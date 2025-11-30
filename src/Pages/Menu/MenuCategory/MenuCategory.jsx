import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, tittle, coverImg }) => {
  return (
    <div>
      {tittle && <Cover img={coverImg} tittle={tittle}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mb-5 mt-14 gap-7">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
