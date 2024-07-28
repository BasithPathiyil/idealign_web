import React, { useState } from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./servicelist.scss";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ServiceCard from "./ServiceCard";
import { services } from "./servicedata";
import CustomDelayAnimation from "../framer/CustomDelayAnimation";

export default function HomeServiceList({ variant }) {
  const [active, setActive] = useState(0);
  const handelActive = (index) => {
    setActive(index);
  };
  return (
    <>
      <Div className="cs-shape_wrap_4">
        {/* <Div className="cs-shape_4"></Div> */}
        {/* <Div className="cs-shape_4"></Div> */}
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <CustomDelayAnimation delayInSec={0.2} durInSec={1}>
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                />
              </CustomDelayAnimation>
              <Spacing lg="90" md="45" />
            </Div>

            <Div className="col-xl-8">
              <Div className="row">
                {services.map((service, index) => (
                  <React.Fragment key={service.link}>
                    {(index % 4 === 0 || index % 4 === 1) && (
                      <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                    )}
                    <Div className="col-lg-3 col-sm-6">
                      <CustomDelayAnimation delayInSec={0.2} durInSec={1}>
                        <ServiceCard data={service} />
                      </CustomDelayAnimation>
                      <Spacing lg="0" md="30" />
                    </Div>
                    {(index % 4 === 2 || index % 4 === 3) && (
                      <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                    )}
                  </React.Fragment>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
}
