import React, { FunctionComponent, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import NumberOfResults from "./NumberOfResults";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { useRecoilValue } from "recoil";
import { searchTermState } from "../../Search";
import Input from "./Input/Input";

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
  /*   justify-content: center; */
  width: 100%;
  max-width: 1200px;

  padding: 0 1rem;
`;

type LabelProps = TypographyProps<"label", { component: "label" }>;

const Label = styled(Typography)<LabelProps>`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const Header: FunctionComponent = () => {
  return (
    <FormContainer>
      <Column>
        <Label
          component="label"
          htmlFor="search-input"
          id="search-label"
          variant="h3"
        >
          Search in sections and video subtitles
        </Label>
        <Input />
        {/*      <NumberOfResults /> */}
      </Column>
    </FormContainer>
  );
};

export default Header;
