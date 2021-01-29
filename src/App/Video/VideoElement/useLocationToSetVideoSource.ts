import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";
import viewFromABlueMoonVideoSource from "../../Media/View-from-a-blue-moon/video.mp4";
import viewFromABlueMoonCaptionsSource from "../../Media/View-from-a-blue-moon/captions.vtt";
import elephantsDreamVideoSource from "../../Media/Elephants-dream/video.mp4";
import elephantsDreamCaptionsSource from "../../Media/Elephants-dream/captions.vtt";
import { videoPlayerState } from "./useVideoPlayer";
import { trackID } from "./VideoElement";
import { Track } from "plyr";

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

interface TrackWithID extends Track {
  id: string;
}

const useLocationToChangeVideoSource = () => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const location = useLocation();

  const isInitialRenderRef = useRef(true);

  useEffect(() => {
    if (videoPlayer !== null) {
      if (isInitialRenderRef.current === false) {
        const splitPathname = location.pathname.split("/");
        const videoPath = ("/" + splitPathname[1]) as keyof typeof sources;

        videoPlayer.source = {
          type: "video",
          title: sources[videoPath].title,
          sources: [
            {
              src: sources[videoPath].videoSource,
              type: "video/mp4",
            },
          ],
          tracks: [
            {
              kind: "captions",
              label: "English",
              srcLang: "en",
              src: sources[videoPath].captionsSource,
              default: true,
              id: trackID,
            },
          ] as TrackWithID[],
        };
      }
      isInitialRenderRef.current = false;
    }
  }, [location.pathname, videoPlayer]);
};

export default useLocationToChangeVideoSource;
