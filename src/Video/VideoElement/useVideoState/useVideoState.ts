import React, { useEffect } from "react";
import {
  videoPlayButtonID,
  videoPlayerState,
} from "../useVideoPlayer/useVideoPlayer";
import { videoPaths } from "../../Video";
import { useRecoilValue } from "recoil";
import setVideoTime from "./setVideoTime";
import { atom } from "recoil";

export const videoState = atom<{
  time: number | null;
  videoPathname: string;
}>({
  key: "videoState",
  default: {
    time: null,
    videoPathname: videoPaths[0],
  },
});

export const shouldFocusPlayButtonRefState = atom({
  key: "shouldFocusPlayButtonRef",
  default: { current: false },
  dangerouslyAllowMutability: true,
});

const useVideoState = () => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const state = useRecoilValue(videoState);
  const shouldFocusPlayButtonRef = useRecoilValue(
    shouldFocusPlayButtonRefState
  );

  useEffect(() => {
    const asyncEffect = async () => {
      if (videoPlayer !== null) {
        const { time } = state;

        if (time !== null) {
          setVideoTime({ videoPlayer, time });

          if (shouldFocusPlayButtonRef.current === true) {
            document.getElementById(videoPlayButtonID)?.focus();
            shouldFocusPlayButtonRef.current = false;
          }
        }
      }
    };

    asyncEffect();
  }, [videoPlayer, state, shouldFocusPlayButtonRef]);
};

export default useVideoState;
