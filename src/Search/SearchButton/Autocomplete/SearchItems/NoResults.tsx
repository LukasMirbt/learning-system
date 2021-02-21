import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { useRecoilValue } from "recoil";
import { searchResultsState, searchTermState } from "../../../Search";

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

type TextProps = TypographyProps<"p", { component: "p" }>;

const Text = styled(Typography)<TextProps>`
  font-size: 1rem;
`;

type BoldTextProps = TypographyProps<"span", { component: "span" }>;

const BoldText = styled(Typography)<BoldTextProps>`
  font-size: 1rem;
  font-weight: 500;
  word-break: break-all;
`;

const NoResults: FunctionComponent = () => {
  const searchTerm = useRecoilValue(searchTermState);

  const searchResults = useRecoilValue(searchResultsState);

  return searchResults.length === 0 && searchTerm !== "" ? (
    <Container>
      <Icon icon={faFlag} />
      <Text variant="h5" component="p">
        No results for{" "}
        <BoldText variant="h5" component="span">
          {searchTerm}
        </BoldText>
      </Text>
    </Container>
  ) : null;
};

export default NoResults;
