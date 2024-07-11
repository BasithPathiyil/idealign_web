import React from "react";
import parse from "html-react-parser";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";
import { Icon } from "@iconify/react";
import About from "../AboutUs/About";

export default function Hero42({
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
      className="cs-hero cs-style1  cs-fixed_bg"
      style={{
        backgroundImage: "url(./images/hero_bg_2.jpeg)",
        padding: "40px 0px 0px 0px",
      }}
    >
      <Div className="container">
        <Div className="cs-hero_text ">
          <h1
            style={{ color: "white", margin: "0px" }}
            className="cs-white_color cs-hero_title21 text-center"
          >
            {parse("About Us")}
          </h1>
          <Div className="cs-hero_info2 justify-content-center">
            <About />
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
