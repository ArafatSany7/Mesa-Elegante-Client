import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="glass-card flex gap-4 border-2 rounded-2xl border-primary/30 p-4 shadow-sm ring-1 ring-black/5">
      <img
        className="h-24 w-24 rounded-xl object-cover"
        src={image}
        alt={name}
      />
      <div className="flex flex-1 items-start justify-between">
        <div className="space-y-1 pr-3">
          <h3 className="text-lg font-semibold ">{name}</h3>
          <p className="text-sm ">{recipe}</p>
        </div>
        <p className="text-base font-semibold text-primary">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
