import React from "react";
import "./stepscomponent.scss";
import { Icon } from "@iconify/react";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

const StepsComponent = () => {
  return (
    <Div>
      <SectionHeading
        title={"Approach"}
        subtitle={""}
        variant={"cs-style1 text-center"}
      />
      <Spacing lg="30" md="20" />
      <Div className="steps-container">
        <div className="step">
          <div className="flexjustifycentre icon-container">
            <Icon icon="fa6-solid:handshake" width={"48px"} height={"40px"} />
          </div>
          <div className="flexjustifycentre">
            <h4>Initiation</h4>
          </div>

          <div>
            <p className="contentstep">
              Our process starts with understanding the project overview,
              objectives, and stakeholder perspectives. We then assign a team
              skilled in delivering flawless results.
            </p>
          </div>
        </div>

        <div className="line-arrow">
          <div className="line"></div>
          <div className="arrow">
            <Icon icon="akar-icons:chevron-right" />
          </div>
        </div>
        <div className="step">
          <div className="flexjustifycentre icon-container">
            <Icon
              icon="arcticons:geogebra-geometry"
              width={"48px"}
              height={"40px"}
            />
          </div>
          <div className="flexjustifycentre">
            <h4>Planning</h4>
          </div>

          <div>
            <p className="contentstep">
              We create a detailed project strategy by outlining the scope,
              allocating resources, budgeting, scheduling, evaluating risks, and
              setting quality standards.
            </p>
          </div>
        </div>

        <div className="line-arrow">
          <div className="line"></div>
          <div className="arrow">
            <Icon icon="akar-icons:chevron-right" />
          </div>
        </div>
        <div className="step">
          <div className="flexjustifycentre icon-container">
            <Icon
              icon="fluent:hat-graduation-sparkle-24-filled"
              width={"48px"}
              height={"40px"}
            />
          </div>
          <div className="flexjustifycentre">
            <h4>Execution</h4>
          </div>

          <div>
            <p className="contentstep">
              Executing the project plan involves initiating construction
              activities, supervising resource allocation, and emphasizing
              safety and quality standards.
            </p>
          </div>
        </div>

        <div className="line-arrow">
          <div className="line"></div>
          <div className="arrow">
            <Icon icon="akar-icons:chevron-right" />
          </div>
        </div>
        <div className="step">
          <div className="flexjustifycentre icon-container">
            <Icon
              className="iconclass"
              icon="eos-icons:monitoring"
              width={"48px"}
              height={"40px"}
            />
          </div>
          <div className="flexjustifycentre text-center">
            <h4>Monitoring & Controlling</h4>
          </div>

          <div>
            <p className="contentstep">
              Effective project oversight involves monitoring progress,
              addressing challenges quickly, managing adjustments, controlling
              costs, and mitigating risks to keep the project on track.
            </p>
          </div>
        </div>
        <div className="line-arrow">
          <div className="line"></div>
          <div className="arrow">
            <Icon icon="akar-icons:chevron-right" />
          </div>
        </div>
        <div className="step">
          <div className="flexjustifycentre icon-container">
            <Icon icon="fa6-solid:house-flag" width={"48px"} height={"40px"} />
          </div>
          <div className="flexjustifycentre">
            <h4>Closure</h4>
          </div>

          <div>
            <p className="contentstep">
              We prioritize securing client approval, consolidating project
              documentation, and finalizing financial details to ensure a smooth
              project handover.
            </p>
          </div>
        </div>
      </Div>
    </Div>
  );
};

export default StepsComponent;
