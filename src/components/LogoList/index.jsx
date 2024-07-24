import React from "react";
import Div from "../Div";
import "./logolist.scss";
const partnerLogos = [
  {
    src: "/images/clientlogos/ags.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/aak.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/abc.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/mihas.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/wisdom.png",
    alt: "Partner",
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img
            style={{ objectFit:"contain" }}
            src={partnerLogo.src}
            alt={partnerLogo.alt}
          />
        </div>
      ))}
    </Div>
  );
}
