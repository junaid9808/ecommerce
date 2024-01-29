import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  const settings = {
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <>
      <div className=" rounded-lg">
        <Slider {...settings}>
          <div>
            <img className="w-full h-96 " src="slider1.png" alt="mobile"></img>
          </div>
          <div>
            <img className="w-full h-96 " src="slider3.png" alt="mobile"></img>
          </div>
          <div>
            <img className="w-full h-96 " src="slider2.jpg" alt="mobile"></img>
          </div>
          <div>
            <img className="w-full h-96 " src="laptop.jpg" alt="laptop"></img>
          </div>
          <div>
            <img className="w-full h-96 " src="clothes.jpg" alt="clothes"></img>
          </div>
          <div>
            <img className="w-full h-96 " src="moblie.jpg" alt="mobile"></img>
          </div>
        </Slider>
      </div>
    </>
  );
}
