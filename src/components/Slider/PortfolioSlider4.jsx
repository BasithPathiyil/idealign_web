import React from "react";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";
import { Constants } from "../../utils/constants";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PortfolioSlider4() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const SlickArrowLeft1 = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight1 = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
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
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="cs-slider cs-style3 cs-gap-24 cs-arrow_style4"
    >
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
      {/* <SlickArrowLeft1 /> */}
      {/* <SlickArrowRight1 /> */}
    </Slider>
  );
}
