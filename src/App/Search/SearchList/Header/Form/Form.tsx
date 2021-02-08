import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import Input from "./Input";

const StyledForm = styled.form`
  margin-top: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

const Form: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledForm
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/*       <StyledLabel htmlFor="search-input" id="search-label">
        <SearchIcon aria-hidden icon={faSearch} />
      </StyledLabel> */}

      <Input inputRef={inputRef} />
    </StyledForm>
  );
};

export default Form;
