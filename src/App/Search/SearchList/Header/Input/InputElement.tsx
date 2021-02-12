import React, { FunctionComponent, MutableRefObject, useEffect } from "react";
import styled from "styled-components";
import { searchTermState } from "../../../Search";
import { useRecoilState } from "recoil";
import { searchInputLabel } from "./Label";

export const searchInputID = "searchInput";

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

const Input: FunctionComponent<{
  inputRef: MutableRefObject<HTMLInputElement | null>;
}> = ({ inputRef }) => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <StyledInput
      id={searchInputID}
      ref={inputRef}
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
  );
};

export default Input;
