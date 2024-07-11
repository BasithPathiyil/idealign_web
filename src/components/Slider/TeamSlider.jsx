import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Slider from "react-slick";
import Div from "../Div";
import Team from "../Team";
import TeamMemberModal from "../Team/TeamMemberModal";
import { teamData } from "../Team/teamdata";


export default function TeamSlider() {
  /** Team Member Data **/

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          // dots: true,
          // arrows: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          // dots: true,
          // arrows: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
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
    <>
      <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
        {teamData?.map((item, index) => (
          <Div
            className="pointer"
            key={index}
            onClick={() => handleCardClick(item)}
          >
            <Team
              memberImage={item.memberImage}
              memberName={item.memberName}
              memberDesignation={item.memberDesignation}
              // memberSocial={item.memberSocial}
              memberSocial={{}}
            />
          </Div>
        ))}
      </Slider>
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
