import React, { useRef, useEffect } from "react";
import { videoPlayerState } from "../VideoElement/useVideoPlayer/useVideoPlayer";
import { useRecoilValue } from "recoil";
import { trackElementID } from "../VideoElement/VideoElement";

const useActiveCueStyle = () => {
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
          (cue, index, arr) => {
            const cueElement = document.getElementById(`cue${cue.id}`)!;
            cueElement.classList.add("current");

            if (index === arr.length - 1) {
              cueElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
              });
            }

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
};

export default useActiveCueStyle;
