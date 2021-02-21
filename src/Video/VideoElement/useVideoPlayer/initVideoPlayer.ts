import { SetterOrUpdater } from "recoil";
import getOptions from "./getOptions";
import { VideoPlayer } from "./useVideoPlayer";

interface InitialVideoPlayer extends VideoPlayer {
  canPlay: boolean;
}

const initVideoPlayer = (args: {
  plyrImportRef: { current: typeof import("plyr") };
  videoElementID: string;
  sourceWidth: number;
  sourceHeight: number;
  setVideoPlayer: SetterOrUpdater<VideoPlayer>;
}) => {
  const {
    plyrImportRef,
    videoElementID,
    sourceWidth,
    sourceHeight,
    setVideoPlayer,
  } = args;

  const videoPlayer = (new plyrImportRef.current(
    `#${videoElementID}`,
    getOptions({
      sourceWidth,
      sourceHeight,
    })
  ) as unknown) as InitialVideoPlayer;

  videoPlayer.elements.container.id = "plyrContainer";
  videoPlayer.elements.container.tabIndex = -1;
  videoPlayer.elements.inputs.volume.step = "0.02";
  (videoPlayer.elements as any).controls.children[0].id = "videoPlayButton";

  const readyState = (document.getElementById(
    videoElementID
  ) as HTMLVideoElement).readyState;

  if (readyState >= 2) {
    videoPlayer.canPlay = true;
  } else {
    videoPlayer.canPlay = false;

    const onCanPlay = () => {
      videoPlayer.canPlay = true;
    };

    videoPlayer.once("canplay", onCanPlay);
  }

  setVideoPlayer(videoPlayer);
};

export default initVideoPlayer;
