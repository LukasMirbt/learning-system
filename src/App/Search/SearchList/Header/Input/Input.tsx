import React, { FunctionComponent, useRef, useEffect } from "react";
import styled from "styled-components";
import { searchTermState } from "../../../Search";
import { useRecoilState } from "recoil";
import ClearInputButton from "./InputItems/ClearInputButton";
import SearchIcon from "./InputItems/SearchIcon";
import { searchInputLabel } from "./Label";

export const searchInputID = "search-input";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  position: relative;
`;

const StyledInput = styled.input`
  border: ${({ theme }) => `2px solid ${theme.primary}`};
  height: 56px;
  width: 100%;

  font-size: 1.25rem;
  border-radius: 4px;

  &[type="search"] {
    padding: 0;
    padding-left: 2.5rem;
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

const Input: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);

  return (
    <Container>
      <StyledInput
        id={searchInputID}
        ref={ref}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        aria-labelledby={searchInputLabel}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type="search"
        maxLength={64}
      />
      <SearchIcon />
      <ClearInputButton inputRef={ref} />
    </Container>
  );
};

export default Input;
