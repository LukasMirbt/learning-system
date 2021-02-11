import { useEffect } from "react";
import {
  videoPlayButtonID,
  videoPlayerState,
} from "./useVideoPlayer/useVideoPlayer";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import setVideoTime from "./setVideoTime";

const useLocationStateToSetVideoTime = () => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const location = useLocation<{ time: number } | null | undefined>();

  useEffect(() => {
    const asyncEffect = async () => {
      if (location.state && videoPlayer !== null) {
        const { time } = location.state;
        setVideoTime({ videoPlayer, time });
        document.getElementById(videoPlayButtonID)?.focus();
      }
    };

    asyncEffect();
  }, [location, videoPlayer]);
};

export default useLocationStateToSetVideoTime;
