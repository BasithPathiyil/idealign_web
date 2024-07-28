import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Card from "../Card";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import PricingTableList from "../PricingTable/PricingTableList";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";
import Hero3 from "../Hero/Hero3";
import ServiceCard from "../ServiceList/ServiceCard";
import { services } from "../ServiceList/servicedata";

export default function ServicesPage() {
  pageTitle("Service");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Spacing lg="90" md="60" />
      <Hero3
        title={`Services`}
        btnLink="contact"
        btnText={""}
        socialLinksHeading=" "
        bgImageUrl="./images/aboutus/servicebg.jpg"
      />

      {/* <Spacing lg="90" md="60" /> */}
      <Div className="cs-shape_wrap_41">
        {/* <Div className="cs-shape_4"></Div> */}
        {/* <Div className="cs-shape_4"></Div> */}
        <Div className="container">
          <Div className="row">
            <h2 className="cs-accordian_title">
              Idealign specializes in delivering tailor-made, end-to-end
              holistic project management solutions designed for the entire life
              cycle of real estate and construction projects. Our commitment is
              to empower clients with innovative solutions, ensuring timely
              project delivery, adherence to budget constraints, and the highest
              quality standards.
            </h2>
            <Spacing lg="150" md="80" />
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
              />
              <Spacing lg="90" md="45" />
            </Div>

            <Div className="col-xl-8">
              <Div className="row">
                {services.map((service, index) => (
                  <React.Fragment key={service.link}>
                    {(index % 4 === 0 || index % 4 === 1) && (
                      <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                    )}
                    <Div className="col-lg-3 col-sm-6">
                      <ServiceCard data={service} />
                      <Spacing lg="0" md="30" />
                    </Div>
                    {(index % 4 === 2 || index % 4 === 3) && (
                      <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                    )}
                  </React.Fragment>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="If you have <br />any project in mind"
          btnText="Enquire Now"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      <Spacing lg="90" md="60" />
    </>
  );
}
