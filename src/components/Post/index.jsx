import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./post.scss";

export default function Post({ url, src, alt, date, title }) {
  return (
    <Div className="cs-post cs-style1">
      <Link to={url} className="cs-post_thumb">
        <img src={src} alt={alt} style={{ height: "381px" }} />
        <Div className="cs-post_overlay" />
      </Link>
      <Div className="cs-post_info">
        <Div className="cs-posted_by cs-white_color">{date}</Div>
        <h2 className="cs-post_title cs-white_color">
          <Link to={url}>{title}</Link>
        </h2>
      </Div>
    </Div>
  );
}
