import React, { useEffect } from "react";
import Card from "../Card";
import FunFact from "../FunFact";
import Hero13 from "../Hero/Hero13";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
import TimelineSlider from "../Slider/TimelineSlider";
import { pageTitle } from "../../helper";
import HomeAboutUs from "../AboutUs/HomeAboutUs";
import HomeServiceList from "../ServiceList/HomeServiceList";
import PortfolioSlider2 from "../Slider/PortfolioSlider2";
import PortfolioSlider3 from "../Slider/PorfolioSlider3";
import SectionHeading2 from "../SectionHeading/SectionHeading2";
import Hero from "../Hero";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import HomeProjectFragment from "../Projects/HomeProjectFragment";
import PortfolioSlider4 from "../Slider/PortfolioSlider4";

// Hero Social Links
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

// FunFact Data
const funfaceData = [
  {
    title: "Work Hours",
    factNumber: "5796648",
    suffix: "",
  },
  {
    title: "Efficiency optimizing",
    factNumber: "53.61",
    suffix: "%",
  },
  {
    title: "Cost Saved",
    factNumber: "27700000",
    suffix: "₹",
  },
  {
    title: "Projects",
    factNumber: "838",
    suffix: "Cr+",
  },
];
// const portfolioData = [
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_1.jpeg",
//   },
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_2.jpeg",
//   },
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_0.jpg",
//   },
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_3.jpeg",
//   },
// ];
const portfolioData = [
  {
    title: "Lulu Tirur",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/projects/1 lulu tirur.jpg",
  },
  {
    title: "Gokulam Grand Hotel",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/projects/gokulam.jpg",
  },
  {
    title: "Lulu Tirur",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/projects/1 lulu tirur.jpg",
  },
  {
    title: "Gokulam Grand Hotel",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/projects/gokulam.jpg",
  },
];
export default function Home() {
  pageTitle("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useAxiosFetch("/stats", {});
  let newsCount = data?.result.newsCount;
  let projectCount = data?.result.projectCount;
  let blogsCount = data?.result.blogsCount;

  return (
    <>
      {/* Start Hero Section */}
      {/* <Hero13
        title="Let's Align <br/> Your Ideas"
        subtitle="Our efficient team of consultants, designers, architectures, engineers and project managers help to achieve your goals. Together we can align your ideas."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        // bgImageUrl="/images/slide_1_3-200x140.jpg"
        bgImageUrl="/images/bgImageideal2.jpg"
      /> */}
      <Hero
        title="Let's Align <br/> Your Ideas"
        subtitle="Our efficient team of consultants, designers, architects, engineers and project managers help to achieve your goals. Together we can align your ideas."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/bgImg1.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* About Us Section */}
      <Spacing lg="150" md="80" />
      <div className="container">
        <HomeAboutUs />
      </div>
      {/* About UsSection */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      {/* <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <HomeServiceList />
      </Div> */}
      {/* End Services Section */}

      {/* Start Service Section */}
      {/* <Spacing lg="150" md="80" /> */}
      <Div id="service">
        {/* <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div> */}
        <HomeServiceList />
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}

      {projectCount > 3 ? (
        <>
          <Spacing lg="150" md="50" />
          <Div>
            <Div className="container">
              <SectionHeading
                title="Projects to Explore"
                subtitle="Latest Projects"
                variant="cs-style1 text-center"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <PortfolioSlider4 />
          </Div>
        </>
      ) : null}

      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {newsCount > 0 ? (
        <>
          <Spacing lg="90" md="70" />
          <Div className="container">
            <SectionHeading
              title="News & Events"
              subtitle=""
              variant="cs-style1 text-center"
            />
            <Spacing lg="85" md="45" />
            <PortfolioSlider2 />
          </Div>
        </>
      ) : null}

      {/* Start Blog Section */}
      {blogsCount > 2 ? (
        <>
          <Spacing lg="150" md="80" />
          <Div className="cs-shape_wrap_4">
            <Div className="cs-shape_4"></Div>
            <Div className="cs-shape_4"></Div>
            <Div className="container">
              <Div className="row">
                <Div className="col-xl-4">
                  <SectionHeading2
                    title="Explore recent publication"
                    subtitle="Our Blog"
                    btnText="View More Blog"
                    btnLink="/blog"
                  />
                  <Spacing lg="90" md="45" />
                </Div>
                <Div className="col-xl-7 offset-xl-1">
                  <Div className="cs-half_of_full_width">
                    <PostSlider />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </>
      ) : null}

      <Spacing lg="150" md="80" />
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" /> */}
      <MovingText text="Our reputed world wide clients " />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="105" md="70" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      {/* <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
      {/* End CTA Section */}
    </>
  );
}
