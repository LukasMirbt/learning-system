import React, { FunctionComponent, useEffect } from "react";
import { useResetRecoilState } from "recoil";
import styled from "styled-components";
import { searchTermState } from "../Search";
import VirtualizedList from "./VirtualizedList/VirtualizedList";

const Container = styled.div`
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
      <VirtualizedList />
    </Container>
  );
};

export default Search;
