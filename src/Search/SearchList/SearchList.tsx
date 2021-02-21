import React, { FunctionComponent, useEffect } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { searchTermState } from "../Search";
import VirtualizedList from "./VirtualizedList/VirtualizedList";
import Header from "./Header/Header";
import { searchListHeadingLabel } from "./SearchListHeading";
import SearchListHeading from "./SearchListHeading";
import { videoState } from "../../Video/VideoElement/useVideoState/useVideoState";

const Container = styled.section`
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.values["xl"]}px`}) {
      width: calc(100% - 241px);
    }
  `}

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

const SearchList: FunctionComponent = () => {
  const resetSearchTerm = useResetRecoilState(searchTermState);
  const setVideoState = useSetRecoilState(videoState);

  useEffect(() => {
    setVideoState({
      time: null,
      videoPathname: "",
    });
    return () => {
      resetSearchTerm();
    };
  }, [resetSearchTerm]);

  return (
    <Container aria-labelledby={searchListHeadingLabel}>
      <SearchListHeading />
      <Header />
      <ListContainer>
        <VirtualizedList />
      </ListContainer>
    </Container>
  );
};

export default SearchList;
