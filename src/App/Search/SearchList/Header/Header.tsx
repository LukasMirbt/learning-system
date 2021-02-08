import React, { FunctionComponent, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Form from "./Form/Form";
import NumberOfResults from "./NumberOfResults";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { useRecoilValue } from "recoil";
import { searchTermState } from "../../Search";

export const headerHeight = 108;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-right: 17px;
  border-radius: 4px;
  padding-bottom: 0.5rem;
  max-width: 1217px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;

  padding: 0 1rem;
`;

type LabelProps = TypographyProps<"label", { component: "label" }>;

const Label = styled(Typography)<LabelProps>`
  font-size: 2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const Header: FunctionComponent = () => {
  return (
    <FormContainer>
      <Label
        component="label"
        htmlFor="search-input"
        id="search-label"
        variant="h3"
      >
        Search in sections and video subtitles
      </Label>
      <Column>
        <Form />
        <NumberOfResults />
      </Column>
    </FormContainer>
  );
};

export default Header;
