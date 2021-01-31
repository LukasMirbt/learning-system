import { useLayoutEffect } from "react";
import Plyr from "plyr";
import { useSetRecoilState } from "recoil";
import { atom } from "recoil";
import addTranscriptButton from "../addTranscriptButton";
import { videoElementID } from "../VideoElement";
import { isTranscriptShowingState } from "../../Transcript/Transcript";
import getOptions from "./getOptions";

export const videoPlayerState = atom<VideoPlayer | null>({
  key: "videoPlayer",
  default: null,
  dangerouslyAllowMutability: true,
});

export interface VideoPlayer extends Plyr {
  readonly canPlay: boolean;
  elements: {
    container: HTMLElement;
    inputs: {
      volume: HTMLInputElement;
    };
  };
}

interface InitialVideoPlayer extends VideoPlayer {
  canPlay: boolean;
}

const useVideoPlayer = (args: { width: number; height: number }) => {
  const { width, height } = args;
  const setVideoPlayerRef = useSetRecoilState(videoPlayerState);
  const setIsTranscriptShowing = useSetRecoilState(isTranscriptShowingState);

  useLayoutEffect(() => {
    const videoPlayer = new Plyr(
      `#${videoElementID}`,
      getOptions({
        width,
        height,
      })
    ) as InitialVideoPlayer;

    videoPlayer.elements.container.id = "plyrContainer";
    videoPlayer.elements.inputs.volume.step = "0.02";

    addTranscriptButton({ videoPlayer, setIsTranscriptShowing });

    videoPlayer.canPlay = false;

    const onCanPlay = async () => {
      videoPlayer.canPlay = true;
    };

    videoPlayer.once("canplay", onCanPlay);

    setVideoPlayerRef(videoPlayer);

    return () => {
      videoPlayer.destroy();
      setVideoPlayerRef(null);
    };
  }, [setVideoPlayerRef, setIsTranscriptShowing, width, height]);
};

export default useVideoPlayer;
