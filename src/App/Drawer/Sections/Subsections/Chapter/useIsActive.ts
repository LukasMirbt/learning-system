import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../../../../Video/VideoElement/useVideoPlayer/useVideoPlayer";

const useIsActive = (args: { startTime: number; endTime: number }) => {
  const { startTime, endTime } = args;

  const videoPlayer = useRecoilValue(videoPlayerState);

  const [isActive, setIsActive] = useState(() => {
    if (videoPlayer !== null) {
      const { currentTime } = videoPlayer;
      return currentTime >= startTime && currentTime <= endTime;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (videoPlayer !== null) {
      const onTimeUpdate = () => {
        const { currentTime } = videoPlayer;

        if (currentTime >= startTime && currentTime <= endTime) {
          if (isActive === false) {
            setIsActive(true);
          }
        } else if (isActive === true) {
          setIsActive(false);
        }
      };

      videoPlayer.on("timeupdate", onTimeUpdate);

      return () => {
        videoPlayer.off("timeupdate", onTimeUpdate);
      };
    }
  }, [videoPlayer, startTime, endTime, isActive]);

  return isActive;
};

export default useIsActive;
