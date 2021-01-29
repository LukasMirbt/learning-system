import React, { FunctionComponent, useRef, useEffect } from "react";
import styled from "styled-components";
import Cue from "./Cue";
import { videoPlayerState } from "../VideoElement/useVideoPlayer";
import { useRecoilValue } from "recoil";
import { Cue as CueType } from "../../Media/Media";
import { trackElementID } from "../VideoElement/VideoElement";

const StyledList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  right: 0;

  height: 100%;
  width: 300px;

  overflow-y: scroll;

  /*   list-style: none;
    margin: 0;
    padding: 0; */

  margin-left: 0.5rem;
`;

const CueList: FunctionComponent<{ cues: CueType[] }> = ({ cues }) => {
  const videoPlayer = useRecoilValue(videoPlayerState);

  const activeCuesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (videoPlayer !== null) {
      const trackElement = document.getElementById(
        trackElementID
      ) as HTMLTrackElement;

      const onCueChange = (e: Event) => {
        activeCuesRef.current.forEach((cueElement) => {
          cueElement.classList.remove("current");
        });

        activeCuesRef.current = [...(e.currentTarget as any).activeCues].map(
          (cue) => {
            const cueElement = document.getElementById(`cue${cue.id}`)!;
            cueElement.classList.add("current");
            return cueElement;
          }
        );
      };

      if (trackElement.readyState === 2) {
        trackElement.track.addEventListener("cuechange", onCueChange);

        return () => {
          trackElement.track.removeEventListener("cuechange", onCueChange);
        };
      } else {
        const onLoad = () => {
          trackElement.track.addEventListener("cuechange", onCueChange);
        };

        trackElement.addEventListener("load", onLoad);

        return () => {
          trackElement.track.removeEventListener("cuechange", onCueChange);
          trackElement.removeEventListener("load", onLoad);
        };
      }
    }
  }, [videoPlayer]);

  return (
    <StyledList>
      {cues.map((cue, index) => (
        <Cue key={cue.startTime} cue={cue} cueIndex={index}></Cue>
      ))}
    </StyledList>
  );
};

export default CueList;
