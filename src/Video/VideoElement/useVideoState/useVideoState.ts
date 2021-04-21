import React, { useEffect } from "react";
import {
  videoPlayButtonID,
  videoPlayerState,
} from "../useVideoPlayer/useVideoPlayer";
import { useRecoilValue, useRecoilState } from "recoil";
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
      setState((prevState) => ({
        time: prevState.time,
        videoPathname: pathname,
      }));
    }
  }, []);

  useEffect(() => {
    const setVideoTimeEffect = async () => {
      if (
        videoPlayer !== null &&
        state.videoPathname.includes(videoPlayer.videoName)
      ) {
        const { time } = state;

        if (time !== null) {
          await setVideoTime({ videoPlayer, time });

          if (shouldFocusPlayButtonRef.current === true) {
            document.getElementById(videoPlayButtonID)?.focus();
            shouldFocusPlayButtonRef.current = false;
          }
        }
      }
    };

    setVideoTimeEffect();
  }, [videoPlayer, shouldFocusPlayButtonRef, state]);
};

export default useVideoState;
