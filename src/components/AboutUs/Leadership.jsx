import React from "react";
import Div from "../Div";
import Portfolio2 from "../Portfolio/Portfolio2";
import Spacing from "../Spacing";
import Portfolio3 from "../Portfolio/Portfolio3";
import Portfolio5 from "../Portfolio/Portfolio5";
import Portfolio6 from "../Portfolio/Portfolio6";
import SectionHeading from "../SectionHeading";

const portfolioData = [
  {
    title: "Rabeeh",
    smallTitle: "MRICS",
    subtitle:
      " Rabeeh is focused on delivering outcomes against strong principles, strategic priorities, and operational systems. He is a chartered surveyor from the Royal Institution of Chartered Surveyors and holds a Master's degree in Construction Management from the University of Manchester.",
    btnText: "See Details",
    btnLink: "/portfolio/portfolio-details",
    imageUrl: "/images/aboutus/photo_rabeeh2.jpg",
    category: "",
  },
  {
    title: "Sahal Gafoor",
    subtitle:
      " In just a few years, Sahal has earned a reputation in the industry for his commitment and technical flair. Starting his career in hospitality construction management, he has gained project management adeptness in all sectors of the industry",
    btnText: "See Details",
    btnLink: "/portfolio/portfolio-details",
    imageUrl: "/images/aboutus/photo.png",
    category: "",
  },
];

const Leadership = () => {
  return (
    <Div className="container">
      <SectionHeading
        title={"Leadership"}
        subtitle={""}
        variant={"text-center"}
      />
      <Spacing lg="90" md={"60"} />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio6
              title={item.title}
              smallTitle={item?.smallTitle}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio5
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        )
      )}
    </Div>
  );
};

export default Leadership;
