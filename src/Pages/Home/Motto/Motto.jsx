import React from "react";
import img1 from "../../../../../assets/home/chef-service.jpg";

const Motto = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center flex justify-center items-center mb-5"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="h-44 w-2/3 bg-white/10 backdrop-blur-2xl backdrop-saturate-100 border-b border-white/20 border 2PX  text-center">
        <h2 className="text-black text-3xl uppercase mt-5">Mesa Elegante </h2>
        <p className="text-amber-100 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem
          earum sapiente. Quis perferendis eaque ipsum quia qui, molestiae iusto
          placeat unde cupiditate ab error voluptatum ex nisi blanditiis
          pariatur amet reiciendis aperiam reprehenderit quidem incidunt esse
          dicta culpa. Quo.
        </p>
      </div>
    </div>
  );
};

export default Motto;
