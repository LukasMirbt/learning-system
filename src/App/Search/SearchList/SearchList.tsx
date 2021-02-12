import React, { FunctionComponent, useEffect } from "react";
import { useResetRecoilState } from "recoil";
import styled from "styled-components";
import { searchTermState } from "../Search";
import VirtualizedList from "./VirtualizedList/VirtualizedList";
import Header from "./Header/Header";
import { searchListHeadingLabel } from "./SearchListHeading";
import SearchListHeading from "./SearchListHeading";
import Divider from "./VirtualizedList/Row/Divider";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
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
      <SearchListHeading />
      <Header />
      <StyledSection aria-labelledby={searchListHeadingLabel}>
        {/*      <Divider /> */}
        <ListContainer>
          <VirtualizedList />
        </ListContainer>
      </StyledSection>
    </Container>
  );
};

export default SearchList;
