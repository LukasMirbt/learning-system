import React, { FunctionComponent, useEffect, useContext } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import dayjs from "dayjs";
import { StyledNavLink } from "./ChapterLink";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { videoPlayerState } from "../../../../Video/VideoElement/useVideoPlayer";
import { TitleContext } from "../../Sections";
import { setVideoTime } from "../../../../Video/VideoElement/useVideoPlayer";

const ParagraphLink = styled(StyledNavLink)`
  border-left: 4px solid transparent;
  margin-left: 2rem;

  /*   &.active {
    border-left: ${({ theme }) => `4px solid ${theme.secondary}`};
    font-weight: 400;
  } */

  /*   &:last-child {
    margin-bottom: 0;
  } */
`;

type NameProps = TypographyProps<"span", { component: "span" }>;

const Name = styled(Typography)<NameProps>`
  font-weight: inherit;
  line-height: inherit;
  font-size: 1rem;
  display: block;
`;

const Time = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
`;

const Paragraph: FunctionComponent<{
  paragraph: [name: string, startTime: number, endTime: number];
}> = ({ paragraph }) => {
  const [name, startTime, endTime] = paragraph;

  const videoPlayer = useRecoilValue(videoPlayerState);

  const history = useHistory();

  const formattedTime = `${dayjs
    .duration(startTime * 1000)
    .format("m:ss")} - ${dayjs.duration(endTime * 1000).format("m:ss")}`;

  const title = useContext(TitleContext);

  /*   useEffect(() => {
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
  }, [videoPlayer, startTime, endTime, path, history]); */

  return (
    <ParagraphLink
      exact
      to={{
        pathname: `/${title}`.replace(/\s+/g, "-"),
        state: { time: startTime },
      }}
      /*       to={`/${title}`.replace(/\s+/g, "-")}
      onClick={() => {
        if (videoPlayer !== null) {
          setVideoTime({
            videoPlayer,
            time: startTime,
          });
        }
      }} */
    >
      <Name variant="h4" component="span">
        {name}
      </Name>

      <Time>{formattedTime}</Time>
    </ParagraphLink>
  );
};

export default Paragraph;
