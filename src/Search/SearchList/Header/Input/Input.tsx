import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import InputItems from "./InputItems/InputItems";
import Label from "./Label";
import InputElement from "./InputElement";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
`;

const Input: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Column>
      <Label />
      <Container>
        <InputElement inputRef={inputRef} />
        <InputItems inputRef={inputRef} />
      </Container>
    </Column>
  );
};

export default Input;
