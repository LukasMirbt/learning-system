import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface TextProps {
  sc: {
    isCue: boolean;
  };
}

const Text = styled.div<TextProps>`
  ${({ sc: { isCue } }) =>
    isCue === true
      ? css`
          font-weight: 400;
          font-size: 1.25rem;
        `
      : css`
          font-weight: 500;
          font-size: 1.5rem;
        `};
`;

const Description = styled.div`
  font-size: 1rem;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartColumn: FunctionComponent<{
  text: string;
  isCue: boolean;
}> = ({ text, isCue }) => {
  return (
    <Container>
      <Text sc={{ isCue }} dangerouslySetInnerHTML={{ __html: text }} />
      <Description>{isCue === true ? "Video subtitle" : "Section"}</Description>
    </Container>
  );
};

export default StartColumn;
