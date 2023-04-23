import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/slider-1.jpg"
import img2 from "../images/slider-2.jpg"
import img3 from "../images/slider-3.jpg"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        {/* https://www.pizzaah.com/images/slider-3.jpg */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;