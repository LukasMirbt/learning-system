import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import viewFromABlueMoonVideoSource from "../../Media/View-from-a-blue-moon/video.mp4";
import viewFromABlueMoonCaptionsSource from "file-loader!../../Media/View-from-a-blue-moon/captions.vtt";
import elephantsDreamVideoSource from "../../Media/Elephants-dream/video.mp4";
import elephantsDreamCaptionsSource from "file-loader!../../Media/Elephants-dream/captions.vtt";
import VideoSetup from "./VideoSetup";

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
    sourceWidth,
    sourceHeight,
  } = sources[path as keyof typeof sources];

  return (
    <Container>
      <video
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

      <VideoSetup sourceWidth={sourceWidth} sourceHeight={sourceHeight} />
    </Container>
  );
};

export default VideoElement;
