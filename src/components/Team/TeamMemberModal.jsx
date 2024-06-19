import React from "react";
// Adjust the import path based on your project structure
import "./team.scss";
import { Icon } from "@iconify/react";
import Div from "../Div";

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
              <img src={member.memberImage} alt={member.memberName} />
              <p>
                <strong>Role:</strong> {member.memberDesignation}
              </p>
            </Div>
            <Div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
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
