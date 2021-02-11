import { DefaultTheme } from "styled-components";
import resizeByLimitingDimension from "./resizeByLimitingDimension";

const minWidth = 300;
const minHeight = 300;

const onResize = (args: {
  theme: DefaultTheme;
  sourceWidth: number;
  sourceHeight: number;
}) => {
  const { theme, sourceWidth, sourceHeight } = args;
  const { titleRowREM } = theme;

  const videoContainer = document.getElementById("videoContainer")!;

  const videoContainerWidth = videoContainer.offsetWidth;
  const videoContainerHeight = videoContainer.offsetHeight;

  const transcript = document.getElementById("transcriptContainer");

  let transcriptWidth = 0;

  if (transcript !== null) {
    transcriptWidth = transcript.offsetWidth;
  }

  const REMInPixels = Number(
    getComputedStyle(document.documentElement).fontSize.slice(0, -2)
  );

  const titleRowHeight = REMInPixels * titleRowREM;

  const availableWidth = videoContainerWidth - transcriptWidth;
  const availableHeight = videoContainerHeight - titleRowHeight;

  const adjustedWidth = availableWidth > minWidth ? availableWidth : minWidth;
  const adjustedHeight =
    availableHeight > minHeight ? availableHeight : minHeight;

  const aspectRatio = sourceWidth / sourceHeight;
  const availableRatio = adjustedWidth / adjustedHeight;

  if (aspectRatio > availableRatio) {
    resizeByLimitingDimension({
      limitingDimensionSize: adjustedWidth,
      aspectRatio,
      isWidthLimiting: true,
    });
  } else {
    resizeByLimitingDimension({
      limitingDimensionSize: adjustedHeight,
      aspectRatio,
      isWidthLimiting: false,
    });
  }
};

export default onResize;
