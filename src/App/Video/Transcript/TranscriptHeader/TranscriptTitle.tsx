import { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";

export const transcriptLabelID = "transcriptLabel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

type StyledVideoTitleProps = TypographyProps<"span", { component: "span" }>;

const StyledVideoTitle = styled(Typography)<StyledVideoTitleProps>`
  font-size: 1rem;
  font-style: italic;
`;

const Title: FunctionComponent = () => {
  const path = useLocation().pathname;
  const splitPath = path.split("/");
  const title = splitPath[1].replace(/-+/g, " ");

  return (
    <Container id={transcriptLabelID}>
      <StyledTitle variant="h2">Transcript</StyledTitle>

      <StyledVideoTitle variant="subtitle1" component="span">
        {title}
      </StyledVideoTitle>
    </Container>
  );
};

export default Title;
