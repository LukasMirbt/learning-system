import React, { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchResultsState, searchTermState } from "../Search";
import Typography from "@material-ui/core/Typography";

export const searchListHeadingLabel = "virtualizedListLabel";

const ListHeading = styled(Typography)`
  font-size: 3rem;
  width: 100%;
  max-width: 1217px;
  padding: 0 1rem;

  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Bold = styled.span`
  font-weight: 500;
`;

const SearchListHeading: FunctionComponent = () => {
  const searchTerm = useRecoilValue(searchTermState);
  const searchResults = useRecoilValue(searchResultsState);

  return (
    <ListHeading id={searchListHeadingLabel} variant="h1">
      {`Found ${searchResults.length} search results for `}
      <Bold>{`"${searchTerm}"`}</Bold>
    </ListHeading>
  );
};

export default SearchListHeading;
