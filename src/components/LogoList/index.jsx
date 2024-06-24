import React from "react";
import Div from "../Div";
import "./logolist.scss";
const partnerLogos = [
  {
    src: "/images/clientlogos/lulu.gif",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/aak.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/focuzayur.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/gokulam.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/aak.png",
    alt: "Partner",
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img
            style={{ width: "126px", height: "89px" }}
            src={partnerLogo.src}
            alt={partnerLogo.alt}
          />
        </div>
      ))}
    </Div>
  );
}
