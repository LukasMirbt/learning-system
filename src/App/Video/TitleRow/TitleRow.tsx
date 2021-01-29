import React, { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Title = styled(Typography)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;

  font-size: 1.5rem;
`;

const TitleRow: FunctionComponent = () => {
  const location = useLocation();

  const splitPathname = location.pathname.split("/");

  if (splitPathname.length > 2) {
    const title = splitPathname[1].replace(/-+/g, " ");
    return <Title variant="h1">{title}</Title>;
  } else {
    return null;
  }
};

export default TitleRow;
