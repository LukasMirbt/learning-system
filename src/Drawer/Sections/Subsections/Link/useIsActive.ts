import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../../../../Video/VideoElement/useVideoPlayer/useVideoPlayer";
import { videoState } from "../../../../Video/VideoElement/useVideoState/useVideoState";

export const isPathnameActive = (args: {
  pathname: string;
  videoPathname: string;
}) => {
  const { pathname, videoPathname } = args;
  const pathnameWithoutSlashes = pathname.replace(/\//g, "");

  if (
    (pathnameWithoutSlashes !== "" &&
      videoPathname.includes(pathnameWithoutSlashes)) ||
    (pathname === "/" && videoPathname.includes("Elephants-dream"))
  ) {
    return true;
  } else {
    return false;
  }
};

const useIsActive = (args: {
  startTime: number;
  endTime: number;
  pathname: string;
}) => {
  const { startTime, endTime, pathname } = args;

  const videoPlayer = useRecoilValue(videoPlayerState);

  const { videoPathname } = useRecoilValue(videoState);

  const [isActive, setIsActive] = useState(() => {
    if (
      videoPlayer !== null &&
      isPathnameActive({ pathname, videoPathname }) === true
    ) {
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
          isPathnameActive({ pathname, videoPathname }) === true &&
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
