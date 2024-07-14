import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Button from "../Button";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import api from "../../utils/api";
import { Constants } from "../../utils/constants";
import parse from "html-react-parser";

const FormattedText = ({ text }) => {
  const containsNewlines = (str) => /\r?\n/.test(str);

  if (!containsNewlines(text)) {
    // If there are no newlines, simply render the text in a single paragraph
    return <p>{text}</p>;
  }
  const paragraphs = text.split("/\r?\n\r?\n|\r?\n/"); // Split text into paragraphs

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p>
            {paragraph.split("\r\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          {index < paragraphs.length - 1 && <Spacing lg="40" md="20" />}
        </React.Fragment>
      ))}
    </div>
  );
};

function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getPathSegment(index) {
  try {
    const segments = window.location.pathname
      .split("/")
      .filter((segment) => segment.length > 0);
    return segments[index] || null;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}

export default function ProjectDetailsPage() {
  // const category = getPathSegment(1);
  const [searchParams] = useSearchParams();
  
  const type = searchParams.get("type");
  const category = searchParams.get("category");
  const { data, loading, error } = useAxiosFetch(
    type === "featured" ? `/projects/featured` : `/projects/${capitalizeFirstLetter(category)}/get`,
    {}
  );
  const projectsList = data?.arrList;
  const params = useParams();
  let projectData = projectsList?.find((project) => project._id === params.id);

  pageTitle("Portfolio Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      /> */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <img
          src={`${Constants.imagebase}${projectData?.mainImage}`}
          //   src="/images/portfolio_details_1.jpeg"
          alt="Details"
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={`${projectData?.projectName}`}
              subtitle={capitalizeFirstLetter(projectData?.categoryId)}
            >
              {/* <FormattedText text={projectData?.description} /> */}

              {projectData && projectData.description
                ? parse(projectData?.description)
                : ""}
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Category:
                </h3>
                <p className="cs-m0">Artwork</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Location:
                </h3>
                <p className="cs-m0">{projectData?.place}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Software:
                </h3>
                <p className="cs-m0">Adobe Illustrator</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Dated:
                </h3>
                <p className="cs-m0">14-Aug-2022</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Client:
                </h3>
                <p className="cs-m0">Andreo Bowla</p>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
        {/* <Div className="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Prev Project"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Next Project"
            />
          </Div>
        </Div> */}
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
