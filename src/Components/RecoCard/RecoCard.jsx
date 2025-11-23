import React from "react";

const RecoCard = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div className=" ">
      <div className="card bg-base-100 w-80 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-soft btn-success"> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoCard;
