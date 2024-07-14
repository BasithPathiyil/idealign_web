import React from "react";
import { Icon } from "@iconify/react";
import "./projectscategory.scss";
import { Link } from "react-router-dom";
import Div from "../Div";

export default function ProjectCategoryCard({
  cardImage,
  title,
  href,
  memberSocial = {},
}) {
  return (
    <Div className="cs-team cs-style11">
      <Link to={href} className="">
        <Div className="cs-member_thumb1">
          <img src={cardImage} alt={title} />
          <Div className="cs-member_overlay" />
        </Div>
        <Div className="cs-member_info">
          <h2 className="cs-member_name cs-white_color">
            <Link to={href}>{title}</Link>
          </h2>
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
      </Link>
    </Div>
  );
}
