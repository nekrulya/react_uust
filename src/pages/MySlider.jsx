import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.3)",
          height: "500px",
          width: 90,
          right: "-90px",
          borderRadius: "0 10px 10px 0",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.3)",
          height: "500px",
          width: 90,
          left: "-90px",
          borderRadius: "10px 0 0 10px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="MySlider">
      <div className="ImageSlider">
        <img src="cat 1.png" alt="cat 1" />
      </div>
      <div className="ImageSlider">
        <img src="cat 2.png" alt="cat 2" />
      </div>
      <div className="ImageSlider">
        <img src="cat 3.png" alt="cat 3" />
      </div>
      <div className="ImageSlider">
        <img src="cat 4.png" alt="cat 4" />
      </div>
    </Slider>
  );
};

export default MySlider;
