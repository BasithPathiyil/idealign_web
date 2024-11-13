import React, { useState } from "react";
import AboutUsTeamCard from "./AboutUsTeamCard";
import Div from "../Div";
import TeamMemberModal from "./TeamMemberModal";
import { teamData } from "./teamdata";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { Constants } from "../../utils/constants";

const AboutUsTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, loading, error } = useAxiosFetch(`/teams/get`, {});

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  const teamDatas = data?.arrList;
  return (
    <Div className="row" style={{ rowGap: "30px" }}>
      {/* {teamData.map((item, index) => (
        <Div
          className="col-lg-3"
          key={index}
          onClick={() => handleCardClick(item)}
        >
          <AboutUsTeamCard
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            // memberSocial={item.memberSocial}
            memberSocial={{}}
            objPos={item.objectPositionValue}
          />
        </Div>
      ))}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )} */}
      {teamDatas &&
        teamDatas?.length > 0 &&
        teamDatas?.map((item, index) => (
          <Div
            className="col-lg-3"
            key={index}
            onClick={() => handleCardClick(item)}
          >
            <AboutUsTeamCard
              memberImage={`${Constants.imagebase}${item.mainImage}`}
              memberName={item.memberName}
              memberDesignation={item.memberDesignation}
              // memberSocial={item.memberSocial}
              memberSocial={{}}
              objPos={item.objectPositionValue}
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
