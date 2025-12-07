import React from "react";

const RecoCard = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div className="card glass-card w-full overflow-hidden">
      <figure className="h-48 w-full overflow-hidden">
        <img src={image} className="h-full w-full object-cover" alt={name} />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-lg text-neutral-900">{name}</h2>
        <p className="text-sm text-neutral-600">{recipe}</p>
        <div className="card-actions pt-2">
          <button className="btn btn-primary btn-sm px-5">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RecoCard;
