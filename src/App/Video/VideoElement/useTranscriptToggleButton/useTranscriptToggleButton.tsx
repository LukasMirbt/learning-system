import ReactDOM from "react-dom";
import { videoPlayerState } from "../useVideoPlayer/useVideoPlayer";
import TranscriptToggleButton from "./TranscriptToggleButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useLayoutEffect } from "react";
import { isTranscriptShowingState } from "../../Transcript/Transcript";
import { useTheme } from "styled-components";

const useTranscriptToggleButton = () => {
  const videoPlayer = useRecoilValue(videoPlayerState);
  const setIsTranscriptShowing = useSetRecoilState(isTranscriptShowingState);
  const theme = useTheme();

  useLayoutEffect(() => {
    if (videoPlayer !== null) {
      const controls = (videoPlayer as any).elements.controls;
      const controlButtons = controls.children;
      const lastButton = controlButtons[controlButtons.length - 1];

      const placeholderDiv = document.createElement("div");
      placeholderDiv.className = "plyr__controls__item";
      controls.insertBefore(placeholderDiv, lastButton);

      ReactDOM.render(
        <TranscriptToggleButton
          setIsTranscriptShowing={setIsTranscriptShowing}
          theme={theme}
        />,
        placeholderDiv
      );
    }
  }, [videoPlayer, setIsTranscriptShowing, theme]);
};

export default useTranscriptToggleButton;
