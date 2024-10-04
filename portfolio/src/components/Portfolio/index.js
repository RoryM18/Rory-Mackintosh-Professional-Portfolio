import React from "react";
import Icon1 from "../../images/coding-icon-png-4.png";
import Icon2 from "../../images/GA.png";
import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH1,
  PortfolioH2,
  PortfolioP,
  NavBtn,
  NavBtnLink,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioH1>The Portfolio Of Rory Mackintosh</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioP>
            I designed and implemented a portfolio website using Javascript and
            the react framework.
          </PortfolioP>
          <NavBtn>
            <NavBtnLink
              to="https://github.com/RoryM18/Rory-Mackintosh-Professional-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              View Project
            </NavBtnLink>
          </NavBtn>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Icon2} />
          <PortfolioH2>Genetic Algorithm Digital Planner</PortfolioH2>
          <PortfolioP>
            Designed and developed during my final year of university. I
            developed a digital planner application in python that uses a
            genetic algorithm to optimise user scheduels.
          </PortfolioP>
          <NavBtn>
            <NavBtnLink
              to="https://github.com/RoryM18/Honours-Project-Genetic-Algorithm-Planner"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              View Project
            </NavBtnLink>
          </NavBtn>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioP>I made a portfolio website</PortfolioP>
          <NavBtn>
            <NavBtnLink
              to="https://github.com/RoryM18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              View Project
            </NavBtnLink>
          </NavBtn>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Portfolio Website</PortfolioH2>
          <PortfolioP>I made a portfolio website</PortfolioP>
          <NavBtn>
            <NavBtnLink
              to="https://github.com/RoryM18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              View Project
            </NavBtnLink>
          </NavBtn>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
