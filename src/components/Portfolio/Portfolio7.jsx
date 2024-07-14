import React, { useState } from "react";
import Button2 from "../Button/Button2";
import Div from "../Div";
import Spacing from "../Spacing";
import { useNavigate } from "react-router-dom";

export default function Portfolio7({
  title,
  subtitle,
  place,
  area,
  btnText,
  btnLink,
  imageUrl,
  category,
}) {
    const navigate=useNavigate()
  const [hovered, setHovered] = useState(false);
    const handleClick=()=>{
        navigate(btnLink)
    }
  return (
    <Div className="cs-portfolio cs-style24">
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-lg-12">
            <Div
              className={
                hovered ? "cs-portfolio_img active" : "cs-portfolio_img"
              }
              onClick={handleClick}
            >
              <Div className="cs-gradient_overlay">
                <Div className="cs-text_container">
                  <h3 className="cs-portfolio_img_title cs-white_color">
                    {title}
                  </h3>
                  <h3 className="cs-portfolio_img_title cs-white_color">
                    {place}
                  </h3>
                  <h3 className="cs-portfolio_img_title cs-white_color">
                    Area : {area}
                  </h3>
                  <p className="cs-portfolio_img_subtitle ">
                    {subtitle}
                  </p>
                </Div>
              </Div>
              <img src={imageUrl} alt="Portfolio" className="cs-w100" />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
