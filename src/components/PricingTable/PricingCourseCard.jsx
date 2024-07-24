import React from "react";
import { Icon } from "@iconify/react";
import "./pricing.scss";
import Button from "../Button";
import Div from "../Div";

export default function PricingCourseCard({
  title,
  imageUrl,
  btnLink,
  btnText,
  timeline,
}) {
  return (
    <Div className="cs-pricing_table cs-style1">
      <h2
        className="cs-pricing_title cs-white_color"
        style={{ height: "200px" }}
      >
        {title}
      </h2>
      <Div className="cs-pricing_info">
        <Div className="cs-price">
          {/* <h3 className="cs-white_color">
            {currency}
            {price}/
          </h3>
          <span className="cs-accent_color">{timeline}</span> */}
        </Div>
        <Div
          className="cs-price_text cs-white_color"
          style={{ height: "150px" }}
        >
          {timeline}
        </Div>
      </Div>
      <Div></Div>
      <ul className="cs-pricing_feature cs-mp0">
        <Div>
          <img src={imageUrl} alt="s" style={{ height: "200px" }} />
        </Div>
      </ul>
      <Div className="cs-pricing_btn_wrap">
        <Button btnLink={btnLink} btnText={btnText} />
      </Div>
    </Div>
  );
}
