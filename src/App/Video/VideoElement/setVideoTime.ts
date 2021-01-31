import { VideoPlayer } from "./useVideoPlayer/useVideoPlayer";

const setVideoTime = async (args: {
  videoPlayer: VideoPlayer;
  time: number;
}) => {
  const { videoPlayer, time } = args;
  if (videoPlayer.canPlay === true) {
    videoPlayer.currentTime = time;
    try {
      await videoPlayer.play();
    } catch {}
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

export default setVideoTime;
