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

  return splitPathname.length >= 3 ? (
    <Title variant="h1">
      {splitPathname[1].replace(/-/g, " ")}
      {" - "}
      {splitPathname[2].replace(/-/g, " ")}
    </Title>
  ) : null;
};

export default TitleRow;
