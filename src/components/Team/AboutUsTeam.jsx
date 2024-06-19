import React, { useState } from "react";
import AboutUsTeamCard from "./AboutUsTeamCard";
import Div from "../Div";
import TeamMemberModal from "./TeamMemberModal";

const teamData = [
  {
    memberImage: "/images/member_1.jpeg",
    memberName: "Melon Bulgery",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Olinaz Fushi",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_3.jpeg",
    memberName: "David Elone",
    memberDesignation: "React Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_4.jpeg",
    memberName: "Melina Opole",
    memberDesignation: "WP Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_1.jpeg",
    memberName: "Melon Bulgery",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Olinaz Fushi",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_3.jpeg",
    memberName: "David Elone",
    memberDesignation: "React Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_4.jpeg",
    memberName: "Melina Opole",
    memberDesignation: "WP Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
];

const AboutUsTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleCardClick = (member) => {
      setSelectedMember(member);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedMember(null);
    };
  return (
    <Div className="row" style={{rowGap:"30px"}}>
      {teamData.map((item, index) => (
        <Div className="col-lg-3" key={index} onClick={() => handleCardClick(item)}>
          <AboutUsTeamCard
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            // memberSocial={item.memberSocial}
            memberSocial={{}}
          />
        </Div>
      ))}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Div>
  );
};

export default AboutUsTeam;
