import React, { FunctionComponent } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "styled-components";
import viewFromABlueMoonCues from "../../Media/View-from-a-blue-moon/searchableCues";
import elephantsDreamCues from "../../Media/Elephants-dream/searchableCues";
import CueList from "./CueList";
import { atom, useRecoilValue } from "recoil";

const sources = {
  "/Elephants-dream": {
    cues: elephantsDreamCues,
  },
  "/View-from-a-blue-moon": {
    cues: viewFromABlueMoonCues,
  },
};

export const isTranscriptShowingState = atom({
  key: "isTranscriptShowing",
  default: true,
});

const Transcript: FunctionComponent<{ path: string }> = ({ path }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  return isLargeScreen === true && isTranscriptShowing === true ? (
    <CueList path={path} cues={sources[path as keyof typeof sources].cues} />
  ) : null;
};

export default Transcript;
