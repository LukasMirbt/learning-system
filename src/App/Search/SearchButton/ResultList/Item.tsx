import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { ClickableHeadingStyle } from "../../../common";
import ListItem from "@material-ui/core/ListItem";
import { selectedItemIndexState, searchResultsState } from "../../Search";
import { isSearchOpenState } from "../SearchButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { videoPlayerState } from "../../../Video/VideoElement/useVideoPlayer/useVideoPlayer";

const StyledNavLink = styled(NavLink)`
  ${ClickableHeadingStyle};
  height: 3rem;
  border-radius: 4px;

  width: 100%;
  display: flex;
  justify-content: space-between;

  &:hover,
  &.active {
    color: white;
    background-color: ${({ theme }) => theme.primary};
  }
`;

const StyledListItem = styled(ListItem)`
  padding: 0;
  margin-bottom: 0.25rem;

  &:first-child {
    margin-top: 0.5rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  color: white;
`;

const Item: FunctionComponent<{
  index: number;
  value: string;

  startTime?: number;
  endTime?: number;
}> = ({ index, value, startTime, endTime }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useRecoilState(
    selectedItemIndexState
  );
  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);

  const searchResults = useRecoilValue(searchResultsState);

  useEffect(() => {
    setSelectedItemIndex(0);
  }, [searchResults, setSelectedItemIndex]);
  return (
    <StyledListItem
      aria-selected={index === selectedItemIndex}
      button={false as true}
      role="option"
    >
      <StyledNavLink
        onClick={() => {
          setIsSearchOpen(false);
        }}
        onMouseOver={() => {
          setSelectedItemIndex(index);
        }}
        exact
        to="/"
        /*         to={
          startTime === undefined
            ? path
            : {
                pathname: path,
                state: {
                  time: startTime,
                },
              }
        } */
        isActive={() => index === selectedItemIndex}
      >
        {value}
        <ArrowIcon icon={faArrowLeft} />
      </StyledNavLink>
    </StyledListItem>
  );
};

export default Item;
