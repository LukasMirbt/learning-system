import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import SearchItems from "./SearchItems";
import Paper from "@material-ui/core/Paper";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { isSearchOpenState } from "./SearchButton";
import { searchTermState } from "./SearchItems";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled(Paper)`
  margin-top: 60px;
  width: 528px;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  outline: none;
`;

const SearchModal: FunctionComponent = () => {
  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);
  const resetSearchTerm = useResetRecoilState(searchTermState);
  return (
    <StyledModal
      open={true}
      onClose={() => {
        resetSearchTerm();
        setIsSearchOpen(false);
      }}
      aria-labelledby="search-label"
      /*     aria-describedby="modal-description" */
      aria-haspopup="listbox"
      aria-expanded
      role="combobox"
    >
      <Container>
        <SearchItems />
      </Container>
    </StyledModal>
  );
};

export default SearchModal;
