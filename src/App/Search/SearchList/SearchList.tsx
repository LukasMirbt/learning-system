import React, { FunctionComponent, useEffect } from "react";
import { useResetRecoilState } from "recoil";
import styled from "styled-components";
import { searchTermState } from "../Search";
import VirtualizedList from "./VirtualizedList/VirtualizedList";
import Header from "./Header/Header";

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

const Search: FunctionComponent = () => {
  const resetSearchTerm = useResetRecoilState(searchTermState);

  useEffect(() => {
    return () => {
      resetSearchTerm();
    };
  }, [resetSearchTerm]);

  return (
    <Container>
      <Header />
      <ListContainer>
        <VirtualizedList />
      </ListContainer>
    </Container>
  );
};

export default Search;
