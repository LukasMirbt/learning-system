import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useContext,
} from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { NavLink, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../../../../Video/VideoElement/useVideoPlayer";
import { Chapter } from "../../../../Media/Media";
import { TitleContext } from "../../Sections";
import { setVideoTime } from "../../../../Video/VideoElement/useVideoPlayer";
import { ClickableHeadingStyle } from "../../../../common";

export const StyledNavLink = styled(NavLink)`
  /*   padding-left: 1rem;
  margin-bottom: 0.25rem; */

  ${ClickableHeadingStyle}
  padding-left: 1rem;
  width: unset;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 1rem;
  font-weight: inherit;
  font-size: 0.875rem;

  /*   &.active {
    color: #1c721c;
    background-color: rgba(0, 0, 0, 0.08);
    font-weight: 500;

    &:hover {
      background-color: rgba(0, 0, 0, 0.12);
    }
  } */

  /*   &:hover {
    color: ${({ theme }) => theme.secondary};
  } */

  /*   &.active {
    font-weight: bold;
  } */
`;

type SubheadingProps = TypographyProps<"span", { component: "span" }>;

const Subheading = styled(Typography)<SubheadingProps>`
  font-weight: inherit;
  font-size: 1rem;
  line-height: inherit;
  display: block;
`;

const Time = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
`;

const ChapterLink: FunctionComponent<{
  chapter: Chapter;
}> = ({ chapter: { chapterName, startTime, endTime } }) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const history = useHistory();

  const title = useContext(TitleContext);

  /*   const path = `/${conceptName}/${heading}/${name}`.replace(/\s+/g, "-"); */

  useMemo(() => {
    dayjs.extend(duration);
  }, []);

  const formattedTime = `${dayjs
    .duration(startTime * 1000)
    .format("m:ss")} - ${dayjs.duration(endTime * 1000).format("m:ss")}`;
  /* 
  useEffect(() => {
    if (videoPlayer !== null) {
      const onTimeUpdate = () => {
        const currentTime = videoPlayer.currentTime;

        if (currentTime >= startTime && currentTime <= endTime) {
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
  }, [videoPlayer, startTime, endTime, path, history]); */

  return (
    <StyledNavLink
      /*       onClick={() => {
        if (videoPlayer !== null) {
          setVideoTime({
            videoPlayer,
            time: startTime,
          });
        }
      }} */
      to={{
        pathname: `/${title}`.replace(/\s+/g, "-"),
        state: { time: startTime },
      }}
    >
      <Subheading variant="h3" component="span">
        {chapterName}
      </Subheading>

      <Time>{formattedTime}</Time>
    </StyledNavLink>
  );
};

export default ChapterLink;
