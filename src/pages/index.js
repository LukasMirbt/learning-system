import React from "react";
import Video, { videoPaths } from "../Video/Video";
import videoStructure from "../Media/View-from-a-blue-moon/videoStructure";
import getSearchableSections from "../Media/getSearchableSections";

const Index = () => {
  console.log(
    getSearchableSections(videoStructure.sections, "View from a blue moon")
  );
  return <Video path={videoPaths[0]} />;
};

export default Index;
