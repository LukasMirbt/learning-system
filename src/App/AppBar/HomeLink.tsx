import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Title = styled(Typography)`
  margin-right: 1rem;
`;

const HomeLink: FunctionComponent = () => {
  return (
    <Link to="/">
      <Title
        variant="h6"
        //@ts-ignore
        component="span"
      >
        Insert course title here
      </Title>
    </Link>
  );
};

export default HomeLink;
