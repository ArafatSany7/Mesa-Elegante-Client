import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../../../assets/home/01.jpg";
import img2 from "../../../../../assets/home/02.jpg";
import img3 from "../../../../../assets/home/03.png";
import img4 from "../../../../../assets/home/04.jpg";
import img5 from "../../../../../assets/home/05.png";
import img6 from "../../../../../assets/home/06.png";

const slides = [img1, img2, img3, img4, img5, img6];

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4500}
        showStatus={false}
        swipeable
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {slides.map((src, idx) => (
          <div key={src + idx} className="relative">
            <img src={src} className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
