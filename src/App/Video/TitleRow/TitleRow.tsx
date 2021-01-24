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

  return (
    <>
      {location.pathname !== "/" && (
        <Title variant="h1">
          {location.pathname.split("/")[1].replace(/-/g, " ")}
          {" - "}
          {location.pathname.split("/")[2].replace(/-/g, " ")}
        </Title>
      )}
    </>
  );
};

export default TitleRow;
