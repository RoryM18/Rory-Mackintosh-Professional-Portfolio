import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
`;

export const PortfolioWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PortfolioIcon = styled.img`
  height: 140px;
  width: 140px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 120px;
    width: 120px;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
    width: 100px;
  }
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #010606;
  }
`;
