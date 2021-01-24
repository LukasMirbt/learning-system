import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bold = styled.span`
  font-weight: 500;
  word-break: break-all;
`;

const Container = styled.div`
  color: rgba(0, 0, 0, 0.75);
  padding: 1rem 0;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0;
`;

const NoResults: FunctionComponent<{ searchTerm: string }> = ({
  searchTerm,
}) => {
  return (
    <Container>
      <Icon icon={faFlag} />
      <div>
        No results for <Bold>{searchTerm}</Bold>
      </div>
    </Container>
  );
};

export default NoResults;
