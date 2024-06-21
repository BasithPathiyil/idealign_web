import React from "react";
import parse from "html-react-parser";
import "./hero.scss";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";
import WaterWave from "react-water-wave";

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
      className="cs-hero_7_wrap"
      //   style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-hero cs-style5 cs_type_1">
        <video autoPlay loop muted playsInline>
          <source src={"video/video-3.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_subtitle">{subtitle}</Div>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
          </Div>
        </Div>

        <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
        <a href={scrollDownId} className="cs-down_btn">
          .
        </a>
      </Div>
    </Div>
  );
}
