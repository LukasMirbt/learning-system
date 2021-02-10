import React, { FunctionComponent, useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import { searchResultsState, searchTermState } from "../Search";
import VirtualizedList from "./VirtualizedList/VirtualizedList";
import Header from "./Header/Header";
import Typography from "@material-ui/core/Typography";
import { searchListHeadingLabel } from "./SearchListHeading";
import SearchListHeading from "./SearchListHeading";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchList: FunctionComponent = () => {
  const resetSearchTerm = useResetRecoilState(searchTermState);

  useEffect(() => {
    return () => {
      resetSearchTerm();
    };
  }, [resetSearchTerm]);

  return (
    <Container>
      <Header />
      <StyledSection aria-labelledby={searchListHeadingLabel}>
        <SearchListHeading />
        <ListContainer>
          <VirtualizedList />
        </ListContainer>
      </StyledSection>
    </Container>
  );
};

export default SearchList;
