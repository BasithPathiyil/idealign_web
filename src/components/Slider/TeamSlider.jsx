import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Slider from "react-slick";
import Div from "../Div";
import Team from "../Team";
import TeamMemberModal from "../Team/TeamMemberModal";
const teamData = [
  {
    memberImage: "/images/team/henna.jpg",
    memberName: "Henna",
    memberDesignation: "Product Designer",
    description:
      "holding a Bachelor's degree in Civil Engineering, has swiftly advanced in her career with a year of experience as a Quantity Surveyor and a subsequent role as Head of the Technical Department for one and a half years, focusing on technical drawings. Her initial role involved meticulous cost estimation, budgeting, and resource allocation, ensuring project completion within financial limits and timeframes. As Head of the Technical Department, Henna managed detailed technical drawings, led engineering teams, provided innovative solutions to complex challenges, and ensured high-quality standards across various projects. Her expertise spans residential, commercial, industrial, and hospitality sectors. Henna's ability to understand client visions and translate them into precise technical plans, combined with her leadership and technical acumen, makes her a valuable asset in the civil engineering field, consistently delivering high-quality and innovative results",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/team/mridhul.jpg",
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
    memberImage: "/images/team/nazih.jpg",
    memberName: "Nazih A Kabeer",
    memberDesignation: "React Developer",
    description:"an alumnus of NIT, has three years of experience as the Head of the Planning Department, where he excels in project scheduling and cash flow management from concept to completion. His meticulous oversight ensures timely completion and financial efficiency across diverse projects, including warehouses, 5-star hotels, and luxury residences. Nazih's strategic planning and proactive problem-solving skills make him a vital asset, delivering exceptional results and maintaining high standards in every project he manages.",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/team/fahad.jpg",
    memberName: "Ashiq Fahad",
    memberDesignation: "WP Developer",
    description:"is a seasoned professional in the field of civil engineering, having construction industry. His career journey began with four impactful years at IBLEC in Saudi Arabia, where he excelled as a Technical Engineer. During this tenure, Ashiq specialized in completed his B.Tech degree and amassed over 15 years of invaluable experience in the overseeing the intricate technical aspects of various construction projects, refining his skills in engineering design, project coordination, and the implementation of innovative technical solutions.Following his tenure at IBLEC, Ashiq transitioned to a pivotal role as a Planning Engineer at Al Muhaibid Six Construct, a prominent multinational company based in Saudi Arabia. Here, his responsibilities expanded to include developing meticulous project schedules, ensuring adherence to timelines, and meticulously managing project budgets. His strategic approach to planning and his adeptness in coordinating with diverse teams were crucial in successfully delivering high-profile projects such as the renowned King Abdullah Sports City and the prestigious King Salman International Convention Center.Ashiq's international project experience has equipped him with a deep understanding of global construction practices and standards, making him a sought-after professional in the industry. His leadership skills and ability to navigate complex project landscapes have consistently resulted in the achievement of project milestones with utmost efficiency and quality. Ashiq Fahad continues to play a pivotal role in shaping the landscape of international construction projects, setting benchmarks for excellence and innovation in every endeavor he undertakes.",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  // {
  //   memberImage: "/images/team/mridhul.jpg",
  //   memberName: "Harsha Basheer",
  //   memberDesignation: "Product Designer",
  //   memberSocial: {
  //     linkedin: "/",
  //     twitter: "/",
  //     youtube: "/",
  //     facebook: "/",
  //   },
  // },
  // {
  //   memberImage: "/images/team/henna.jpg",
  //   memberName: "Meghna P",
  //   memberDesignation: "Product Designer",
  //   memberSocial: {
  //     linkedin: "/",
  //     twitter: "/",
  //     youtube: "/",
  //     facebook: "/",
  //   },
  // },
  {
    memberImage: "/images/team/renjith.jpg",
    memberName: "Ranjith KT",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/team/athira.jpg",
    memberName: "Aathira Subramanyan K,",
    memberDesignation: "React Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/team/nahan.jpg",
    memberName: "Aysha Nahan",
    memberDesignation: "WP Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
];

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
    dots: false,
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
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
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
        {teamData.map((item, index) => (
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
