import React, {
  FunctionComponent,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import Fuse from "fuse.js";
import {
  searchTermState,
  selectedItemIndexState,
  searchResultsState,
} from "../SearchItems";
import NoResults from "./NoResults";
import EnterQuery from "./EnterQuery";
import Item from "./Item";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { isSearchOpenState } from "../Search";
import { SearchableCue, SearchableHeading } from "../getSearchableItems";
import { shouldSearchTermResetRefState } from "../SearchItems";

export const numberOfResultsToShow = 5;

const StyledList = styled(List)`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 0;
  padding-bottom: 0;

  /*  box-shadow: ${({ theme }) => theme.shadows[1]}; */
`;

const ViewAllResults = styled(Link)`
  align-self: center;
  color: rgba(0, 0, 0, 0.75);
  font-size: 0.875rem;
  border-bottom: 1px solid;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.25rem;
`;

export const isCue = (
  searchable: SearchableCue | SearchableHeading
): searchable is SearchableCue => {
  return "startTime" in searchable;
};

const ResultList: FunctionComponent = () => {
  const searchTerm = useRecoilValue(searchTermState);
  const setSelectedItemIndex = useSetRecoilState(selectedItemIndexState);

  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);

  const searchResults = useRecoilValue(searchResultsState);

  const shouldSearchTermResetRef = useRecoilValue(
    shouldSearchTermResetRefState
  );

  useEffect(() => {
    setSelectedItemIndex(0);
  }, [searchResults, setSelectedItemIndex]);
  return (
    <StyledList role="listbox">
      {searchResults?.slice(0, numberOfResultsToShow).map(({ item }, index) => {
        return (
          <Item
            key={item.value}
            startTime={isCue(item) ? item.startTime : undefined}
            endTime={isCue(item) ? item.endTime : undefined}
            index={index}
            value={item.value}
            path={item.path}
          />
        );
      })}

      {searchResults.length > 5 && (
        <ViewAllResults
          onClick={() => {
            setIsSearchOpen(false);
            shouldSearchTermResetRef.value = true;
          }}
          to="/search"
        >{`View all ${searchResults.length} results`}</ViewAllResults>
      )}

      {searchTerm === "" && <EnterQuery />}

      {searchResults.length === 0 && searchTerm !== "" && (
        <NoResults searchTerm={searchTerm} />
      )}
    </StyledList>
  );
};

export default ResultList;
