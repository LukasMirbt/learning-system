import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import searchableItems from "./Video/Media/searchableHeadingsByPath";
import { videoPlayerState } from "./Video/VideoElement/useVideoPlayer";

const usePathnameToSetVideoTimeOnMount = () => {
  const history = useHistory();

  const hasEffectFired = useRef(false);

  const videoPlayer = useRecoilValue(videoPlayerState);

  useEffect(() => {
    if (videoPlayer !== null && hasEffectFired.current === false) {
      hasEffectFired.current = true;
      const path = history.location.pathname;
      if (path in searchableItems) {
        if (videoPlayer.canPlay === true) {
          videoPlayer.currentTime =
            searchableItems[path as keyof typeof searchableItems].startTime;
        } else {
          const onCanPlay = () => {
            videoPlayer.currentTime =
              searchableItems[path as keyof typeof searchableItems].startTime;
          };
          videoPlayer.once("canplay", onCanPlay);
        }
      }
    }
  }, [videoPlayer, history]);
};

export default usePathnameToSetVideoTimeOnMount;
