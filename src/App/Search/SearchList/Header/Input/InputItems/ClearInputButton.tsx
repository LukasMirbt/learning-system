import React, { FunctionComponent, MutableRefObject } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import { selector, useSetRecoilState, useRecoilValue } from "recoil";
import { searchTermState } from "../../../../Search";
import ClearIcon from "@material-ui/icons/Clear";

const shouldShowClearInputButtonState = selector({
  key: "shouldShowClearInputButton",
  get: ({ get }) => {
    return get(searchTermState) !== "";
  },
});

interface StyledButtonProps {
  sc: {
    shouldShowClearInputButton: boolean;
  };
}

const StyledButton = styled(IconButton)<StyledButtonProps>`
  position: absolute;
  right: 0;
  background-color: unset;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.25rem;

  visibility: ${({ sc: { shouldShowClearInputButton } }) =>
    shouldShowClearInputButton === true ? "visible" : "hidden"};
`;

const ClearSearchIcon = styled(FontAwesomeIcon)`
  && {
    width: 20px;
    height: 20px;
  }
`;

const StyledClearIcon = styled(ClearIcon)`
  font-size: 1.375rem;
`;

const ClearInputButton: FunctionComponent<{
  inputRef: MutableRefObject<HTMLInputElement | null>;
}> = ({ inputRef }) => {
  const setSearchTerm = useSetRecoilState(searchTermState);

  const shouldShowClearInputButton = useRecoilValue(
    shouldShowClearInputButtonState
  );
  return (
    <StyledButton
      tabIndex={-1}
      sc={{ shouldShowClearInputButton }}
      onClick={() => {
        setSearchTerm("");
        inputRef.current?.focus();
      }}
      type="reset"
      aria-label="Clear search query"
    >
      <StyledClearIcon />
    </StyledButton>
  );
};

export default ClearInputButton;
