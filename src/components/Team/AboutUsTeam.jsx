import React, { useState } from "react";
import AboutUsTeamCard from "./AboutUsTeamCard";
import Div from "../Div";
import TeamMemberModal from "./TeamMemberModal";

const teamData = [
  {
    memberImage: "/images/member_1.jpeg",
    memberName: "Henna Summaiya",
    memberDesignation: "Product Designer",
    description:"holding a Bachelor's degree in Civil Engineering, has swiftly advanced in her career with a year of experience as a Quantity Surveyor and a subsequent role as Head of the Technical Department for one and a half years, focusing on technical drawings. Her initial role involved meticulous cost estimation, budgeting, and resource allocation, ensuring project completion within financial limits and timeframes. As Head of the Technical Department, Henna managed detailed technical drawings, led engineering teams, provided innovative solutions to complex challenges, and ensured high-quality standards across various projects. Her expertise spans residential, commercial, industrial, and hospitality sectors. Henna's ability to understand client visions and translate them into precise technical plans, combined with her leadership and technical acumen, makes her a valuable asset in the civil engineering field, consistently delivering high-quality and innovative results",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Mridhul V",
    memberDesignation: "Product Designer",
    description:"with a Bachelor's degree in Civil Engineering, has nearly three years of experience as the Head of the Cost Department at our firm, where he led a team in procurement, quantity surveying, cost control, and billing. He has demonstrated exceptional leadership and expertise, ensuring seamless collaboration and efficient workflow across various departments. Mridhul's proficiency in managing procurement processes, implementing cost control measures, and overseeing billing has been pivotal in maintaining project budgets and timelines. He has rich experience in residential, commercial, industrial, and hospitality projects, working with renowned multinational companies such as AAK, Gokulam, AGS, ABC, and LULU. His versatile and effective management has significantly contributed to the success of these high-profile projects, making him an invaluable asset to our firm.",
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
