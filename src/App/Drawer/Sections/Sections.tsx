import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRecoilValue, atom } from "recoil";
import SectionDropdown from "./SectionDropdown";
import nestedHeadings from "../../Video/Media/nestedHeadings";

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

export const nestedHeadingsState = atom<Concept[]>({
  key: "nestedHeadings",
  default: nestedHeadings,
});

const StyledNav = styled.nav``;

const Sections: FunctionComponent = () => {
  const nestedHeadings = useRecoilValue(nestedHeadingsState);
  return (
    <StyledNav aria-label="Nested list of video links">
      {nestedHeadings.map((concept, index) => (
        <SectionDropdown
          conceptIndex={index}
          key={concept.id}
          concept={concept}
        />
      ))}
    </StyledNav>
  );
};

export default Sections;
