import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../VideoElement/useVideoPlayer/useVideoPlayer";
import { Searchable } from "../../Media/Media";
import setVideoTime from "../VideoElement/useVideoState/setVideoTime";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const StyledCue = styled(ListItem)`
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

const Text = styled(Typography)``;

/* dangerouslySetInnerHTML is used here to preserve potential formatting of WebVTT cue spans,
 for example <b>, which makes the cue text bold. */
const Cue: FunctionComponent<{
  cue: Searchable;
  cueIndex: number;
}> = ({ cue, cueIndex }) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  return (
    <StyledCue
      button
      id={`cue${cueIndex}`}
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
      <Text variant="body1" dangerouslySetInnerHTML={{ __html: cue.text }} />
    </StyledCue>
  );
};

export default Cue;
