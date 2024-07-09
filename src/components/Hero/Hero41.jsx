import React from "react";
import parse from "html-react-parser";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";
import { Icon } from "@iconify/react";

export default function Hero41({
  title,
  subtitle,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  phoneNumber,
  email,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-type1 text-center cs-fixed_bg"
      style={{ backgroundImage: "url(./images/hero_bg_2.jpeg)" }}
    >
      <Div className="container">
        <Div className="cs-hero_text">
          <h1
            style={{ color: "white" }}
            className="cs-white_color cs-hero_title "
          >
            {parse(title)}
          </h1>
          <Div className="cs-hero_info2 justify-content-center">
            <Div className="cs-hero_subtitle">
              <Div className="">
                <p>
                  <span>
                    <Icon icon="akar-icons:chevron-right" />
                  </span>
                  Understand the principles, stages, and workflow of
                  aconstruction project
                </p>
              </Div>
              <Div className="">
                <p>
                  <span>
                    <Icon icon="akar-icons:chevron-right" />
                  </span>
                  Learn to read, understand, and analyze Project documents.
                </p>
              </Div>
              <Div className="">
                <p>
                  <span>
                    <Icon icon="akar-icons:chevron-right" />
                  </span>
                  Understand roles &responsibilities of Project Engineers.
                </p>
              </Div>
              <Div className="">
                <p>
                  <span>
                    <Icon icon="akar-icons:chevron-right" />
                  </span>
                  Acquiring necessary skills and knowledge in Quantity
                  Surveying, construction planning &Sched uling and Contracts
                  Management.
                </p>
              </Div>
              <Div className="">
                <p>
                  <span>
                    <Icon icon="akar-icons:chevron-right" />
                  </span>
                  Application of Project Management Tools in prepar ing and
                  analyzing, project plan, schedules, project monitoring and
                  control.
                </p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
