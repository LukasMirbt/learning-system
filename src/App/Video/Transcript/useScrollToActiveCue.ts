/* import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { videoPlayerState } from "../VideoElement/useVideoPlayer";

const cueTimesAndIndex = [
  { startTime: 0, endTime: 5, index: 0 },
  { startTime: 7, endTime: 11, index: 1 },
  { startTime: 12, endTime: 15, index: 2 },
];

const useScrollToActiveCue = () => {
  const stateRef = useRef({
      activeIndex: null,
      shouldScroll: false
  });


const videoPlayer = useRecoilValue(videoPlayerState)

  useEffect(() => {
      if (videoPlayer !== null) {
const onTimeUpdate = () => {
    const { activeIndex,  shouldScroll } = stateRef.current;
const { startTime, endTime } = cueTimesAndIndex[nextIndex]
const { currentTime } = videoPlayer;



if (currentTime >= startTime && currentTime <= endTime) {

}



}


videoPlayer.on("timeupdate", onTimeUpdate)

return () => {
    videoPlayer.off("timeupdate", onTimeUpdate)
}
      }
  }, [videoPlayer])
};
 */

const useA = () => {};
export default useA;
