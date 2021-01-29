import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { Container, SearchIcon } from "../../../../SearchButton/Form";

const StyledContainer = styled(Container)`
  margin-top: 1rem;
`;

const Form: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledContainer
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/*       <StyledLabel htmlFor="search-input" id="search-label">
        <SearchIcon aria-hidden icon={faSearch} />
      </StyledLabel> */}

      <Input inputRef={inputRef} />
    </StyledContainer>
  );
};

export default Form;
