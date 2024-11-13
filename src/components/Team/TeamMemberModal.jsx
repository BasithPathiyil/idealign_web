import React from "react";
// Adjust the import path based on your project structure
import "./team.scss";
import { Icon } from "@iconify/react";
import Div from "../Div";

import parse from "html-react-parser";
import { Constants } from "../../utils/constants";

export default function TeamMemberModal({ member, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Div className="modal-overlay" onClick={onClose}>
      <Div
        style={{ backgroundColor: "#fff" }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <Div className="modal-header">
          <h2>{member.memberName}</h2>
          <span className="close-button" onClick={onClose}>
            ×
          </span>
        </Div>
        <Div className="modal-body">
          <Div className="row">
            <Div className="col-lg-4">
              <img
                src={`${Constants.imagebase}${member.mainImage}`}
                alt={member.memberName}
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "0px -30px",
                }}
              />
              <p>
                <strong>Role:</strong> {member.memberDesignation}
              </p>
            </Div>
            <Div className="col-lg-8">
              <p>
                {member?.description
                  ? parse(member?.description)
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}
              </p>
            </Div>
          </Div>

          <Div className="social-links">
            {/* {member?.social?.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa6-brands:linkedin-in" />
              </a>
            )}
            {member?.social.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands:twitter" />
              </a>
            )}
            {member.social.youtube && (
              <a href={member.social.youtube} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands:youtube" />
              </a>
            )}
            {member.social.facebook && (
              <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands:facebook-f" />
              </a>
            )} */}
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
