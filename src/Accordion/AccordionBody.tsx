import React, { FunctionComponent, ReactNode } from "react";

const AccordionBody: FunctionComponent<{
  ID: string;
  children: ReactNode;
}> = ({ ID, children }) => {
  return (
    <div aria-labelledby={`${ID}-header`} id={`${ID}-content`} role="region">
      {children}
    </div>
  );
};

export default AccordionBody;
