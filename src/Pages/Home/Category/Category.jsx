import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../../../../../assets/home/slide1.jpg";
import slide2 from "../../../../../assets/home/slide2.jpg";
import slide3 from "../../../../../assets/home/slide3.jpg";
import slide4 from "../../../../../assets/home/slide4.jpg";
import slide5 from "../../../../../assets/home/slide5.jpg";
import SectionTittle from "./../../../Components/SectionTittle/SectionTittle";

const slides = [
  { src: slide1, label: "Salads" },
  { src: slide2, label: "Pizza" },
  { src: slide3, label: "Soups" },
  { src: slide4, label: "Desserts" },
  { src: slide5, label: "Drinks" },
];

const Category = () => {
  return (
    <section className="section-shell py-12">
      <SectionTittle
        subHeading={"From 11 am to 11 pm"}
        heading={"Order Online"}
      ></SectionTittle>
      <div className="rounded-2xl my-3  p-4 ">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={18}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 18 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          centeredSlides={false}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper pb-10"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.label}>
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl uppercase text-white drop-shadow-lg">
                  {item.label}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
