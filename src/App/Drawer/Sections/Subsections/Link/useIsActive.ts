import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../../../../Video/VideoElement/useVideoPlayer/useVideoPlayer";

const useIsActive = (args: {
  startTime: number;
  endTime: number;
  pathname: string;
}) => {
  const { startTime, endTime, pathname } = args;

  const videoPlayer = useRecoilValue(videoPlayerState);

  const history = useHistory();

  const [isActive, setIsActive] = useState(() => {
    if (videoPlayer !== null && history.location.pathname.includes(pathname)) {
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
          history.location.pathname.includes(pathname) &&
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
  }, [videoPlayer, startTime, endTime, isActive, history, pathname]);

  return isActive;
};

export default useIsActive;
