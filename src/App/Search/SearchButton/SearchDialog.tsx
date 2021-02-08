import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import MUIDialog from "@material-ui/core/Dialog";
import { useSetRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import { isSearchOpenState } from "./ButtonWithSearchDialog";
import { searchTermState, shouldSearchTermResetRefState } from "../Search";
import Autocomplete, {
  searchAutocompleteLabelID,
} from "./Autocomplete/Autocomplete";

const StyledDialog = styled(MUIDialog)`
  .MuiDialog-paper {
    position: absolute;
    top: 0;
    margin: 0;

    margin-top: 60px;
    width: 528px;
    padding: 0 1rem;

    outline: none;
  }
`;

const Modal: FunctionComponent = () => {
  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);

  const resetSearchTerm = useResetRecoilState(searchTermState);

  const shouldSearchTermResetRef = useRecoilValue(
    shouldSearchTermResetRefState
  );

  useEffect(() => {
    return () => {
      if (shouldSearchTermResetRef.current === true) {
        shouldSearchTermResetRef.current = false;
        return;
      } else {
        resetSearchTerm();
      }
    };
  }, [resetSearchTerm, shouldSearchTermResetRef]);

  return (
    <StyledDialog
      PaperProps={{
        "aria-label": "Search",
      }}
      open={true}
      onClose={() => {
        resetSearchTerm();
        setIsSearchOpen(false);
      }}
    >
      <Autocomplete />
    </StyledDialog>
  );
};

export default Modal;
