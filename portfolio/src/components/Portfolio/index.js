import React from "react";
import Icon1 from "../../images/svg-1.svg";
import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH1,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioH1>The Portfolio Of Rory Mackintosh</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioP>I made a portfolio website</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioP>I made a portfolio website</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioP>I made a portfolio website</PortfolioP>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
