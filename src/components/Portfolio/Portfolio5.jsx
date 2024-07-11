import React, { useState } from "react";
import Button from "../Button";
import Div from "../Div";
import Spacing from "../Spacing";
import Button2 from "../Button/Button2";

export default function Portfolio5({
  title,
  subtitle,
  btnText,
  btnLink,
  imageUrl,
  category,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2 cs-type1">
      {/* <Div className="cs-gradient_shape" /> */}
      <Div className="container">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-xl-5 col-lg-6">
            <Spacing lg="0" md="35" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">{title}</h2>
              <p>{subtitle}</p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="45" md="20" />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Div
              className={
                hovered ? "cs-portfolio_img active" : "cs-portfolio_img"
              }
            >
              <Div className="cs-portfolio_img_in cs-shine_hover_1 cs-radius_5">
                <img
                  src={imageUrl}
                  alt="Portfolio"
                  className="cs-w100 leadershipimg"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
