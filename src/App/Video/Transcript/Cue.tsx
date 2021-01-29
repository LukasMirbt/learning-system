import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../VideoElement/useVideoPlayer";
import { Cue as CueType } from "../../Media/Media";
import { setVideoTime } from "../VideoElement/useVideoPlayer";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

type InitialCueProps = TypographyProps<"button", { component: "button" }>;

const InitialCue = styled(Typography)<InitialCueProps>`
  display: flex;
  align-items: flex-start;
  text-align: start;
  justify-content: flex-start;

  width: calc(100% - 0.25em);

  padding: 0;
`;

export const StyledCue = styled(InitialCue)`
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &.current {
    background-color: rgba(0, 0, 0, 0.16);
    &:hover {
      background-color: rgba(0, 0, 0, 0.24);
    }
  }
`;

const Cue: FunctionComponent<{
  cue: CueType;
  cueIndex: number;
  /*   isLast: boolean;
  style: CSSProperties; */
}> = ({ cue, cueIndex }) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  return (
    <StyledCue
      variant="body1"
      component="button"
      id={`cue${cueIndex}`}
      /*  style={style} */
      type="button"
      /*   id={isLast ? "#endOfTranscript" : undefined} */
      onClick={() => {
        if (videoPlayer !== null) {
          setVideoTime({
            videoPlayer,
            time: cue.startTime,
          });
        }
      }}
      key={cue.text}
    >
      {cue.text}
    </StyledCue>
  );
};

export default Cue;
