import React, { FunctionComponent, SetStateAction, Dispatch } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import Chevron from "./Chevron";
import ListItem from "@material-ui/core/ListItem";

type TitleProps = TypographyProps<"span", { component: "span" }> & {
  sc: { titleCSS: string | FlattenSimpleInterpolation };
};

const Title = styled(Typography)<TitleProps>`
  display: flex;
  font-weight: inherit;
  font-size: 1rem;

  ${({ sc: { titleCSS } }) => titleCSS}
`;

interface ContainerProps {
  sc: {
    headerCSS: string | FlattenSimpleInterpolation;
  };
}

const Container = styled(ListItem)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 2.25rem;

  padding: 0.25rem 1rem;

  ${({ sc: { headerCSS } }) => headerCSS};
`;

const AccordionHeader: FunctionComponent<{
  title: string;
  ID: string;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  titleCSS?: string | FlattenSimpleInterpolation;
  headerCSS?: string | FlattenSimpleInterpolation;
}> = ({ title, ID, isExpanded, setIsExpanded, headerCSS, titleCSS }) => {
  return (
    <Container
      onClick={() => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
      }}
      button
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
