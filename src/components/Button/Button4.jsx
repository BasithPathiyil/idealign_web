import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Button4({ btnLink, btnText, variant, icon }) {
  return (
    <Link
      to={btnLink}
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
      style={{ color: "#191E46" }}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
}
