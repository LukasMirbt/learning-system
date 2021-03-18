import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Chapter from "./Chapter/Chapter";
import Accordion from "../../../Accordion/Accordion";
import { Section } from "../../../Media/Media";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const headerCSS = `
  margin-left: 1rem;
  width: auto;
`;

const Subsections: FunctionComponent<{
  sections: Section[];
}> = ({ sections }) => {
  return (
    <>
      {sections.map(({ sectionName, chapters }, index) => {
        const ID = `${sectionName}${index}`.replace(/\s+/g, "-");
        return (
          <Accordion key={ID} title={sectionName} ID={ID} headerCSS={headerCSS}>
            <Container>
              {chapters.map((chapter) => (
                <Chapter key={chapter.chapterName} chapter={chapter} />
              ))}
            </Container>
          </Accordion>
        );
      })}
    </>
  );
};

export default Subsections;
