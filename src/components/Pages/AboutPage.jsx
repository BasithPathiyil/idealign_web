import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import FunFact from "../FunFact";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import HomeAboutUs from "../AboutUs/HomeAboutUs";
import AboutUsTeam from "../Team/AboutUsTeam";
import About from "../AboutUs/About";
import Leadership from "../AboutUs/Leadership";
import Approach from "../AboutUs/Approach";
import StepsComponent from "../AboutUs/StepsComponent";
import PageHeading from "../PageHeading";
// const funfaceData = [
//   {
//     title: "Work Hours",
//     factNumber: "5796648",
//     suffix: "",
//   },
//   {
//     title: "Sq.Ft. total Buildup Area",
//     factNumber: "5667357",
//     suffix: "",
//   },
//   {
//     title: "Cost Saved",
//     factNumber: "27700000",
//     suffix: "₹",
//   },
//   {
//     title: "Valued Projects",
//     factNumber: "2838",
//     suffix: "Cr+",
//   },
// ];
const funfaceData = [
  {
    title: "Work Hours",
    factNumber: "5796648",
    // factNumber: "57",
    suffix: "",
  },
  {
    title: "Sq.Ft. total Buildup Area",
    factNumber: "5667357",
    // factNumber: "56",
    suffix: "",
  },
  {
    title: "Cost Saved",
    factNumber: "27700000",
    // factNumber: "277",
    suffix: "₹",
  },
  {
    title: "Valued Projects",
    factNumber: "2838",
    suffix: "Cr+",
  },
];
export default function AboutPage() {
  pageTitle("About");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/1.jpg"
        pageLinkText="About Us"
        accent={true}
      />
      <Spacing lg="90" md="90" />
      <Spacing lg="90" md="90" />
      <Div
        className="container justify-content-center"
        style={{ display: "flex" }}
      >
        <About />
      </Div>
      {/* <Div className="cs-hero_info2 justify-content-center">
        <About />
      </Div> */}
      {/* <Hero3
        title={`About Us`}
        btnLink="contact"
        btnText={""}
        socialLinksHeading=" "
        bgImageUrl="./images/aboutus/bgimg.jpg"
      /> */}
      {/* <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      /> */}
      {/* End Page Heading Section */}

      {/* Start About Section */}
      {/* <Spacing lg="30" md="20" /> */}
      {/* <Hero42
        title="Course Deliverables"
        subtitle="Idealign Academy For Construction Mangement"
        scrollDownId="#service"
        socialLinksHeading=" "
        // heroSocialLinks={heroSocialLinks}
        phoneNumber=""
        email=""
      /> */}
      {/* <Div className="approach_lap">
        <Spacing lg="150" md="80" />
        <Div className="container">
          <StepsComponent />
        </Div>
      </Div> */}
      <Div className="">
        <Spacing lg="150" md="80" />
        <Approach />
      </Div>

      {/* <Div className="container">
        {" "}
        <Div className="container">
          {" "}
          <About />
        </Div>
      </Div> */}

      <Spacing lg="150" md="80" />
      {/* <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div> */}
      <Div className="container">
        <HomeAboutUs />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}
      <Spacing lg="150" md="80" />
      <Leadership />

      {/* Start Why Choose Section */}
      {/* <Spacing lg="50" md="30" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly experienced pepole with us"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div> */}
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="50" md="30" />
      <Div className="container">
        <SectionHeading
          title="Team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        {/* <TeamSlider /> */}
        <AboutUsTeam />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start CTA Section */}
      {/* <Spacing lg="150" md="80" /> */}
    </>
  );
}
