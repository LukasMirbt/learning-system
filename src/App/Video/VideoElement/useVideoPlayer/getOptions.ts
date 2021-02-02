const getOptions = (args: { sourceWidth: number; sourceHeight: number }) => {
  const { sourceWidth, sourceHeight } = args;

  const options = {
    invertTime: false,
    controls: [
      "play-large",
      "play",
      "mute",
      "volume",
      "current-time",
      "duration",
      "progress",
      "captions",
      "settings",
      "airplay",
      "fullscreen",
    ],
    captions: { active: true },
    tooltips: {
      controls: true,
    },
    ratio: `${sourceWidth}:${sourceHeight}`,
  };

  return options;
};

export default getOptions;
