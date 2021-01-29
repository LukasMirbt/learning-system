import { useEffect } from "react";
import { setVideoTime, videoPlayerState } from "./useVideoPlayer";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

const useLocationStateToSetVideoTime = () => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const location = useLocation<{ time: number } | null | undefined>();

  useEffect(() => {
    const effect = async () => {
      if (location.state && videoPlayer !== null) {
        const { time } = location.state;

        setVideoTime({ videoPlayer, time });
        /* 
        if (videoPlayer.canPlay === true) {
          videoPlayer.currentTime = time;
          try {
            await videoPlayer.play();
          } catch {}
        } else {
          const onCanPlay = async () => {
            videoPlayer.currentTime = time;

            try {
              await videoPlayer.play();
            } catch {}
          };
          videoPlayer.once("canplay", onCanPlay);
        } */
      }
    };

    effect();
  }, [location, videoPlayer]);
};

export default useLocationStateToSetVideoTime;
