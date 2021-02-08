import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../VideoElement/useVideoPlayer/useVideoPlayer";
import { Searchable } from "../../Media/Media";
import setVideoTime from "../VideoElement/setVideoTime";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

type StyledCueProps = TypographyProps<"button", { component: "button" }>;

const StyledCue = styled(Typography)<StyledCueProps>`
  text-align: start;
  width: calc(100% - 0.25em);
  padding: 0.25rem 0;
  min-height: 3rem;

  outline: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &.current {
    background-color: rgba(0, 0, 0, 0.08);
    &:hover {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }
`;

const Cue: FunctionComponent<{
  cue: Searchable;
  cueIndex: number;
}> = ({ cue, cueIndex }) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  return (
    <StyledCue
      variant="body1"
      component="button"
      id={`cue${cueIndex}`}
      type="button"
      onClick={() => {
        if (videoPlayer !== null) {
          setVideoTime({
            videoPlayer,
            time: cue.startTime,
          });
        }
      }}
      key={cue.text}
      dangerouslySetInnerHTML={{ __html: cue.text }}
    />
  );
};

export default Cue;
