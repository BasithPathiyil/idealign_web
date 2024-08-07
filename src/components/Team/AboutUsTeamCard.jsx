import React from "react";
import { Icon } from "@iconify/react";
import "./team.scss";
import { Link } from "react-router-dom";
import Div from "../Div";

export default function AboutUsTeamCard({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
  objPos,
}) {
  return (
    <Div className="cs-team cs-style1">
      <Div className="cs-member_thumb">
        <img
          src={memberImage}
          alt={memberName}
          style={{ objectPosition: `0-${objPos}px`,filter: 'grayscale(90%)' }}
        />
        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2 className="cs-member_name  cs-white_color">
          <Link to="#">{memberName}</Link>
        </h2>
        <Div className="cs-member_designation  cs-white_color">
          {memberDesignation}
        </Div>
      </Div>
      <Div className="cs-member_social cs-primary_color">
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
  );
}
