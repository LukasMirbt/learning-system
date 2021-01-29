import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  /*   margin-top: 0.25rem; */
`;

const AccordionBody: FunctionComponent<{
  ID: string;
  children: ReactNode;
}> = ({ ID, children }) => {
  return (
    <Container
      aria-labelledby={`${ID}-header`}
      id={`${ID}-content`}
      role="region"
    >
      {children}
    </Container>
  );
};

export default AccordionBody;
