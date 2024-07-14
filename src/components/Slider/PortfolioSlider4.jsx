import React from "react";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";
import { Constants } from "../../utils/constants";
import useAxiosFetch from "../../hooks/useAxiosFetch";

export default function PortfolioSlider4() {
  const { data, loading, error } = useAxiosFetch("/projects/featured", {});
  const datas = data?.arrList;
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
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {datas?.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.projectName}
            subtitle={item.shortDesc}
            href={`/projects/${item._id}?type=featured&category=`}
            src={`${Constants.imagebase}${item.mainImage}`}
          />
        </Div>
      ))}
    </Slider>
  );
}
