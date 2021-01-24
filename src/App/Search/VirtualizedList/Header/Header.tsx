import React, { FunctionComponent, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Form from "./Form/Form";
import NumberOfResults from "./NumberOfResults";

export const headerHeight = 108;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;

  padding: 0 1rem;
`;

const Header: FunctionComponent = () => {
  return (
    <FormContainer>
      <Column>
        <Form />
        <NumberOfResults />
      </Column>
    </FormContainer>
  );
};

export default Header;
