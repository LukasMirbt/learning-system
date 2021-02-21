import React, { FunctionComponent, ReactNode, useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

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
    <div className={className}>
      <AccordionHeader
        title={title}
        ID={ID}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        headerCSS={headerCSS}
        titleCSS={titleCSS}
      />

      {isExpanded === true && <AccordionBody ID={ID}>{children}</AccordionBody>}
    </div>
  );
};

export default Accordion;
