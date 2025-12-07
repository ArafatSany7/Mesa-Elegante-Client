import React, { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimmonial = () => {
  const [rev, setRev] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setRev(data));
  }, []);

  return (
    <section className="section-shell my-14">
      <SectionTittle
        subHeading={"What our clients say"}
        heading={"Testimonials"}
      ></SectionTittle>
      <div className="rounded-3xl bg-white/75 p-4 shadow-xl">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {rev.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center gap-4 px-6 py-10 text-center md:px-12">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="text-sm md:text-base text-neutral-700 max-w-3xl">
                  {review.details}
                </p>
                <h3 className="text-xl font-semibold text-primary">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimmonial;
