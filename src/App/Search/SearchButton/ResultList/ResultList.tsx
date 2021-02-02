import React, {
  FunctionComponent,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import Fuse from "fuse.js";
import NoResults from "./NoResults";
import EnterQuery from "./EnterQuery";
import Item from "./Item";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { isSearchOpenState } from "../SearchButton";
import {
  shouldSearchTermResetRefState,
  searchTermState,
  selectedItemIndexState,
  searchResultsState,
} from "../../Search";

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

const ResultList: FunctionComponent = () => {
  const searchTerm = useRecoilValue(searchTermState);
  const setSelectedItemIndex = useSetRecoilState(selectedItemIndexState);

  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);

  const searchResults = useRecoilValue(searchResultsState);

  const shouldSearchTermResetRef = useRecoilValue(
    shouldSearchTermResetRefState
  );

  console.log(searchResults);

  useEffect(() => {
    setSelectedItemIndex(0);
  }, [searchResults, setSelectedItemIndex]);
  return (
    <StyledList role="listbox">
      {searchResults
        ?.slice(0, numberOfResultsToShow)
        .map(({ item, refIndex }, index) => {
          return (
            <Item
              key={refIndex}
              startTime={item.startTime}
              endTime={item.endTime}
              index={index}
              value={item.text}
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
