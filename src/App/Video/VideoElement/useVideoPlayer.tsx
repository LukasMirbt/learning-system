import { useLayoutEffect } from "react";
import Plyr from "plyr";
import { useSetRecoilState } from "recoil";
import { atom } from "recoil";
import addTranscriptButton from "./addTranscriptButton";

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
  canPlay: boolean;
}

const useVideo = () => {
  const setVideoPlayerRef = useSetRecoilState(videoPlayerState);
  const setIsTranscriptShowing = useSetRecoilState(isTranscriptShowingState);

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
    }) as VideoPlayer;

    addTranscriptButton({ videoPlayer, setIsTranscriptShowing });

    (videoPlayer as any).elements.inputs.volume.step = "0.02";

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
  }, [setVideoPlayerRef, setIsTranscriptShowing]);
};

export default useVideo;
