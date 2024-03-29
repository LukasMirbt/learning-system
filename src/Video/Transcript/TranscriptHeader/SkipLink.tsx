import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Link = styled.button`
  position: absolute;
  transform: translateY(-100vh);
  padding: 0.25rem;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  font-family: inherit;

  &:focus {
    transform: unset;
    top: 100px;
    right: 0;
    background-color: white;
    height: 50px;
    width: calc(300px + 0.5rem);
    z-index: 2;
  }
`;

const SkipLink: FunctionComponent<{ lastCueID: string }> = ({ lastCueID }) => {
  return (
    <Link
      type="button"
      onClick={() => {
        document.getElementById(lastCueID)!.focus();
      }}
    >
      Skip to end of transcript
    </Link>
  );
};

export default SkipLink;
