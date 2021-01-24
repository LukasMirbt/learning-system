import React, {
  FunctionComponent,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";

const StyledButton = styled(IconButton)`
  position: absolute;
  right: 0;
  background-color: unset;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.25rem;
`;

const ClearSearchIcon = styled(FontAwesomeIcon)`
  && {
    width: 20px;
    height: 20px;
  }
`;

const ClearInputButton: FunctionComponent<{
  setSearchTerm: Dispatch<SetStateAction<string>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}> = ({ setSearchTerm, inputRef }) => {
  return (
    <StyledButton
      onClick={() => {
        setSearchTerm("");
        inputRef.current?.focus();
      }}
      type="reset"
      aria-label="Clear search query"
    >
      <ClearSearchIcon icon={faTimes} />
    </StyledButton>
  );
};

export default ClearInputButton;
