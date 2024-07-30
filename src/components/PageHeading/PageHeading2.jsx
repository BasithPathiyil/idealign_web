import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import CustomDelayAnimation from "../framer/CustomDelayAnimation";

//cs-overlayiacm
export default function PageHeading2({ title, bgSrc, pageLinkText }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-overlayiacm"
      style={{ backgroundImage: `url(${bgSrc})`, backgroundSize: "cover" }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <CustomDelayAnimation delayInSec={0.5} durInSec={1}>
            <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item active">{pageLinkText}</li>
            </ol>
          </CustomDelayAnimation>
        </Div>
      </Div>
    </Div>
  );
}
