import React from "react";
import Div from "../Div";
import "./funfact.scss";
import Counter from "../Counter";

export default function FunFact({ variant, title, subtitle, data }) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : "cs-funfact_wrap"}>
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: "url(./images/funfact_shape_bg.svg)" }}
      />
      {/* <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading cs-white_color">
          <h2 className="cs-white_color">{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div> */}
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div className="cs-funfact_number cs-primary_font cs-bold cs-primary_color">
                <span />
                <Counter num={item.factNumber} suffix={item.suffix} />
              </Div>
              <Div className="cs-funfact_text cs-bold cs-white_color">
                <p>{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
