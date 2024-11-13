import React from "react";
import Div from "../Div";
import { Icon } from "@iconify/react";

const IconCard = ({
  title,
  subtitle,
  iconImg = <Icon icon="heroicons-outline:cube-transparent" width={"48px"} />,
}) => {
  return (
    <Div className="cs-vertical_middle" style={{ marginTop: "16px" }}>
      <Div style={{ marginRight: "16px" }}>
        {/* <Icon icon="akar-icons:chevron-right" /> */}
        {iconImg}
      </Div>
      <Div>
        <h2 className="cs-accent_color cs-abouttitle" style={{ margin: "0px" }}>
          {title}
        </h2>
        <p className="cs-aboutsubtitle cs-accent_color">{subtitle}</p>
      </Div>
    </Div>
  );
};

export default IconCard;
