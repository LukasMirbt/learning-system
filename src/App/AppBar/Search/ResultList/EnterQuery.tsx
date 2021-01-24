import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextContainer = styled.div`
  color: rgba(0, 0, 0, 0.75);
  padding: 1rem 0;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WriteIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  padding-top: 0.25rem;
`;

const EnterQuery: FunctionComponent = () => {
  return (
    <TextContainer>
      Enter a query
      <WriteIcon icon={faFeather} />
    </TextContainer>
  );
};

export default EnterQuery;
