import { useLayoutEffect, useRef } from "react";
import Plyr from "plyr";
import { useSetRecoilState } from "recoil";
import { atom } from "recoil";
import addTranscriptButton from "./addTranscriptButton";

export const setVideoTime = async (args: {
  videoPlayer: VideoPlayer;
  time: number;
}) => {
  const { videoPlayer, time } = args;
  if (videoPlayer.canPlay === true) {
    videoPlayer.currentTime = time;
    await videoPlayer.play();
  } else {
    const onCanPlay = async () => {
      videoPlayer.currentTime = time;

      try {
        await videoPlayer.play();
      } catch {}
    };
    videoPlayer.once("canplay", onCanPlay);
  }
};

export const videoPlayerState = atom<VideoPlayer | null>({
  key: "videoPlayer",
  default: null,
  dangerouslyAllowMutability: true,
});

export const isTranscriptShowingState = atom({
  key: "isTranscriptShowing",
  default: true,
});

export interface VideoPlayer extends Plyr {
  readonly canPlay: boolean;
}

interface InitialVideoPlayer extends Plyr {
  canPlay: boolean;
}

const useVideoPlayer = () => {
  const setVideoPlayerRef = useSetRecoilState(videoPlayerState);
  const setIsTranscriptShowing = useSetRecoilState(isTranscriptShowingState);

  const videoPlayerRef = useRef<VideoPlayer | null>(null);

  useLayoutEffect(() => {
    const videoPlayer = new Plyr("#videoPlayer", {
      invertTime: false,
      controls: [
        "play-large",
        "play",
        "mute",
        "volume",
        "current-time",
        "duration",
        "progress",
        "captions",
        "settings",

        "airplay",
        "fullscreen",
      ],
      captions: { active: true },
      tooltips: {
        controls: true,
      },
    }) as InitialVideoPlayer;

    addTranscriptButton({ videoPlayer, setIsTranscriptShowing });

    (videoPlayer as any).elements.inputs.volume.step = "0.02";

    videoPlayer.canPlay = false;

    const onCanPlay = async () => {
      videoPlayer.canPlay = true;
    };

    videoPlayer.once("canplay", onCanPlay);

    videoPlayerRef.current = videoPlayer;
    setVideoPlayerRef(videoPlayer);

    return () => {
      videoPlayer.destroy();
      setVideoPlayerRef(null);
    };
  }, [setVideoPlayerRef, setIsTranscriptShowing]);
};

export default useVideoPlayer;
