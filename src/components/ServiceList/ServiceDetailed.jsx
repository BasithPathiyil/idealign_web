import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";
import Button from "../Button";
import Cta from "../Cta";
import IconBox from "../IconBox";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";
import { services } from "./servicedata";

export default function ServiceDetailed() {
  pageTitle("Service Details");
  const params = useParams();
  let serviceData = services?.find(
    (service) => service.id === params.serviceDetailsId
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <PageHeading 
        title='Service Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.serviceDetailsId}
      /> */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        {/* <SectionHeading
          title={`${serviceData.title}`}
          subtitle=""
          variant="cs-style1 text-center"
        /> */}
        <Div className="container">
          <Div className="row ">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src={serviceData.src}
                  alt="Member"
                  className="w-100"
                  style={{ height: "600px" }}
                />
              </Div>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Spacing lg="0" md="45" />
              <Div className="cs-section_heading cs-style1">
                <h2 className="cs-section_title">{`${serviceData.title}`}</h2>
                <Div className="cs-height_10 cs-height_lg_10" />
                {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
                <Div className="cs-height_5 cs-height_lg_5" />
                <Div className="cs-separator cs-accent_bg" />
                {serviceData?.additionalImg ? (
                  <>
                    <Div className="cs-height_45 cs-height_lg_25" />
                    <img
                      src={serviceData.additionalImg}
                      alt={serviceData.title}
                      style={{ width: "100%" }}
                    />
                  </>
                ) : null}
                <Div className="cs-height_45 cs-height_lg_25" />
                <p className="cs-m0">{serviceData.content}</p>
                <Div className="cs-height_25 cs-height_lg_20" />
                <p className="cs-m0">
                  Ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit.
                </p>
                <Div className="cs-height_25 cs-height_lg_20" />
                <p className="cs-m0">
                  Ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit.
                </p>
                <Div className="cs-height_45 cs-height_lg_30" />
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg="65" md="45" />
        {/* <ul>
          {serviceData?.lists.map((item, i) => (
            <>
              <Spacing lg="30" md="30" />
              <li>
                <span>{item.title}</span>
                <br />
                <span>{item.description}</span>
              </li>
            </>
          ))}
        </ul> */}
        {/* <Div className="row">
          {serviceData?.lists.map((item, i) => (
            <Div
              className={`col-lg-${
                serviceData?.lists.length === 3
                  ? "4"
                  : serviceData?.lists.length === 2 ||
                    serviceData?.lists.length === 4
                  ? "6"
                  : "12"
              }`}
            >
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title={item.title}
                subtitle={item.description}
              />
            </Div>
          ))}
        </Div> */}
      </Div>
      {/* <Spacing lg="120" md="50" /> */}
      {/* <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/service_img_1.jpeg"
                alt="Service"
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Below our most design related services
            </h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                <Button
                  btnLink="/service/service-details"
                  btnText="Web page design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="eCommerce design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Landing page"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Email template"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Application design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Illustration"
                  variant="cs-type2"
                />
                <Spacing lg="0" md="10" />
              </Div>
              <Div className="col-lg-6">
                <Button
                  btnLink="/service/service-details"
                  btnText="Infographic design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Mobile apps design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Banner, brochure, card"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Other design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* <Spacing lg="150" md="80" />
      <TestimonialSlider /> */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Some pre questions and answers"
                subtitle="FAQ’s"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
    </>
  );
}
