import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1200,
      autoplaySpeed: 100,
      cssEase: "ease",
    };

    return (
      <div className="carouselLayout">
        <h2 className="carousTitle">Auto Play</h2>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="carousItem">
            <img src="iphone1.jpg" alt="" />
          </div>
          <div className="carousItem">
            <img src="iphone2.jpg" alt="" />
          </div>
          <div className="carousItem">
            <img src="iphone3.jpg" alt="" />
          </div>
          <div className="carousItem">
            <img src="iphone4.jpg" alt="" />
          </div>
          <div className="carousItem">
            <img src="iphone5.jpg" alt="" />
          </div>
        </Slider>
        <div className="carouselButtons">
          <button className="carouselButton" onClick={this.play}>
            Play
          </button>
          <button className="carouselButton" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
