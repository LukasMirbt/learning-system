import React, { FunctionComponent, useEffect, MutableRefObject } from "react";
import styled from "styled-components";
import {
  searchTermState,
  selectedItemIndexState,
  searchResultsState,
} from "../SearchItems";
import { isCue, numberOfResultsToShow } from "../ResultList/ResultList";
import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ClearInputButton from "./ClearInputButton";
import { isSearchOpenState } from "../Search";
import { videoPlayerState } from "../../../Video/VideoElement/useVideoPlayer";

export const StyledInput = styled.input`
  border: ${({ theme }) => `2px solid ${theme.primary}`};
  height: 56px;
  width: 100%;
  font-size: 1.25rem;
  border-radius: 4px;

  &[type="search"] {
    padding: 0;
    padding-left: 2.25rem;
    padding-right: 2.75rem;
  }

  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  &:focus {
    outline: none;
  }
`;

const Input: FunctionComponent<{
  inputRef: MutableRefObject<HTMLInputElement | null>;
}> = ({ inputRef }) => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [selectedItemIndex, setSelectedItemIndex] = useRecoilState(
    selectedItemIndexState
  );
  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);

  const searchResults = useRecoilValue(searchResultsState);

  const history = useHistory();

  const videoPlayer = useRecoilValue(videoPlayerState);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <>
      <StyledInput
        id="search-input"
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        aria-autocomplete="list"
        aria-labelledby="search-label"
        /*  aria-label="Search in videos and headings" */
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type="search"
        placeholder="Search in videos or chapters"
        maxLength={64}
        onFocus={() => {
          setSelectedItemIndex(0);
        }}
        onBlur={() => {
          setSelectedItemIndex(-1);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedItemIndex((prevIndex) =>
              prevIndex === numberOfResultsToShow - 1 ? 0 : prevIndex + 1
            );
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedItemIndex((prevIndex) =>
              prevIndex === 0 ? numberOfResultsToShow - 1 : prevIndex - 1
            );
          } else if (
            e.key === "Enter" &&
            searchResults !== undefined &&
            searchResults.length !== 0
          ) {
            const item = searchResults[selectedItemIndex].item;

            e.preventDefault();
            setIsSearchOpen(false);
            history.push(item.path, {
              time: item.startTime,
            });
          }
        }}
      />

      {searchTerm !== "" && (
        <ClearInputButton inputRef={inputRef} setSearchTerm={setSearchTerm} />
      )}
    </>
  );
};

export default Input;
