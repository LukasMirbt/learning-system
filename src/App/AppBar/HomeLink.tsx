import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

type TitleProps = TypographyProps<typeof Link, { component: typeof Link }>;

const Title = styled(Typography)<TitleProps>`
  margin-right: 1rem;
`;

const HomeLink: FunctionComponent = () => {
  return (
    <Title variant="h6" component={Link} to="/">
      Insert course title here
    </Title>
  );
};

export default HomeLink;
