import React, {
  FunctionComponent,
  useLayoutEffect,
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import Plyr from "plyr";
import { useSetRecoilState } from "recoil";
import { randomQuestionIndexState } from "../QuestionDialog/QuestionDialog";
import "plyr/dist/plyr.css";
import CaptionsEnglish from "../Media/captions1.vtt";
import video576p from "../Media/video576p.mp4";
import video720p from "../Media/video720p.mp4";
import video1080p from "../Media/video1080p.mp4";
import video1 from "../Media/video1.mp4";
import captionsLong from "../Media/captionsLong.vtt";
import useLocationStateToSetVideoTime from "./useLocationStateToSetVideoTime";
import useVideoPlayer from "./useVideoPlayer";
import useSpacebarListener from "./useSpacebarListener";

const VideoElement: FunctionComponent = () => {
  useVideoPlayer();

  useLocationStateToSetVideoTime();

  useSpacebarListener();

  return (
    <video
      id="videoPlayer"
      controls
      crossOrigin="anonymous"
      playsInline
      poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
    >
      <source
        src={video1}
        type="video/mp4"
        //@ts-ignore
        size="1080"
      />

      {/*       <source
        src={video720p}
        type="video/mp4"
        //@ts-ignore
        size="720"
      />

      <source
        src={video576p}
        type="video/mp4"
        //@ts-ignore
        size="576"
      /> */}

      <track
        id="captions1English"
        kind="captions"
        label="English"
        srcLang="en"
        /*    src={CaptionsEnglish} */
        src={captionsLong}
        default
      />
      <track
        kind="captions"
        label="Français"
        srcLang="fr"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
      />

      <a
        href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
        download
      >
        Download
      </a>
    </video>
  );
};

export default VideoElement;
