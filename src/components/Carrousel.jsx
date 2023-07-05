import { useState } from "react";
import LeftChevron from "../assets/Vector-left.png";
import RightChevron from "../assets/Vector-right.png";

import "../styles/Carrousel.css";

function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = pictures.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="Carrousel__Container">
      <img
        className="Carrousel__btnLeft"
        src={LeftChevron}
        alt=""
        onClick={prevSlide}
      />
      <img
        className="Carrousel__btnRight"
        src={RightChevron}
        alt=""
        onClick={nextSlide}
      />
      <div className="Carrousel__counter">
        {currentSlide + 1}/{totalSlides}
      </div>
      <img className="Carrousel__image" src={pictures[currentSlide]} alt="" />
    </div>
  );
}

export default Carrousel;
