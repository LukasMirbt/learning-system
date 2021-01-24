import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { atom, useRecoilState } from "recoil";
import Button from "@material-ui/core/Button";

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
`;

const StyledButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.24);
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .MuiButton-label {
    margin-right: 0.5rem;
  }
`;

export const isSearchOpenState = atom({
  key: "isSearchOpen",
  default: false,
});

const Search: FunctionComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useRecoilState(isSearchOpenState);
  return (
    <>
      <StyledButton
        onClick={() => {
          setIsSearchOpen(true);
        }}
        variant="outlined"
        color="inherit"
        startIcon={<SearchIcon icon={faSearch} />}
      >
        Search
      </StyledButton>
      {/*       <IconButton
        onClick={() => {
          setIsSearchOpen(true);
        }}
        color="inherit"
        aria-label="Search..."
      >
        <SearchIcon icon={faSearch} />
      </IconButton> */}

      {isSearchOpen === true && <Modal />}
    </>
  );
};

export default Search;
