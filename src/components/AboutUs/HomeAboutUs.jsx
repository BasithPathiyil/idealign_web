import React from "react";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

const HomeAboutUs = () => {
  return (
    <Div className="container">
      <Div className="row">
        <Div className="col-xl-5 col-lg-7">
          <SectionHeading title="About Idealign" subtitle="">
            <Spacing lg="30" md="20" />
            <p className="cs-m0" style={{ textAlign: "justify" }}>
              A construction project is considered successful if it is completed
              on schedule, within budget, and with the needed quality. The best
              commercial management strategies strike a balance between these
              forces and the company's longer-term business plan.
            </p>
            <Spacing lg="30" md="30" />
            <p className="cs-m0" style={{ textAlign: "justify" }}>
              Idealign provides construction services that guarantee quality and
              cost savings while limiting client risk and streamlining
              communication among project stakeholders. The company is supported
              by a multi-discipline staff of engineers, planners, and project
              managers. Our extensive engineering resources enable us to
              effortlessly deliver projects to clients on time and within budget
              by acting as a one-stop shop for the client and a quick resource
              for the project manager on the ground.
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
        {/* <Div>
          <img src="images/aboutusapproach.png" alt="nn" />
        </Div> */}
      </Div>
    </Div>
  );
};

export default HomeAboutUs;
