import React from "react";

const SectionTittle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-10 space-y-2">
      <p className="text-sm uppercase tracking-[0.35em] text-primary/80">
        {subHeading}
      </p>
      <h3 className="text-3xl md:text-4xl font-semibold text-primary/80">
        {heading}
      </h3>
      <div className="mx-auto h-0.5 w-16 bg-primary/60"></div>
    </div>
  );
};

export default SectionTittle;
