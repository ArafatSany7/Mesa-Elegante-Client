import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, tittle, coverImg }) => {
  return (
    <div>
      {tittle && <Cover img={coverImg} tittle={tittle}></Cover>}
      <div className="section-shell">
        <div className="grid md:grid-cols-2 gap-6 mb-10 mt-12">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
