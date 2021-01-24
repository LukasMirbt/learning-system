import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
} from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { ClickableHeadingStyle, SubheadingStyle } from "../../common";
import { NavLink, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../../Video/VideoElement/useVideoPlayer";

export const StyledLink = styled(NavLink)`
  padding-left: 1rem;
  margin-left: -1px;
  margin-bottom: 0.25rem;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  &.active {
    font-weight: bold;
  }
`;

const Subheading = styled(Typography)`
  font-weight: inherit;
  font-size: 1rem;
  line-height: inherit;
`;

const Time = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
`;

const Chapter: FunctionComponent<{
  conceptName: string;
  heading: string;
  subheadingName: string;
  subheadingIndex: number;
  subheadingStartTime: number;
  subheadingEndTime: number;
}> = ({
  conceptName,
  heading,
  subheadingName,
  subheadingIndex,
  subheadingStartTime,
  subheadingEndTime,
}) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const history = useHistory();

  const path = `/${conceptName}/${heading}/${subheadingName}`.replace(
    /\s+/g,
    "-"
  );

  useMemo(() => {
    dayjs.extend(duration);
  }, []);

  const formattedTime = useMemo(
    () =>
      `${dayjs
        .duration(subheadingStartTime * 1000)
        .format("m:ss")} - ${dayjs
        .duration(subheadingEndTime * 1000)
        .format("m:ss")}`,
    [subheadingStartTime, subheadingEndTime]
  );

  useEffect(() => {
    if (videoPlayer !== null) {
      const onTimeUpdate = () => {
        const currentTime = videoPlayer.currentTime;

        if (
          currentTime >= subheadingStartTime &&
          currentTime <= subheadingEndTime
        ) {
          if (history.location.pathname.includes(path) === false) {
            history.push(path);
          }
        }
      };

      videoPlayer.on("timeupdate", onTimeUpdate);

      return () => {
        videoPlayer.off("timeupdate", onTimeUpdate);
      };
    }
  }, [videoPlayer, subheadingStartTime, subheadingEndTime, path, history]);

  return (
    <StyledLink
      to={{
        pathname: path,
        state: {
          time: subheadingStartTime,
        },
      }}
    >
      <Subheading variant="h5">{subheadingName}</Subheading>

      <Time>{formattedTime}</Time>
    </StyledLink>
  );
};

export default Chapter;
