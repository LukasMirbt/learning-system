import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../../../../Video/VideoElement/useVideoPlayer/useVideoPlayer";
import { videoState } from "../../../../Video/VideoElement/useVideoState/useVideoState";

const useIsActive = (args: {
  startTime: number;
  endTime: number;
  pathname: string;
}) => {
  const { startTime, endTime, pathname } = args;

  const videoPlayer = useRecoilValue(videoPlayerState);

  const { videoPathname } = useRecoilValue(videoState);

  const [isActive, setIsActive] = useState(() => {
    if (videoPlayer !== null && pathname.includes(videoPathname)) {
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

        if (
          pathname.includes(videoPathname) &&
          currentTime >= startTime &&
          currentTime <= endTime
        ) {
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
  }, [videoPlayer, startTime, endTime, isActive, pathname, videoPathname]);

  return isActive;
};

export default useIsActive;
