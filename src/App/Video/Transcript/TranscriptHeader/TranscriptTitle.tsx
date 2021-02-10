import { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";

export const transcriptLabelID = "transcriptLabel";

const StyledTitle = styled(Typography)`
  font-size: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type StyledVideoTitleProps = TypographyProps<"span", { component: "span" }>;

const StyledVideoTitle = styled(Typography)<StyledVideoTitleProps>`
  font-size: 1rem;
  font-style: italic;
  margin-top: 0.25rem;
`;

const Title: FunctionComponent = () => {
  const path = useLocation().pathname;
  const splitPath = path.split("/");
  const title = splitPath[1].replace(/-+/g, " ");

  return (
    <StyledTitle id={transcriptLabelID} variant="h2">
      Transcript
      <StyledVideoTitle variant="subtitle1" component="span">
        {title}
      </StyledVideoTitle>
    </StyledTitle>
  );
};

export default Title;
