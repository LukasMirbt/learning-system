import React, { FunctionComponent, Fragment } from "react";
import { Concept } from "../../Sections";
import Paragraphs from "./Paragraphs";
import ChapterLink from "./ChapterLink";
import { Chapter } from "../../../../Media/Media";

const ChapterComponent: FunctionComponent<{
  chapter: Chapter;
}> = ({ chapter }) => {
  return (
    <>
      <ChapterLink chapter={chapter} />

      <Paragraphs paragraphs={chapter.paragraphs} />
    </>
  );
};

export default ChapterComponent;
