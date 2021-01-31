import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "./useVideoPlayer/useVideoPlayer";

const useSpacebarListener = () => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    const onKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === body && e.key === " ") {
        e.preventDefault();
        videoPlayer?.togglePlay();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [videoPlayer]);
};

export default useSpacebarListener;
