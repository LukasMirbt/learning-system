import React, {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useState,
  useRef,
} from "react";
import styled from "styled-components";
import { ClickableHeading } from "../../common";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../VideoElement/useVideoPlayer";
import Typography from "@material-ui/core/Typography";
import { SearchableCue } from "../../AppBar/Search/getSearchableItems";

const StyledCue = styled.button`
  display: flex;
  align-items: flex-start;
  text-align: start;
  justify-content: flex-start;

  margin-right: 0.25em;
  padding: 0;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &.current {
    background-color: rgba(0, 0, 0, 0.16);
    &:hover {
      background-color: rgba(0, 0, 0, 0.24);
    }
  }
`;

const Text = styled(Typography)`
  font-weight: inherit;
`;

interface StateRef {
  element: HTMLButtonElement | null;
  isActive: boolean;
}

const Cue: FunctionComponent<{ cue: SearchableCue; isLast: boolean }> = ({
  cue,
  isLast,
}) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const elementRef = useRef<HTMLButtonElement>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    if (videoPlayer !== null) {
      const { startTime, endTime } = cue;

      const onTimeUpdate = () => {
        const time = videoPlayer.currentTime;

        if (time >= startTime && time <= endTime) {
          if (isActiveRef.current === false) {
            isActiveRef.current = true;
            elementRef.current!.classList.add("current");
            elementRef.current!.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }
        } else if (isActiveRef.current === true) {
          elementRef.current!.classList.remove("current");
          isActiveRef.current = false;
        }
      };

      videoPlayer.on("timeupdate", onTimeUpdate);
      return () => {
        videoPlayer.off("timeupdate", onTimeUpdate);
      };
    }
  }, [videoPlayer, cue]);

  return (
    <StyledCue
      ref={elementRef}
      type="button"
      id={isLast ? "#endOfTranscript" : undefined}
      onClick={() => {
        videoPlayer!.currentTime = cue.startTime;
        videoPlayer!.play();
      }}
      key={cue.value}
    >
      {cue.value}
    </StyledCue>
  );
};

export default Cue;
