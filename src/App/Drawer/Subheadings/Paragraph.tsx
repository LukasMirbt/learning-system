import React, {
  FunctionComponent,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import styled, { css } from "styled-components";
import { SubheadingsType } from "../HeadingNavigation/HeadingNavigation";
import { ClickableHeadingStyle, SubheadingStyle } from "../../common";
import { nestedHeadingsState } from "../HeadingNavigation/HeadingNavigation";
import { useRecoilValue } from "recoil";
import { Switch, Route, NavLink } from "react-router-dom";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { StyledLink } from "./Chapter";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { videoPlayerState } from "../../Video/VideoElement/useVideoPlayer";

const ParagraphLink = styled(StyledLink)`
  /*   padding-left: 2rem; */
  border-left: 4px solid transparent;
  margin-left: calc(1rem - 4px);

  &.active {
    border-left: ${({ theme }) => `4px solid ${theme.secondary}`};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Subheading = styled(Typography)`
  font-weight: inherit;
  font-size: 1rem;
  line-height: inherit;
`;

const Name = styled(Subheading)`
  font-size: 0.875rem;
`;

const Time = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
`;

const Paragraph: FunctionComponent<{
  name: string;
  startTime: number;
  endTime: number;
  conceptName: string;
  heading: string;
  subheadingName: string;
}> = ({ name, startTime, endTime, conceptName, heading, subheadingName }) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const history = useHistory();

  const path = `/${conceptName}/${heading}/${subheadingName}/${name}`.replace(
    /\s+/g,
    "-"
  );

  const formattedTime = useMemo(
    () =>
      `${dayjs.duration(startTime * 1000).format("m:ss")} - ${dayjs
        .duration(endTime * 1000)
        .format("m:ss")}`,
    [startTime, endTime]
  );

  useEffect(() => {
    if (videoPlayer !== null) {
      const onTimeUpdate = () => {
        const currentTime = videoPlayer.currentTime;
        if (
          history.location.pathname !== path &&
          currentTime >= startTime &&
          currentTime <= endTime
        ) {
          history.push(path);
        }
      };
      videoPlayer.on("timeupdate", onTimeUpdate);

      return () => {
        videoPlayer.off("timeupdate", onTimeUpdate);
      };
    }
  }, [videoPlayer, startTime, endTime, path, history]);

  return (
    <ParagraphLink
      exact
      to={{
        pathname: path,
        state: {
          time: startTime,
        },
      }}
    >
      <Name variant="h6">{name}</Name>

      <Time>{formattedTime}</Time>
    </ParagraphLink>
  );
};

export default Paragraph;
