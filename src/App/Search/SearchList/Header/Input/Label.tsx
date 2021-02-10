import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

type LabelProps = TypographyProps<"label", { component: "label" }>;

const StyledLabel = styled(Typography)<LabelProps>`
  font-size: 1.375rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form: FunctionComponent = () => {
  return (
    <StyledLabel
      component="label"
      htmlFor="search-input"
      id="search-label"
      variant="h3"
    >
      Search in sections and video subtitles
    </StyledLabel>
  );
};

export default Form;
