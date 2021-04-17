import React, { createContext, FunctionComponent, Fragment } from "react";
import { useRecoilValue, atom } from "recoil";
import Accordion from "../../Accordion/Accordion";
import Subsections from "./Subsections/Subsections";
import viewFromABlueMoonStructure from "../../Media/View-from-a-blue-moon/videoStructure";
import elephantsDreamStructure from "../../Media/Elephants-dream/videoStructure";
import { VideoStructure } from "../../Media/Media";

type NonEmptyArray<T> = [T, ...T[]];

export type SubheadingsType = {
  subheading: [subheadingName: string, startTime: number, endTime: number];
  paragraphs: [paragraphName: string, startTime: number, endTime: number][];
}[];

export interface Concept {
  id: number;
  conceptName: string;
  startTime: number;
  endTime: number;
  conceptHeadings: NonEmptyArray<{
    heading: string;
    startTime: number;
    endTime: number;
    subheadings: SubheadingsType;
  }>;
}

export const videoStructuresState = atom<VideoStructure[]>({
  key: "videoStructures",
  default: [elephantsDreamStructure, viewFromABlueMoonStructure],
});

const titleCSS = `
  font-weight: 700;
`;

export const TitleContext = createContext("");

const Sections: FunctionComponent = () => {
  const videoStructures = useRecoilValue(videoStructuresState);
  return (
    <>
      {videoStructures.map(({ title, sections }, index) => {
        const ID = `${title}${index}`.replace(/\s+/g, "-");
        return (
          <Fragment key={ID}>
            <TitleContext.Provider key={ID} value={title}>
              <Accordion
                key={ID}
                title={title}
                ID={ID}
                isExpandedInitially={index === 0}
                titleCSS={titleCSS}
              >
                <Subsections sections={sections} />
              </Accordion>
            </TitleContext.Provider>
          </Fragment>
        );
      })}
    </>
  );
};

export default Sections;
