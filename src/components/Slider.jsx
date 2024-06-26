import Carousel from "./Carousel";
import { img1, img2, img3, img4, img5, img6, img7 } from "../assets/images/Slider";
import { video } from '../assets/images/Slider/Videos';

const Slider = () => {
  const slides = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="relative">
      <div className="max-w-[1000px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Slider;