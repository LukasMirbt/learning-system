const getOptions = (args: { width: number; height: number }) => {
  const { width, height } = args;

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
    ratio: `${width}:${height}`,
  };

  return options;
};

export default getOptions;
