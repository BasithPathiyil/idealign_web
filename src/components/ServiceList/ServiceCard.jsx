import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./servicecard.scss";

export default function ServiceCard({ data }) {
  return (
    <Link to={data.link} className="cs-card cs-style1">
      <>
        <img src={data.src} alt={data.alt} />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h3 className="cs-card_title cs-white_color">{data.title}</h3>
        </Div>
      </>
    </Link>
  );
}
