import React, { useEffect } from "react";
import {
  videoPlayButtonID,
  videoPlayerState,
} from "../useVideoPlayer/useVideoPlayer";
import { videoPaths } from "../../Video";
import { useRecoilState, useRecoilValue } from "recoil";
import setVideoTime from "./setVideoTime";
import { atom } from "recoil";
import { useLocation } from "@reach/router";

export const videoState = atom<{
  time: number | null;
  videoPathname: string;
}>({
  key: "videoState",
  default: {
    time: null,
    videoPathname: "/Elephants-dream",
  },
});

export const shouldFocusPlayButtonRefState = atom({
  key: "shouldFocusPlayButtonRef",
  default: { current: false },
  dangerouslyAllowMutability: true,
});

const useVideoState = () => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const [state, setState] = useRecoilState(videoState);

  const shouldFocusPlayButtonRef = useRecoilValue(
    shouldFocusPlayButtonRefState
  );

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" && state.videoPathname !== pathname) {
      setState((prev) => ({
        ...prev,
        videoPathname: pathname,
      }));
    }
  }, []);

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
