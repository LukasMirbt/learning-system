import React, { FunctionComponent } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "styled-components";
import SkipLink from "./SkipLink";
import viewFromABlueMoonCues from "../../Media/View-from-a-blue-moon/searchableCues";
import elephantsDreamCues from "../../Media/Elephants-dream/searchableCues";
import CueList from "./CueList";
import { atom, useRecoilValue } from "recoil";

const sources = {
  "/View-from-a-blue-moon": {
    cues: viewFromABlueMoonCues,
  },
  "/Elephants-dream": {
    cues: elephantsDreamCues,
  },
};

export const isTranscriptShowingState = atom({
  key: "isTranscriptShowing",
  default: true,
});

const Transcript: FunctionComponent<{ path: keyof typeof sources }> = ({
  path,
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  return (
    <>
      {isLargeScreen === true && isTranscriptShowing === true && (
        <>
          {/*  <SkipLink /> */}
          <CueList cues={sources[path].cues} />
        </>
      )}
    </>
  );
};

export default Transcript;
