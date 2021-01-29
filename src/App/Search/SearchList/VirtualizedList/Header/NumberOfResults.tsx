import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../../../SearchButton/SearchItems";
import Typography from "@material-ui/core/Typography";

const Container = styled(Typography)`
  margin-top: 0.5rem;
`;

const NumberOfResults: FunctionComponent = () => {
  const searchResults = useRecoilValue(searchResultsState);

  return (
    <Container variant="subtitle1">{`${searchResults.length} results`}</Container>
  );
};

export default NumberOfResults;
