import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../../Search";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

type ContainerProps = TypographyProps<"span", { component: "span" }>;

const Container = styled(Typography)<ContainerProps>`
  margin-top: 0.5rem;
`;

const NumberOfResults: FunctionComponent = () => {
  const searchResults = useRecoilValue(searchResultsState);

  return (
    <Container
      variant="subtitle1"
      component="span"
    >{`${searchResults.length} results`}</Container>
  );
};

export default NumberOfResults;
