import React, { FunctionComponent, Fragment } from "react";
import ParagraphLink from "./ParagraphLink";
import { Chapter } from "../../../../Media/Media";

const Paragraphs: FunctionComponent<{
  paragraphs: Chapter["paragraphs"];
}> = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <ParagraphLink key={paragraph[0]} paragraph={paragraph} />
      ))}
    </>
  );
};

export default Paragraphs;
