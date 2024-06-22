import React from "react";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { Constants } from "../../utils/constants";
import Portfolio4 from "../Portfolio/Portfolio4";

export default function PortfolioSlider3() {
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data, loading, error } = useAxiosFetch("/projects/get", {});
  const portfolioData = data?.arrList;
  console.log("portfolioData", portfolioData);
  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {portfolioData?.map((item, index) => (
        <Div key={index}>
          <Portfolio4
            title={item.projectName}
            subtitle={item.shortDesc}
            href={`${item._id}`}
            src={`${Constants.imagebase}${item.mainImage}`}
          />
        </Div>
      ))}
    </Slider>
  );
}
