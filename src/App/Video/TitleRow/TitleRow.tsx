import React, { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../VideoElement/useVideoPlayer";

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

  const title = location.pathname.split("/")[1].replace(/-+/g, " ");

  return <Title variant="h1">{title}</Title>;
};

export default TitleRow;
