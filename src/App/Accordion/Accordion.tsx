import React, { FunctionComponent, ReactNode, useState } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

const Container = styled.div``;

const Accordion: FunctionComponent<{
  title: string;
  ID: string;
  children: ReactNode;
  headerCSS?: FlattenSimpleInterpolation;
  titleCSS?: FlattenSimpleInterpolation;
  className?: string;
  isExpandedInitially?: boolean;
}> = ({
  title,
  ID,
  children,
  headerCSS,
  titleCSS,
  className,
  isExpandedInitially = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedInitially);

  return (
    <Container className={className}>
      <AccordionHeader
        title={title}
        ID={ID}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        headerCSS={headerCSS}
        titleCSS={titleCSS}
      />

      {isExpanded === true && <AccordionBody ID={ID}>{children}</AccordionBody>}
    </Container>
  );
};

export default Accordion;
