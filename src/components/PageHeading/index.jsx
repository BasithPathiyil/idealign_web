import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";

export default function PageHeading({
  title,
  bgSrc,
  pageLinkText,
  accent,
  bgPosition,
}) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundPosition: bgPosition ? bgPosition : "",
      }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          {accent ? (
            <h1 className="cs-page_title cs-font_50 cs-accent_color">
              {title}
            </h1>
          ) : (
            <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          )}
        </Div>
      </Div>
    </Div>
  );
}
