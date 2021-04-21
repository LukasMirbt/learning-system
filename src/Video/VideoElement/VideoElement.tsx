import React, { FunctionComponent } from "react";
import styled from "styled-components";
import viewFromABlueMoonCaptionsSource from "file-loader!../../Media/View-from-a-blue-moon/captions.vtt";
import elephantsDreamCaptionsSource from "file-loader!../../Media/Elephants-dream/captions.vtt";
import VideoSetup from "./VideoSetup";
import viewFromABlueMoonPosterSource from "../../Media/View-from-a-blue-moon/poster.png";
import elephantsDreamPosterSource from "../../Media/Elephants-dream/poster.png";

export const trackElementID = "videoElement-track";
export const videoElementID = "videoElement-videoElement";

const sources = {
  "/Elephants-dream": {
    title: "Elephants dream",
    videoSource:
      "https://learning-system-1.s3.eu-north-1.amazonaws.com/Elephants-dream.mp4",
    captionsSource: elephantsDreamCaptionsSource,
    posterSource: elephantsDreamPosterSource,
    sourceWidth: 1920,
    sourceHeight: 1080,
  },
  "/View-from-a-blue-moon": {
    title: "View from a blue moon",
    videoSource:
      "https://learning-system-1.s3.eu-north-1.amazonaws.com/View-from-a-blue-moon.mp4",
    captionsSource: viewFromABlueMoonCaptionsSource,
    posterSource: viewFromABlueMoonPosterSource,
    sourceWidth: 860,
    sourceHeight: 480,
  },
};

const Container = styled.div`
  display: flex;
  height: min-content;

  .plyr {
    --plyr-color-main: ${({ theme }) => theme.primary};
  }

  //Volume control has incorrect width without this on Firefox
  .plyr__volume input[type="range"] {
    width: calc(100% - 32px - 10px);
  }
`;

const VideoElement: FunctionComponent<{ path: string }> = ({ path }) => {
  const {
    title,
    captionsSource,
    videoSource,
    posterSource,
    sourceWidth,
    sourceHeight,
  } = sources[path as keyof typeof sources];

  return (
    <Container>
      <video
        data-poster={posterSource}
        title={title}
        id={videoElementID}
        controls
        crossOrigin="anonymous"
        playsInline
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

      <VideoSetup
        sourceWidth={sourceWidth}
        sourceHeight={sourceHeight}
        path={path}
      />
    </Container>
  );
};

export default VideoElement;
