import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Div from "../Div";

const FullScreenSlider = ({ data }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <Div className="cs-fullscreen-slider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <Div
              className="cs-hero cs-style1 text-center cs-bg"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <Link to={item.href} className="cs-hero_link" />
              <Div className="cs-hero_text">
                <h2
                  style={{ color: "white" }}
                  className="cs-hero_title  cs-white_color"
                >
                  {parse(item.title)}
                </h2>
                <Div className="cs-hero_info justify-content-center">
                  <Div className="cs-hero_subtitle">{item?.subtitle}</Div>
                </Div>
              </Div>
            </Div>
          </div>
        ))}
      </Slider>
    </Div>
  );
};

export default FullScreenSlider;
