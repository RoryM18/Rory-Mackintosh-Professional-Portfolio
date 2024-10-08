import styled from "styled-components";

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
`;

export const ToolsWrapper = styled.div`
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

export const ToolsCard = styled.div`
  background: silver;
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

export const ToolsIcon = styled.img`
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

export const ToolsH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ToolsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ToolsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
