import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
  width: 100%;
  max-width: 1200px;

  padding: 0 1rem;
  padding-top: 1rem;
  margin-right: 17px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;

const Divider: FunctionComponent = () => <StyledDivider />;

export default Divider;
