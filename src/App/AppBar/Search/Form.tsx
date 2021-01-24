import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input/Input";

export const Container = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  width: 100%;
  max-width: 1200px;
  position: relative;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

export const StyledLabel = styled.label`
  position: absolute;

  margin-right: 0.5rem;
  padding-left: 0.5rem;
`;

const Form: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <StyledLabel htmlFor="search-input" id="search-label">
        <SearchIcon aria-hidden icon={faSearch} />
      </StyledLabel>

      <Input inputRef={inputRef} />
    </Container>
  );
};

export default Form;
