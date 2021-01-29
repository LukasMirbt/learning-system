import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const Container = styled.div`
  color: rgba(0, 0, 0, 0.75);
  padding: 1rem 0;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WriteIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  padding-top: 0.25rem;
`;

type TextProps = TypographyProps<"p", { component: "p" }>;

const Text = styled(Typography)<TextProps>`
  font-size: 1rem;
`;

const EnterQuery: FunctionComponent = () => {
  return (
    <Container>
      <Text variant="h5" component="p">
        Enter a query
      </Text>
      <WriteIcon icon={faFeather} />
    </Container>
  );
};

export default EnterQuery;
