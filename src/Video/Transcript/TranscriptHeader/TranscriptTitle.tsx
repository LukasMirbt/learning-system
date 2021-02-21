import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

export const transcriptLabelID = "transcriptLabel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.25rem;
`;

type StyledVideoTitleProps = TypographyProps<"span", { component: "span" }>;

const StyledVideoTitle = styled(Typography)<StyledVideoTitleProps>`
  font-size: 1rem;
  font-style: italic;
  margin-top: 0.25rem;
`;

const TranscriptTitle: FunctionComponent<{ path: string }> = ({ path }) => {
  const splitPath = path.split("/");
  const title = splitPath[1].replace(/-+/g, " ");

  return (
    <Container>
      <StyledTitle id={transcriptLabelID} variant="h2">
        Transcript
      </StyledTitle>
      <StyledVideoTitle variant="subtitle1" component="span">
        {title}
      </StyledVideoTitle>
    </Container>
  );
};

export default TranscriptTitle;
