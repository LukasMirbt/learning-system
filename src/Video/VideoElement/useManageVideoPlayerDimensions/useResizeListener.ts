import React, { useLayoutEffect } from "react";
import debounce from "lodash.debounce";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../useVideoPlayer/useVideoPlayer";

const useResizeListener = (onResizeCallback: () => void) => {
  const videoPlayer = useRecoilValue(videoPlayerState);
  useLayoutEffect(() => {
    if (videoPlayer !== null) {
      const debouncedOnResize = debounce(onResizeCallback, 250);

      window.addEventListener("resize", debouncedOnResize);

      return () => {
        window.removeEventListener("resize", debouncedOnResize);
      };
    }
  }, [onResizeCallback, videoPlayer]);
};

export default useResizeListener;
