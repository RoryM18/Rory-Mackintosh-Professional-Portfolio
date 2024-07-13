import React from "react";
import Icon1 from "../../images/visual-studio-code.svg";
import Icon2 from "../../images/github-icon.svg";
import Icon3 from "../../images/docker-icon.svg";
import Icon4 from "../../images/sqlite.svg";
import Icon5 from "../../images/flask.svg";
import Icon6 from "../../images/react.svg";
import {
  ToolsContainer,
  ToolsH1,
  ToolsWrapper,
  ToolsCard,
  ToolsIcon,
  ToolsH2,
  ToolsP,
} from "./ToolsElements";

const tools = () => {
  return (
    <ToolsContainer>
      <ToolsH1>My Skills: Tools, Frameworks, And Libraries</ToolsH1>
      <ToolsWrapper>
        <ToolsCard>
          <ToolsIcon src={Icon1} />
          <ToolsH2>Visual Studio Code</ToolsH2>
          <ToolsP></ToolsP>
        </ToolsCard>
        <ToolsCard>
          <ToolsIcon src={Icon2} />
          <ToolsH2>Github</ToolsH2>
          <ToolsP></ToolsP>
        </ToolsCard>
        <ToolsCard>
          <ToolsIcon src={Icon3} />
          <ToolsH2>Docker</ToolsH2>
          <ToolsP></ToolsP>
        </ToolsCard>
        <ToolsCard>
          <ToolsIcon src={Icon4} />
          <ToolsH2>SQLite</ToolsH2>
          <ToolsP></ToolsP>
        </ToolsCard>
        <ToolsCard>
          <ToolsIcon src={Icon5} />
          <ToolsH2>Flask</ToolsH2>
          <ToolsP></ToolsP>
        </ToolsCard>
        <ToolsCard>
          <ToolsIcon src={Icon6} />
          <ToolsH2>React</ToolsH2>
          <ToolsP></ToolsP>
        </ToolsCard>
      </ToolsWrapper>
    </ToolsContainer>
  );
};

export default tools;
