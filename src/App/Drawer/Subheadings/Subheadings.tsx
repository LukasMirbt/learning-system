import React, { FunctionComponent, Fragment, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { nestedHeadingsState } from "../HeadingNavigation/HeadingNavigation";
import { useRecoilValue } from "recoil";
import { Switch, Route, useHistory } from "react-router-dom";
import Paragraph from "./Paragraph";
import Chapter from "./Chapter";

const Title = styled(Typography)`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;

const Subheadings: FunctionComponent = () => {
  const nestedHeadings = useRecoilValue(nestedHeadingsState);

  return (
    <>
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
                        <Chapter
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
    </>
  );
};

export default Subheadings;
