import React, { FunctionComponent, useContext } from "react";
import { useMediaQuery } from "@material-ui/core";
import { ThemeContext } from "styled-components";
import SkipLink from "./SkipLink";
import { isTranscriptShowingState } from "../VideoElement/useVideoPlayer";
import { useRecoilValue } from "recoil";
import viewFromABlueMoonCues from "../../Media/View-from-a-blue-moon/cues";
import elephantsDreamCues from "../../Media/Elephants-dream/cues";
import { Switch, Route } from "react-router-dom";
import CueList from "./CueList";

const sources = [
  {
    path: "/View-from-a-blue-moon",
    cues: viewFromABlueMoonCues,
  },
  {
    path: "/Elephants-dream",
    cues: elephantsDreamCues,
  },
];

const Transcript: FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isTranscriptShowing = useRecoilValue(isTranscriptShowingState);

  return (
    <Switch>
      {sources.map(({ path, cues }) => {
        return (
          <Route key={path} path={path}>
            {isLargeScreen === true && isTranscriptShowing === true && (
              <>
                <SkipLink />
                <CueList cues={cues} />
              </>
            )}
          </Route>
        );
      })}
    </Switch>
  );
};

export default Transcript;
