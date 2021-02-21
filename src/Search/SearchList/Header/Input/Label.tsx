import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { searchInputID } from "./InputElement";

export const searchInputLabel = "searchLabel";

type LabelProps = TypographyProps<"label", { component: "label" }>;

const StyledLabel = styled(Typography)<LabelProps>`
  font-size: 1.25rem;
`;

const Form: FunctionComponent = () => {
  return (
    <StyledLabel
      component="label"
      htmlFor={searchInputID}
      id={searchInputLabel}
      variant="h3"
    >
      Search in sections and video subtitles
    </StyledLabel>
  );
};

export default Form;
