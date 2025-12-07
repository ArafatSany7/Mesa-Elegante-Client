import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card glass-card  shadow-sm border border-white/10">
      <figure>
        <img src={image} alt={name} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-lg">{name}</h3>
          <span className="badge badge-ghost text-amber-600">${price}</span>
        </div>
        <p className="text-sm text-base-content/70">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
