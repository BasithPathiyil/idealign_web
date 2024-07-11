import React from "react";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { Constants } from "../../utils/constants";
const portfolioData = [
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_31.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_32.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_33.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_34.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_31.jpeg",
  },
  // {
  //   title: 'Colorful Art Work',
  //   subtitle: 'See Details',
  //   href: '/portfolio/portfolio-details',
  //   src: '/images/portfolio_32.jpeg',
  // },
  // {
  //   title: 'Colorful Art Work',
  //   subtitle: 'See Details',
  //   href: '/portfolio/portfolio-details',
  //   src: '/images/portfolio_33.jpeg',
  // },
  // {
  //   title: 'Colorful Art Work',
  //   subtitle: 'See Details',
  //   href: '/portfolio/portfolio-details',
  //   src: '/images/portfolio_34.jpeg',
  // },
];
export default function PortfolioSlider2() {
  const { data, loading, error } = useAxiosFetch("/newsevents/featured", {});
  const portfolios = data?.arrList;
  /** Slider Settings **/
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: portfolios?.length ? portfolios?.length > 4 ? 4 : portfolios?.length : 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: portfolios?.length ? portfolios?.length > 3 ? 3 : portfolios?.length : 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow:portfolios?.length ? portfolios?.length > 2 ? 2 : portfolios?.length : 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4">
      {portfolios?.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={`${Constants.imagebase}${item.mainImage}`}
            variant="cs-style1 cs-type2 cs-size3"
          />
        </Div>
      ))}
    </Slider>
  );
}
