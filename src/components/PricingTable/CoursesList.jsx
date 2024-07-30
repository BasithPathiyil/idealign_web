import React from "react";
import { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";
import PricingCourseCard from "./PricingCourseCard";
import CustomDelayAnimation from "../framer/CustomDelayAnimation";

const teamData = [
  {
    memberImage: "/images/services/designengineering.jpg",
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
    memberImage: "/images/services/projectcontrol.jpg",
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
    memberImage: "/images/services/costmanagement.jpg",
    memberName: "Project Engineering",
    memberDesignation:
      "This program is aimed to train the emerging graduates with the latest and best tools, techniques",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/services/claimmanagement.jpg",
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
      <Section className="row">
        {teamData?.map((item) => (
          <Section className="col-lg-3">
            <CustomDelayAnimation delayInSec={0.3} durInSec={1}>
              <PricingCourseCard
                title={item.memberName}
                timeline={item.memberDesignation}
                imageUrl={item.memberImage}
                btnText="Enroll Now"
                btnLink="/contact"
              />

              <Spacing lg="25" md="25" />
            </CustomDelayAnimation>
          </Section>
        ))}
      </Section>
    </Section>
  );
}
