import React, { useEffect } from "react";
import CaseStudy from "../CaseStudy";
import Cta from "../Cta";
import Div from "../Div";
import Hero3 from "../Hero/Hero3";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import Portfolio2 from "../Portfolio/Portfolio2";
import Portfolio3 from "../Portfolio/Portfolio3";
import SectionHeading from "../SectionHeading";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";
import { pageTitle } from "../../helper";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { Constants } from "../../utils/constants";
const heroSocialLinks = [
  {
    name: "Behance",
    links: "/",
  },
  {
    name: "Twitter",
    links: "/",
  },
];
// const portfolioData = [
//   {
//     title: "Winery eCommerce website design & development",
//     subtitle: "Project 01",
//     btnText: "See Details",
//     btnLink: "/portfolio/portfolio-details",
//     imageUrl: "/images/portfolio_35.jpeg",
//     category: "Web Development",
//   },
//   {
//     title: "Euro corporate agency for healthy environment",
//     subtitle: "Project 02",
//     btnText: "See Details",
//     btnLink: "/portfolio/portfolio-details",
//     imageUrl: "/images/portfolio_36.jpeg",
//     category: "Branding",
//   },
//   {
//     title: "Powerful admin dashboard design",
//     subtitle: "Project 03",
//     btnText: "See Details",
//     btnLink: "/portfolio/portfolio-details",
//     imageUrl: "/images/portfolio_37.jpeg",
//     category: "UI Design",
//   },
//   {
//     title: "Crypto financial trading apps for hedge fund",
//     subtitle: "Project 04",
//     btnText: "See Details",
//     btnLink: "/portfolio/portfolio-details",
//     imageUrl: "/images/portfolio_38.jpeg",
//     category: "Apps Design",
//   },
// ];

function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getPathSegment(index) {
  try {
    console.log("window.location.pathname", window.location.pathname);
    const segments = window.location.pathname
      .split("/")
      .filter((segment) => segment.length > 0);
    return segments[index] || null;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}

export default function ProjectsListPage() {
  const category = getPathSegment(2);
  pageTitle("Creative Portfolio");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useAxiosFetch("/projects/get", {});
  const portfolioData = data?.arrList;

  return (
    <>
      {/* Start Hero Section */}
      <Hero3
        title={`${capitalizeFirstLetter(category)} Projects`}
        btnLink="contact"
        btnText={""}
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="./images/hero_bg_4.jpeg"
      />
      {/* End Hero Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="90" md="60" />
      {portfolioData?.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.projectName}
              subtitle={item.subtitle}
              btnText={"See Details"}
              btnLink={`/projects/${item._id}`}
              imageUrl={`${Constants.imagebase}${item?.mainImage}`}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.projectName}
              subtitle={item.subtitle}
              btnText={"See Details"}
              btnLink={`/projects/${item._id}`}
              imageUrl={`${Constants.imagebase}${item?.mainImage}`}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        )
      )}
      {/* End Portfolio Section */}

      {/* Start Case Study Section */}
      <Spacing lg="45" md="10" />
      {/* <Div className="container">
        <SectionHeading
          title="Featured case study"
          subtitle="Case Study"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div> */}
      {/* <CaseStudy
        title="Analysis lead <br /> more efficiently"
        bgUrl="/images/case_study_2.jpeg"
        href="/case-study/case-study-details"
        variant="cs-style2"
      />
      <CaseStudy
        title="Ubar food app <br /> case study"
        bgUrl="/images/case_study_1.jpeg"
        href="/case-study/case-study-details"
      /> */}
      {/* <Spacing lg="150" md="80" /> */}
      {/* End Case Study Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      {/* <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div> */}
      {/* End CTA Section */}
    </>
  );
}
