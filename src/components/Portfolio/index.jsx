import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./portfolio.scss";

export default function Portfolio({ href, src, title, subtitle, variant }) {
  return (
    <Link
      to={href}
      className={`cs-portfolio cs-bg ${variant ? variant : "cs-style1"}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")`, backgroundSize: "cover" }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title cs-white_color">{title}</h2>
          <Div className="cs-portfolio_subtitle cs-white_color">{subtitle}</Div>
        </Div>
      </>
    </Link>
  );
}
