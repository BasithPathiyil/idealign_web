import React from "react";
import parse from "html-react-parser";
import "./cta.scss";
import Button from "../Button";
import Div from "../Div";
import Spacing from "../Spacing";
import Button4 from "../Button/Button4";

export default function Cta({ title, btnText, btnLink, bgSrc, variant }) {
  return (
    <Div
      className={`cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1 ${
        variant ? variant : ""
      }`}
      style={{
        backgroundImage: `url(${bgSrc})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the color and opacity as needed
          zIndex: 1,
        }}
      />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-cta_in">
        <h2 className="cs-cta_title cs-semi_bold cs-m0 cs-white_color">
          {parse(title)}
        </h2>
        {btnText && (
          <>
            <Spacing lg="70" md="30" />
            <Button btnLink={btnLink} btnText={btnText} />
          </>
        )}
      </Div>
    </Div>
  );
}
