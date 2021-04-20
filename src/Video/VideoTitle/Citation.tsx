import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const CitationContainer = styled.span`
  display: flex;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

type CitationProps = TypographyProps<"cite", { component: "cite" }>;

const Citation = styled(Typography)<CitationProps>`
  font-size: inherit;
  font-style: normal;
  white-space: pre;
`;

const Link = styled.a`
  text-decoration: underline;
`;

const TitleRow: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <CitationContainer>
      <Citation component="cite" variant="h1">
        {"Video courtesy of "}
        <Link
          href={
            title === "Elephants dream"
              ? "https://orange.blender.org/"
              : "https://www.youtube.com/channel/UCiK7RrFl_oD9KoHy9xkhlmw"
          }
        >
          {title === "Elephants dream"
            ? "Orange Open Movie Project"
            : "Brain Farm"}
        </Link>
      </Citation>
    </CitationContainer>
  );
};

export default TitleRow;
