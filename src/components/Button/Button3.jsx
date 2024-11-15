import React from "react";
import { Icon } from "@iconify/react";

export default function Button3({ btnLink, btnText, variant, icon }) {
  return (
    <a
      href={btnLink}
      target="_blank"
      rel="noopener noreferrer"
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </a>
  );
}
