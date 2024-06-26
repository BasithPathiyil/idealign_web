import React from "react";
import parse from "html-react-parser";
import "./hero.scss";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";

export default function Hero14({
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
      className="cs-hero cs-style5 cs_type_1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      // style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container" style={{ zIndex: 10 }}>
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
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
      <video autoPlay loop muted playsInline>
        <source src={"video/video-2.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Div>
  );
}
