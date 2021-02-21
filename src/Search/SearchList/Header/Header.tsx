import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Input from "./Input/Input";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-right: 17px;
  border-radius: 4px;
  max-width: 1217px;

  margin-bottom: 1rem;
`;

const Header: FunctionComponent = () => {
  return (
    <Container>
      <Input />
    </Container>
  );
};

export default Header;
