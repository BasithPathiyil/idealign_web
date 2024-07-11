import React, { useState } from "react";
import AboutUsTeamCard from "./AboutUsTeamCard";
import Div from "../Div";
import TeamMemberModal from "./TeamMemberModal";
import { teamData } from "./teamdata";


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
