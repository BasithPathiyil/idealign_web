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
    description:
      "with a Bachelor's degree in Civil Engineering, has nearly three years of experience as the Head of the Cost Department at our firm, where he led a team in procurement, quantity surveying, cost control, and billing. He has demonstrated exceptional leadership and expertise, ensuring seamless collaboration and efficient workflow across various departments. Mridhul's proficiency in managing procurement processes, implementing cost control measures, and overseeing billing has been pivotal in maintaining project budgets and timelines. He has rich experience in residential, commercial, industrial, and hospitality projects, working with renowned multinational companies such as AAK, Gokulam, AGS, ABC, and LULU. His versatile and effective management has significantly contributed to the success of these high-profile projects, making him an invaluable asset to our firm.",
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
    description:
      "an alumnus of NIT, has three years of experience as the Head of the Planning Department, where he excels in project scheduling and cash flow management from concept to completion. His meticulous oversight ensures timely completion and financial efficiency across diverse projects, including warehouses, 5-star hotels, and luxury residences. Nazih's strategic planning and proactive problem-solving skills make him a vital asset, delivering exceptional results and maintaining high standards in every project he manages.",
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
    description:
      "is a seasoned professional in the field of civil engineering, having construction industry. His career journey began with four impactful years at IBLEC in Saudi Arabia, where he excelled as a Technical Engineer. During this tenure, Ashiq specialized in completed his B.Tech degree and amassed over 15 years of invaluable experience in the overseeing the intricate technical aspects of various construction projects, refining his skills in engineering design, project coordination, and the implementation of innovative technical solutions.Following his tenure at IBLEC, Ashiq transitioned to a pivotal role as a Planning Engineer at Al Muhaibid Six Construct, a prominent multinational company based in Saudi Arabia. Here, his responsibilities expanded to include developing meticulous project schedules, ensuring adherence to timelines, and meticulously managing project budgets. His strategic approach to planning and his adeptness in coordinating with diverse teams were crucial in successfully delivering high-profile projects such as the renowned King Abdullah Sports City and the prestigious King Salman International Convention Center.Ashiq's international project experience has equipped him with a deep understanding of global construction practices and standards, making him a sought-after professional in the industry. His leadership skills and ability to navigate complex project landscapes have consistently resulted in the achievement of project milestones with utmost efficiency and quality. Ashiq Fahad continues to play a pivotal role in shaping the landscape of international construction projects, setting benchmarks for excellence and innovation in every endeavor he undertakes.",
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
    description:
      "is a highly accomplished civil engineer with a robust educational background and a wealth of practical experience across various facets of the construction industry. Beginning his career as a Site Engineer at Al Burj Builders, he gained hands-on experience in managing construction sites, ensuring adherence to project specifications, and overseeing day-to-day operations to maintain project timelines and quality standards. His career then took him to Nigeria, where he undertook a dual role as both a Site Engineer and Quantity Surveyor at On shore Constructors LLC for the prestigious Dangote Refinery project. This experience not only sharpened his technical skills in site management and engineering but also deepened his expertise in quantity surveying, where he was responsible for accurately estimating costs, managing budgets, and optimizing resources amidst the complexities of a major refinery construction.<br /> Returning to India, he served as a Quantity Surveyor at Anjali Constructors, where he played a pivotal role in various commercial and residential projects. His meticulous approach to cost estimation and financial management contributed significantly to the successful execution of these projects, demonstrating his ability to handle diverse project scopes and client requirements effectively.<br /> In Qatar, he further expanded his horizons as a Project Engineer at Grand Hyper, where he led project planning, coordination, and execution. His tenure in Qatar exposed him to international construction practices and standards, enhancing his global perspective and enriching his project management skills.<br /> Throughout his career journey, he has consistently exhibited a strong commitment to excellence, attention to detail, and adaptability in dynamic work environments. His multifaceted experience across different roles and regions underscores his versatility and capability to deliver results across complex construction projects, making him a valuable asset in the field of civil engineering and project management.",
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
    description:
      "holding a B.Tech in Civil Engineering, has contributed significantly to our firm for over a year in procurement roles. Her career began as a Quantity Surveyor at Assist Chartered Engineer, followed by roles at Lasa Steel Structure where she excelled in budget coordination, quantity surveying, and procurement. Transitioning to MapsGlobal Constructions Pvt. Ltd, Aathira's responsibilities expanded to include site engineering, procurement, and tendering. Her diverse expertise in cost estimation, financial management, and project execution underscores her valuable contributions to optimizing project efficiency and delivery within the construction industry.",
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
    description:
      "is a highly accomplished Technical Engineer at our company, bringing extensive academic credentials and practical experience in construction engineering. With a Master's degree in Construction Engineering and Management, complemented by a Bachelor's degree in Civil Engineering and a Diploma in Civil Engineering, Aysha possesses a robust foundation in engineering principles and technical expertise. Her internship stints at KLDC Trissur and TDLCCS Trissur provided her with invaluable hands-on experience in project planning and execution.<br /><br /> Aysha has demonstrated a strong commitment to sustainable development through her projects, including a proposal on slum rehabilitation and designs for a Civil Center and Municipal Shopping complex. Her leadership skills and passion for innovative design are further underscored by her achievement of winning the 1st prize in a Seminar competition at the State Institute of Technical Teacher Training and Research (SITTR). Aysha's combination of technical proficiency, creative vision, and dedication to sustainability makes her a valuable asset in advancing our company's construction initiatives.",
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
