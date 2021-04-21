import { useLayoutEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { atom } from "recoil";
import { videoElementID } from "../VideoElement";
import { isTranscriptShowingState } from "../../Transcript/Transcript";
import initVideoPlayer from "./initVideoPlayer";

export type Plyr = typeof import("plyr").prototype;

export interface VideoPlayer extends Plyr {
  readonly canPlay: boolean;
  videoName: string;
  elements: Plyr["elements"] & {
    container: HTMLElement;
    inputs: {
      volume: HTMLInputElement;
    };
  };
}

export const videoPlayButtonID = "videoPlayButton";

export const videoPlayerState = atom<VideoPlayer | null>({
  key: "videoPlayer",
  default: null,
  dangerouslyAllowMutability: true,
});

const plyrImportRefState = atom<{ current: typeof import("plyr") | null }>({
  key: "plyrImportRef",
  default: { current: null },
  dangerouslyAllowMutability: true,
});

const useVideoPlayer = (args: {
  sourceWidth: number;
  sourceHeight: number;
  path: string;
}) => {
  const { sourceWidth, sourceHeight, path } = args;
  const setVideoPlayer = useSetRecoilState(videoPlayerState);
  const setIsTranscriptShowing = useSetRecoilState(isTranscriptShowingState);
  const plyrImportRef = useRecoilValue(plyrImportRefState);

  useLayoutEffect(() => {
    if (
      plyrImportRef.current === null &&
      typeof window !== "undefined" &&
      typeof document !== "undefined"
    ) {
      const asyncEffect = async () => {
        plyrImportRef.current = (await import("plyr")).default;

        initVideoPlayer({
          plyrImportRef,
          videoElementID,
          sourceWidth,
          sourceHeight,
          setVideoPlayer,
          path,
        });
      };

      asyncEffect();
    } else {
      initVideoPlayer({
        plyrImportRef,
        videoElementID,
        sourceWidth,
        sourceHeight,
        setVideoPlayer,
        path,
      });
    }

    return () => {
      setVideoPlayer((prevVideoPlayer) => {
        prevVideoPlayer.destroy();
        return null;
      });
    };
  }, [
    setVideoPlayer,
    setIsTranscriptShowing,
    sourceWidth,
    sourceHeight,
    plyrImportRef,
  ]);
};

export default useVideoPlayer;
