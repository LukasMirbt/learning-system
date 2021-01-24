import React, { FunctionComponent, useRef } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import {
  Container,
  StyledLabel,
  SearchIcon,
} from "../../../../AppBar/Search/Form";

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
