import React from "react";
import Div from "../Div";
import "./about.scss";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

const Approach = () => {
  return (
    <Div>
      <SectionHeading
        title={"Approach"}
        subtitle={""}
        variant={"cs-style1 text-center"}
      />
      <Spacing lg="30" md="20" />
      <Div className="approach_main">
        <Div className="approach_submain">
          <img src="images/aboutus/LINE.png" alt="s" className="curve" />
          <Div className="vector_groups">
            <img
              src="images/aboutus/Vector Smart Object-24.png"
              alt="hand"
              className="line-image image1"
            />
            <img
              src="images/aboutus/Vector Smart Object-26.png"
              alt="hand"
              className="line-image image2"
            />
            <img
              src="images/aboutus/Vector Smart Object-27.png"
              alt="hand"
              className="line-image image3"
            />
            <img
              src="images/aboutus/Vector Smart Object-28.png"
              alt="hand"
              className="line-image image4"
            />

            <img
              src="images/aboutus/Vector Smart Object-25.png"
              alt="hand"
              className="line-image image5"
            />
            <img
              src="images/aboutus/Vector Smart Object-23.png"
              alt="hand"
              className="line-image image6"
            />
            <Div className="line-content content1">
              <h5 style={{ margin: "0px" }}>Initiation</h5>
              <p className="approachcontent">
                Our process starts with understanding the project overview,
                objectives, and stakeholder perspectives. We then assign a team
                skilled in delivering flawless results.
              </p>
            </Div>
            <Div className="line-content content2">
              <h5 style={{ margin: "0px" }}>Planning</h5>
              <p className="approachcontent">
                We create a detailed project strategy by outlining the scope,
                allocating resources, budgeting, scheduling, evaluating risks,
                and setting quality standards.
              </p>
            </Div>
            <Div className="line-content content3">
              <h5 style={{ margin: "0px" }}>Execution</h5>
              <p className="approachcontent">
                Executing the project plan involves initiating construction
                activities, supervising resource allocation, and emphasizing
                safety and quality standards.
              </p>
            </Div>
            <Div className="line-content content4">
              <h5 style={{ margin: "0px" }}>Monitoring & Controlling</h5>
              <p className="approachcontent">
                Effective project oversight involves monitoring progress,
                addressing challenges quickly, managing adjustments, controlling
                costs, and mitigating risks to keep the project on track.
              </p>
            </Div>
            <Div className="line-content content5">
              <h5 style={{ margin: "0px" }}>Closure</h5>
              <p className="approachcontent">
                We prioritize securing client approval, consolidating project
                documentation, and finalizing financial details to ensure a
                smooth project handover.
              </p>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Approach;
