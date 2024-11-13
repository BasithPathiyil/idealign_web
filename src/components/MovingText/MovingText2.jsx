import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./movingtext.scss";

const partnerLogos = [
  {
    src: "/images/clientlogos/wyse ventures.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/lulu.png",
    alt: "Partner",
  },
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
  {
    src: "/images/clientlogos/Ramachandranlogo.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/gokulam.png",
    alt: "Partner",
  },
  {
    src: "/images/clientlogos/jeyachandran.png",
    alt: "Partner",
  },
  //jeyachandran
];

export default function MovingText2({ data, reverseDirection }) {
  return (
    <Div className="cs-moving_text_wrap cs-type1 cs-bold cs-primary_font">
      <Div className="cs-moving_text_in">
        <Div
          className={
            reverseDirection
              ? "cs-moving_text cs-reverse_animation"
              : "cs-moving_text"
          }
        >
          {partnerLogos.map((partnerLogo, index) => (
            <div className="cs-partner_logo" key={index}>
              <img
                style={{ objectFit: "contain" }}
                src={partnerLogo.src}
                alt={partnerLogo.alt}
              />
            </div>
          ))}
        </Div>
        <Div
          className={
            reverseDirection
              ? "cs-moving_text cs-reverse_animation"
              : "cs-moving_text"
          }
        >
          {partnerLogos.map((partnerLogo, index) => (
            <div className="cs-partner_logo" key={index}>
              <img
                style={{ objectFit: "contain" }}
                src={partnerLogo.src}
                alt={partnerLogo.alt}
              />
            </div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
