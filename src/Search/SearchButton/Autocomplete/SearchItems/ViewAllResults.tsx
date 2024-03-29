import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSearchOpenState } from "../../SearchButton";
import {
  searchResultsState,
  shouldSearchTermResetRefState,
} from "../../../Search";

export const searchListPath = "/search";

const StyledLink = styled(Link)`
  align-self: center;
  color: rgba(0, 0, 0, 0.75);
  font-size: 0.875rem;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  line-height: 1.25rem;
`;

const ViewAllResults: FunctionComponent = () => {
  const searchResults = useRecoilValue(searchResultsState);
  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);

  const shouldSearchTermResetRef = useRecoilValue(
    shouldSearchTermResetRefState
  );

  return searchResults !== null && searchResults.length > 5 ? (
    <StyledLink
      data-cy="viewAllResultsLink"
      onClick={() => {
        shouldSearchTermResetRef.current = false;
        setIsSearchOpen(false);
      }}
      to={searchListPath}
    >
      {`View all ${searchResults.length} results`}
    </StyledLink>
  ) : null;
};

export default ViewAllResults;
