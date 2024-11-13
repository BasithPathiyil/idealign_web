import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { color } from "framer-motion";

export default function Button({ btnLink, btnText, variant, icon }) {
  return (
    <Link
      to={btnLink}
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
}
