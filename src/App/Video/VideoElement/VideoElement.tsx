import React, { FunctionComponent, useLayoutEffect, useEffect } from "react";
import "plyr/dist/plyr.css";
import useLocationStateToSetVideoTime from "./useLocationStateToSetVideoTime";
import useVideoPlayer from "./useVideoPlayer";
import useSpacebarListener from "./useSpacebarListener";
import initialVideoSource from "../../Media/View-from-a-blue-moon/video.mp4";
import initialCaptionsSource from "../../Media/View-from-a-blue-moon/captions.vtt";
import useLocationToSetVideoSource from "./useLocationToSetVideoSource";

export const trackID = "videoElement-track";

const VideoElement: FunctionComponent = () => {
  useVideoPlayer();

  useLocationToSetVideoSource();

  useLocationStateToSetVideoTime();

  useSpacebarListener();

  return (
    <video
      title="View from a blue moon"
      id="videoPlayer"
      controls
      crossOrigin="anonymous"
      playsInline
      /*   poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" */
    >
      <source src={initialVideoSource} type="video/mp4" />

      <track
        id={trackID}
        kind="captions"
        label="English"
        srcLang="en"
        src={initialCaptionsSource}
        default
      />
    </video>
  );
};

export default VideoElement;
