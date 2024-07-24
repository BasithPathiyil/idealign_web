import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Pagination from "../Pagination";
import PostStyle2 from "../Post/PostStyle2";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import ProjectCategoryCard from "../Projects/ProjectsCategoryCard.jsx";
import Hero3 from "../Hero/Hero3.jsx";
const postData = [
  {
    thumb: "/images/blog_hero_bg.jpeg",
    title: "Commercial",
    href: "/projects/category/commercial",
  },
  {
    thumb: "/images/blog_hero_bg.jpeg",
    title: "Industrial",
    href: "/projects/category/industrial",
  },
  {
    thumb: "/images/blog_hero_bg.jpeg",
    title: "Hospitality",
    href: "/projects/category/hospitality",
  },
  ,
  {
    thumb: "/images/blog_hero_bg.jpeg",
    title: "Residential",
    href: "/projects/category/residential",
  },
];

export default function ProjectsPage() {
  pageTitle("Blog");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Spacing lg="90" md="60" />
      <Hero3
        title={`Projects`}
        btnLink="contact"
        btnText={""}
        socialLinksHeading=" "
        bgImageUrl="./images/servicesbg.jpg"
      />
      {/* <Spacing lg="90" md="60" /> */}
      <Div className="container">
        <h2 className="cs-accordian_title ">
          Idealign specializes in delivering tailor-made, end-to-end holistic
          project management solutions designed for the entire life cycle of
          real estate and construction projects. Our commitment is to empower
          clients with innovative solutions, ensuring timely project delivery,
          adherence to budget constraints, and the highest quality standards.
        </h2>
      </Div>
      <Spacing lg="90" md="60" />
      <Div className="container">
        <Div className="row">
          {/* <Div className="col-lg-12"> */}
          {postData.map((item, index) => (
            <Div className="col-lg-3" key={index}>
              <ProjectCategoryCard
                cardImage={item.thumb}
                title={item.title}
                href={item.href}
              />
              {/* {postData.length > index + 1 && <Spacing lg="95" md="60" />} */}
            </Div>
          ))}
          {/* <Spacing lg="60" md="40" /> */}
          {/* </Div> */}
        </Div>
      </Div>
      <Spacing lg="90" md="60" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Contac Us"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      <Spacing lg="90" md="60" />
    </>
  );
}
