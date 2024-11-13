import React from "react";
import parse from "html-react-parser";
import Button from "../Button";
import Spacing from "../Spacing";
import Div from "../Div";
import Button2 from "../Button/Button2";

export default function SectionHeading3({
  title,
  subtitle,
  btnLink,
  btnText,
  variant,
  children,
}) {
  return (
    <Div
      className={
        variant
          ? `cs-section_heading ${variant}`
          : `cs-section_heading cs-style1`
      }
    >
      <h2 className="cs-section_title cs-accent_color" style={{textAlign:"left",fontSize:"64px"}}>{parse(title)}</h2>
      {children}
      {btnText && (
        <Div style={{ marginLeft: "120px" }}>
          <Spacing lg="25" md="10" />
          <Button2 btnLink={btnLink} btnText={btnText} />
        </Div>
      )}
    </Div>
  );
}
