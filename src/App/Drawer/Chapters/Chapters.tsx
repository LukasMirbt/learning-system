import React, { FunctionComponent, Fragment } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { nestedHeadingsState } from "../Sections/Sections";
import { useRecoilValue } from "recoil";
import { Switch, Route } from "react-router-dom";
import Paragraph from "./ParagraphLink";
import ChapterLink from "./ChapterLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  padding-top: 0.5rem;
  margin-top: 0.5rem;
`;

const Title = styled(Typography)`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;

const Chapters: FunctionComponent = () => {
  const nestedHeadings = useRecoilValue(nestedHeadingsState);

  return (
    <Container>
      <Title variant="h2">Chapters</Title>
      <Switch>
        {nestedHeadings.map(({ conceptName, conceptHeadings }) => {
          return conceptHeadings.map(
            ({ heading, startTime, endTime, subheadings }) => {
              return (
                <Route
                  key={heading}
                  path={`/${conceptName}/${heading}`.replace(/\s+/g, "-")}
                >
                  {subheadings.map(
                    (
                      {
                        subheading: [
                          subheadingName,
                          subheadingStartTime,
                          subheadingEndTime,
                        ],
                        paragraphs,
                      },
                      subheadingIndex
                    ) => (
                      <Fragment key={subheadingName}>
                        <ChapterLink
                          conceptName={conceptName}
                          heading={heading}
                          subheadingName={subheadingName}
                          subheadingIndex={subheadingIndex}
                          subheadingStartTime={subheadingStartTime}
                          subheadingEndTime={subheadingEndTime}
                        />

                        {paragraphs.map(
                          ([
                            paragraphName,
                            paragraphStartTime,
                            paragraphEndTime,
                          ]) => (
                            <Paragraph
                              key={paragraphName}
                              name={paragraphName}
                              startTime={paragraphStartTime}
                              endTime={paragraphEndTime}
                              conceptName={conceptName}
                              heading={heading}
                              subheadingName={subheadingName}
                            />
                          )
                        )}
                      </Fragment>
                    )
                  )}
                </Route>
              );
            }
          );
        })}
      </Switch>
    </Container>
  );
};

export default Chapters;
