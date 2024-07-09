import React from "react";
import { Icon } from "@iconify/react";
import "./courses.scss";
import { Link } from "react-router-dom";
import Div from "../Div";

export default function AboutUsTeamCard({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
}) {
  return (
    <Div className="cs-style1">
      <Div className="cs-member_thumb">
        <img src={memberImage} alt={memberName} />
      </Div>
      <Div className="cs-member_info text-center">
        <h2 className="cs-member_name">
          <Link to="#">{memberName}</Link>
        </h2>
        <Div className="cs-member_designation">{memberDesignation}</Div>
        <Div className="cs-member_social">
          {memberSocial.linkedin && (
            <Link to={memberSocial.linkedin}>
              <Icon icon="fa6-brands:linkedin-in" />
            </Link>
          )}
          {memberSocial.twitter && (
            <Link to={memberSocial.twitter}>
              <Icon icon="fa-brands:twitter" />
            </Link>
          )}
          {memberSocial.youtube && (
            <Link to={memberSocial.youtube}>
              <Icon icon="fa-brands:youtube" />
            </Link>
          )}
          {memberSocial.facebook && (
            <Link to={memberSocial.facebook}>
              <Icon icon="fa-brands:facebook-f" />
            </Link>
          )}
        </Div>
      </Div>
    </Div>
  );
}
