import React from "react";
import PortfolioSlider from "../Slider/PortfolioSlider";
import useAxiosFetch from "../../hooks/useAxiosFetch";

const HomeProjectFragment = ({ portfolioData }) => {
    const { data, loading, error } = useAxiosFetch("/projects/featured", {});
  return (
    <>
      <PortfolioSlider data={portfolioData} />
    </>
  );
};

export default HomeProjectFragment;
