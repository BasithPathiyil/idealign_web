import React from "react";
import parse from "html-react-parser";
import "./hero.scss";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1 video-background1"
      // style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <video autoPlay loop muted playsInline>
        <source src={"video/video-2.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="gradient-overlay"></div>
      <div class="gradient-overlay2"></div>
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title" style={{ color: "white" }}>
            {parse(title)}
          </h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
