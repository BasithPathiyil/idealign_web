import React from "react";
import { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";
import PricingCourseCard from "./PricingCourseCard";
import CustomDelayAnimation from "../framer/CustomDelayAnimation";
import Portfolio8 from "../Portfolio/Portfolio8";
import { Constants } from "../../utils/constants";

const teamData = [
  {
    memberImage: "/images/training/courses1.jpg",
    memberName: "Introduction To Construction Management",
    memberDesignation: "Introduction To Construction Management content",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/training/quantity survey.jpg",
    memberName: "Quantity Surveying",
    memberDesignation:
      "Quantity Surveying is primarily centered on management of costs and budgets of construction projects.",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/training/courses2.jpg",
    memberName: "Project Engineering",
    memberDesignation:
      "This program is aimed to train the emerging graduates with the latest and best tools & techniques",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/training/planning.jpg",
    memberName: "Planning and Scheduling",
    memberDesignation:
      "Planning a project is 20% software application & 80% implementing proper planning & scheduling techniques.",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
];

export default function CoursesList() {
  const [tab, setTab] = useState("monthly");
  return (
    <Section className="position-relative">
      <Section className="row gridgap">
        {teamData?.map((item) => (
          <Section className="col-lg-12">
            <CustomDelayAnimation delayInSec={0.3} durInSec={1}>
              {/* <PricingCourseCard
                title={item.memberName}
                timeline={item.memberDesignation}
                imageUrl={item.memberImage}
                btnText="Enroll Now"
                btnLink="/contact"
              /> */}
              <Portfolio8
                title={item.memberName}
                subtitle={item.memberDesignation}
                imageUrl={item?.memberImage}
                btnText="Enroll Now"
                btnLink="https://iacm.in"
              />

              <Spacing lg="25" md="25" />
            </CustomDelayAnimation>
          </Section>
        ))}
      </Section>
    </Section>
  );
}
