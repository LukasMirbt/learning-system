import React, { FunctionComponent } from "react";
import "plyr/dist/plyr.css";
import useLocationStateToSetVideoTime from "./useLocationStateToSetVideoTime";
import useVideoPlayer from "./useVideoPlayer";
import useSpacebarListener from "./useSpacebarListener";
import viewFromABlueMoonVideoSource from "../../Media/View-from-a-blue-moon/video.mp4";
import viewFromABlueMoonCaptionsSource from "../../Media/View-from-a-blue-moon/captions.vtt";
import elephantsDreamVideoSource from "../../Media/Elephants-dream/video.mp4";
import elephantsDreamCaptionsSource from "../../Media/Elephants-dream/captions.vtt";

export const trackElementID = "videoElement-track";
export const videoElementID = "videoElement-videoElement";

const sources = {
  "/View-from-a-blue-moon": {
    title: "View from a blue moon",
    videoSource: viewFromABlueMoonVideoSource,
    captionsSource: viewFromABlueMoonCaptionsSource,
  },
  "/Elephants-dream": {
    title: "Elephants dream",
    videoSource: elephantsDreamVideoSource,
    captionsSource: elephantsDreamCaptionsSource,
  },
};

const VideoElement: FunctionComponent<{ path: keyof typeof sources }> = ({
  path,
}) => {
  useVideoPlayer();

  useLocationStateToSetVideoTime();

  useSpacebarListener();

  const { title, captionsSource, videoSource } = sources[path];

  return (
    <video
      title={title}
      id={videoElementID}
      controls
      crossOrigin="anonymous"
      playsInline
      /*   poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" */
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
  );
};

export default VideoElement;
