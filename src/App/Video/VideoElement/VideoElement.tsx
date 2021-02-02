import React, { FunctionComponent } from "react";
import styled from "styled-components";
import "plyr/dist/plyr.css";
import useLocationStateToSetVideoTime from "./useLocationStateToSetVideoTime";
import useVideoPlayer from "./useVideoPlayer/useVideoPlayer";
import useSpacebarListener from "./useSpacebarListener";
import viewFromABlueMoonVideoSource from "../../Media/View-from-a-blue-moon/video.mp4";
import viewFromABlueMoonCaptionsSource from "../../Media/View-from-a-blue-moon/captions.vtt";
import elephantsDreamVideoSource from "../../Media/Elephants-dream/video.mp4";
import elephantsDreamCaptionsSource from "../../Media/Elephants-dream/captions.vtt";
import useManageVideoPlayerDimensions from "./useManageVideoPlayerDimensions/useManageVideoPlayerDimensions";
import useTranscriptToggleButton from "./useTranscriptToggleButton/useTranscriptToggleButton";

export const trackElementID = "videoElement-track";
export const videoElementID = "videoElement-videoElement";

const sources = {
  "/View-from-a-blue-moon": {
    title: "View from a blue moon",
    videoSource: viewFromABlueMoonVideoSource,
    captionsSource: viewFromABlueMoonCaptionsSource,
    sourceWidth: 860,
    sourceHeight: 480,
  },
  "/Elephants-dream": {
    title: "Elephants dream",
    videoSource: elephantsDreamVideoSource,
    captionsSource: elephantsDreamCaptionsSource,
    sourceWidth: 1920,
    sourceHeight: 1080,
  },
};

const Container = styled.div`
  display: flex;
  height: min-content;

  .plyr {
    --plyr-color-main: ${({ theme }) => theme.primary};
  }
`;

const VideoElement: FunctionComponent<{ path: keyof typeof sources }> = ({
  path,
}) => {
  const {
    title,
    captionsSource,
    videoSource,
    sourceWidth,
    sourceHeight,
  } = sources[path];

  useVideoPlayer({ sourceWidth, sourceHeight });

  useTranscriptToggleButton();

  useManageVideoPlayerDimensions({ sourceWidth, sourceHeight });

  useLocationStateToSetVideoTime();

  useSpacebarListener();

  return (
    <Container>
      <video
        title={title}
        id={videoElementID}
        controls
        crossOrigin="anonymous"
        playsInline
        /*   poster="" */
      >
        <source src={videoSource} type="video/mp4" />

        <track
          id={trackElementID}
          kind="captions"
          label="English"
          srcLang="en"
          src={captionsSource}
          default
        />
      </video>
    </Container>
  );
};

export default VideoElement;
