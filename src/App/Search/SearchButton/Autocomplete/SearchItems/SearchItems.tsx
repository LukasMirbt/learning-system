import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ViewAllResults from "./ViewAllResults";
import EnterQuery from "./EnterQuery";
import NoResults from "./NoResults";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

const SearchItems: FunctionComponent = () => {
  return (
    <Container>
      <EnterQuery />

      <NoResults />

      <ViewAllResults />
    </Container>
  );
};

export default SearchItems;
