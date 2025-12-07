import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, tittle }) => {
  return (
    <Parallax
      blur={{ min: -55, max: 55 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="relative h-[420px] md:h-[520px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/35"></div>
        <div className="relative flex h-full items-center justify-center text-center text-white">
          <div className="max-w-2xl px-6">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200">
              Mesa Elegante
            </p>
            <h1 className="mb-4 text-3xl md:text-5xl font-semibold uppercase">
              {tittle}
            </h1>
            <p className="text-sm md:text-base text-white/85">
              Seasonal flavors, cozy ambiance, and attentive service. Reserve
              your seat or order online and enjoy a crafted dining experience.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
