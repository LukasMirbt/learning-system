const resizeByLimitingDimension = (args: {
  limitingDimensionSize: number;
  aspectRatio: number;
  isWidthLimiting: boolean;
}) => {
  const { limitingDimensionSize, aspectRatio, isWidthLimiting } = args;

  let width;
  let height;

  if (isWidthLimiting === true) {
    width = `${limitingDimensionSize.toFixed(3)}px`;
    height = `${(limitingDimensionSize / aspectRatio).toFixed(3)}px`;
  } else {
    height = `${limitingDimensionSize.toFixed(3)}px`;
    width = `${(limitingDimensionSize * aspectRatio).toFixed(3)}px`;
  }

  const videoPlayerContainer = document.getElementById("plyrContainer")!;

  videoPlayerContainer.style.height = height;
  videoPlayerContainer.style.width = width;

  const transcript = document.getElementById("transcriptContainer");

  if (transcript !== null) {
    transcript.style.height = height;
  }
};

export default resizeByLimitingDimension;
