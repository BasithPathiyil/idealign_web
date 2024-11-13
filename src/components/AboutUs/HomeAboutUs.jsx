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
              At <span className="cs-bold">Idealign </span>, we are committed to
              redefining industry norms in construction management. We
              understand that a successful project is one that is delivered on
              time, within budget, and with unwavering commitment to quality.
              Our approach to commercial management is aligned with your
              long-term vision and aspirations.
            </p>
            <Spacing lg="30" md="30" />
            <p className="cs-m0" style={{ textAlign: "justify" }}>
              Our approach guarantees quality, cost efficiency, minimal risk and
              enhanced communication between all stakeholders. Supported by a
              multidisciplinary team of engineers and project managers, we bring
              the expertise and resources necessary to keep your project on
              schedule and budget.
            </p>
            <Spacing lg="30" md="30" />
            {/* <Div className="cs-separator cs-accent_bg"></Div> */}
            <Spacing lg="25" md="40" />
          </SectionHeading>
        </Div>
        <Div className="col-lg-5 offset-xl-2" style={{ display: "flex" }}>
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
