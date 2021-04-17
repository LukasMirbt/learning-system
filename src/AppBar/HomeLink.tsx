import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

type TitleProps = TypographyProps<"a", { component: "a" }>;

const Title = styled(Typography)<TitleProps>`
  margin-right: 1rem;
`;

const HomeLink: FunctionComponent = () => {
  return (
    <Title variant="h6" component="a" href="/">
      Learning system
    </Title>
  );
};

export default HomeLink;
