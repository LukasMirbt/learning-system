import { DefaultTheme } from "styled-components";

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

  const aspectRatio = sourceWidth / sourceHeight;
  const availableRatio = availableWidth / availableHeight;

  const videoPlayerContainer = document.getElementById("plyrContainer")!;

  if (availableRatio > aspectRatio) {
    const height = `${availableHeight.toFixed(3)}px`;
    const width = `${(availableHeight * aspectRatio).toFixed(3)}px`;

    videoPlayerContainer.style.height = height;
    videoPlayerContainer.style.width = width;

    const transcript = document.getElementById("transcriptContainer");

    if (transcript !== null) {
      transcript.style.height = height;
    }
  } else {
    const width = `${availableWidth.toFixed(3)}px`;
    const height = `${(availableWidth / aspectRatio).toFixed(3)}px`;

    videoPlayerContainer.style.width = width;
    videoPlayerContainer.style.height = height;

    const transcript = document.getElementById("transcriptContainer");

    if (transcript !== null) {
      transcript.style.height = height;
    }
  }
};

export default onResize;
