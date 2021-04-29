import React, { FunctionComponent } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "styled-components";
import viewFromABlueMoonCues from "../../Media/View-from-a-blue-moon/searchableCues";
import elephantsDreamCues from "../../Media/Elephants-dream/searchableCues";
import CueList from "./CueList";
import { atom, useRecoilValue } from "recoil";

export const cueSources = {
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
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  return isLargeScreen === true && isTranscriptShowing === true ? (
    <CueList
      path={path}
      cues={cueSources[path as keyof typeof cueSources].cues}
    />
  ) : null;
};

export default Transcript;
