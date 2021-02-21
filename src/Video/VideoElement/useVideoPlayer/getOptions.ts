import plyrSprite from "./plyrSprite.svg";

const getOptions = (args: { sourceWidth: number; sourceHeight: number }) => {
  const { sourceWidth, sourceHeight } = args;

  const options: Plyr.Options = {
    invertTime: false,
    controls: [
      "play-large",
      "play",
      "mute",
      "volume",
      "current-time",
      "progress",
      "captions",
      "settings",
      "fullscreen",
    ],
    iconUrl: plyrSprite,
    captions: { active: true },
    tooltips: {
      controls: true,
    },
    ratio: `${sourceWidth}:${sourceHeight}`,
  };

  return options;
};

export default getOptions;
