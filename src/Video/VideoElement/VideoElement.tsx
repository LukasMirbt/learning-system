import React, { FunctionComponent, useEffect, useState } from "react";
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
    videoSource: process.env.ELEPHANTS_DREAM_URL,
    captionsSource: elephantsDreamCaptionsSource,
    posterSource: elephantsDreamPosterSource,
    sourceWidth: 1920,
    sourceHeight: 1080,
  },
  "/View-from-a-blue-moon": {
    title: "View from a blue moon",
    videoSource: process.env.VIEW_FROM_A_BLUE_MOON_URL,
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
        <source
          src={
            "https://learning-system-1.s3.eu-north-1.amazonaws.com/Elephants-dream.mp4"
          }
          type="video/mp4"
        />

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
