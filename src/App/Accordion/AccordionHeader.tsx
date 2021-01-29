import React, { FunctionComponent, SetStateAction, Dispatch } from "react";
import { ClickableHeading } from "../common";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import Chevron from "./Chevron";

type TitleProps = TypographyProps<"span", { component: "span" }> & {
  sc: { titleCSS: FlattenSimpleInterpolation | undefined };
};

const Title = styled(Typography)<TitleProps>`
  display: flex;
  font-weight: inherit;
  font-size: 1rem;

  ${({ sc: { titleCSS } }) => titleCSS ?? null}
`;

interface ContainerProps {
  sc: {
    headerCSS: FlattenSimpleInterpolation | undefined;
  };
}

const Container = styled(ClickableHeading)<ContainerProps>`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  ${({ sc: { headerCSS } }) => headerCSS ?? null}
`;

const AccordionHeader: FunctionComponent<{
  title: string;
  ID: string;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  titleCSS?: FlattenSimpleInterpolation;
  headerCSS?: FlattenSimpleInterpolation;
}> = ({ title, ID, isExpanded, setIsExpanded, headerCSS, titleCSS }) => {
  return (
    <Container
      onClick={() => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
      }}
      button
      disableTouchRipple
      aria-disabled="false"
      aria-expanded={isExpanded}
      aria-controls={`${ID}-content`}
      id={`${ID}-header`}
      sc={{ headerCSS }}
    >
      <Title sc={{ titleCSS }} variant="h3" component="span">
        {title}
      </Title>

      <Chevron isExpanded={isExpanded} />
    </Container>
  );
};

export default AccordionHeader;
