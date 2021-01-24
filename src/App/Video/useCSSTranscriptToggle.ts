import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isTranscriptShowingState } from "./VideoElement/useVideoPlayer";

const useCSSTranscriptToggle = () => {
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  useEffect(() => {
    const videoRow = document.getElementById("videoRow")!;
    if (isTranscriptShowing === false) {
      videoRow.classList.add("transcriptHidden");
    } else {
      videoRow.classList.remove("transcriptHidden");
    }
  }, [isTranscriptShowing]);
};

export default useCSSTranscriptToggle;
