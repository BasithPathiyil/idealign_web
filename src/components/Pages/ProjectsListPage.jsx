import React, { useEffect, useState } from "react";
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
import Portfolio7 from "../Portfolio/Portfolio7";
import PageHeading2 from "../PageHeading/PageHeading2";
import { useLocation } from "react-router-dom";
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

function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getPathSegment(index) {
  try {
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
  const location = useLocation();
  const category = getPathSegment(2);
  console.log("coategory", category);
  pageTitle("Creative Portfolio");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [url, setUrl] = useState(
    `/projects/${capitalizeFirstLetter(category)}/get`
  );
  // useEffect(() => {
  //   setUrl(`/projects/${capitalizeFirstLetter(category)}/get`);
  // }, [category]);
  useEffect(() => {
    const handlePathChange = () => {
      const newCategory = getPathSegment(2);
      console.log("newCategory", newCategory);
      // setCategory(newCategory);
      setUrl(`/projects/${capitalizeFirstLetter(newCategory)}/get`);
    };

    // Listen to the pathname changes
    window.addEventListener("popstate", handlePathChange);

    // Initial URL setup
    handlePathChange();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, [location.pathname]);
  const { data, loading, error } = useAxiosFetch(url, {});
  const portfolioData = data?.arrList;

  return (
    <>
      {/* Start Hero Section */}
      <PageHeading2
        title={`${capitalizeFirstLetter(category)} Projects`}
        bgSrc="/images/training/const.jpg"
        pageLinkText=""
      />
      {/* <Spacing lg="150" md="80" />
      <Hero3
        title={`${capitalizeFirstLetter(category)} Projects`}
        btnLink="contact"
        btnText={""}
        socialLinksHeading=" "
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="./images/hero_bg_4.jpeg"
      /> */}
      {/* End Hero Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="80" />
      {portfolioData?.map((item, index) => (
        <Div key={index}>
          <Portfolio7
            title={item.projectName}
            subtitle={item.shortDesc}
            place={item.place}
            area={item.area}
            btnText={"See Details"}
            btnLink={`/projects/${item._id}?type=get&category=${category}`}
            imageUrl={`${Constants.imagebase}${item?.mainImage}`}
            category={item.category}
          />
          <Spacing lg="100" md="70" />
        </Div>
      ))}
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
