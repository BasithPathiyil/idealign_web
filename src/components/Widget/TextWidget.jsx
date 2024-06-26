import React from "react";
import Div from "../Div";

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      <img className="cs-text_widget_img" src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  );
}
