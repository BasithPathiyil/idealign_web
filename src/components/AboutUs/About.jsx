import React from "react";
import SectionHeading from "../SectionHeading";
import Div from "../Div";
import IconCard from "./IconCard";
import "./about.scss";
import { Icon } from "@iconify/react";

let datas = [
  {
    title: "Ethics",
    subtitle: " We operate ethically and with integrity.",
    iconImg: (
      <Icon icon="ph:globe" width={"48px"} style={{ color: "#191E46" }} />
    ),
  },
  {
    title: "Collaboration",
    subtitle:
      " We believe the best ideas come when we connect and collaborate with the right industry experts.",
    iconImg: (
      <Icon
        icon="carbon:collaborate"
        width={"48px"}
        style={{ color: "#191E46" }}
      />
    ),
  },
  {
    title: "Communication",
    subtitle:
      "Our strength is our open communication that allows for a free flow of ideas and feedback.",
    iconImg: (
      <Icon
        icon="fluent:communication-person-20-regular"
        width={"48px"}
        style={{ color: "#191E46" }}
      />
    ),
  },
  {
    title: " Transparency",
    subtitle:
      "  We built Idealign through client trust, achievable only through transparency of data and information.",
    iconImg: (
      <Icon
        icon="heroicons-outline:cube-transparent"
        width={"48px"}
        style={{ color: "#191E46" }}
      />
    ),
  },
  {
    title: " Efficiency",
    subtitle:
      " We take action through relentless focus, operational excellence, and efficient project execution.",
    iconImg: (
      <Icon
        icon="mdi:hand-extended-outline"
        width={"48px"}
        style={{ color: "#191E46" }}
      />
    ),
  },
];

const About = () => {
  return (
    <Div className="about_main cs-hero_subtitle">
      <p className="cs-semi_bold cs-font_16 cs-accent_color">
        <span className="cs-bold">Our vision </span>
        is to develop an ecosystem of people, ideas, and technical expertise
        that will help clients turn their ambitions into action.
      </p>
      {/* <Div style={{display:"flex",justifyContent:"center"}}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Div style={{ width: "50%" }}>
          {datas?.map((item) => (
            <IconCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              iconImg={item?.iconImg}
            />
          ))}
        </Div>
      </div>
      {/* </Div> */}
    </Div>
  );
};

export default About;
