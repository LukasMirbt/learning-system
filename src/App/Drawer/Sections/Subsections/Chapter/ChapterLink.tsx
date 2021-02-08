import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import dayjs from "../../../../dayjsFull";
import { Chapter } from "../../../../Media/Media";
import { TitleContext } from "../../Sections";
import useIsActive from "./useIsActive";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";

export const StyledChapterLink = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-height: 2.25rem;

  margin-left: 1rem;
  padding: 0.25rem 1rem;

  font-weight: inherit;
  font-size: 0.875rem;
`;

type SubheadingProps = TypographyProps<"span", { component: "span" }>;

const Subheading = styled(Typography)<SubheadingProps>`
  font-weight: inherit;
  font-size: 1rem;
  line-height: inherit;
  display: block;
`;

const Time = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
`;

const Border = styled.span`
  position: absolute;
  left: -4px;
  width: 4px;
  height: 2.25rem;
  background-color: ${({ theme }) => theme.secondary};
`;

const ChapterLink: FunctionComponent<{
  chapter: Chapter;
}> = ({ chapter: { chapterName, startTime, endTime } }) => {
  const title = useContext(TitleContext);

  const formattedStartTime = dayjs
    .duration(startTime * 1000)
    .format(startTime >= 3600 ? "H:mm:ss" : "mm:ss");

  const formattedEndTime = dayjs
    .duration(endTime * 1000)
    .format(endTime >= 3600 ? "H:mm:ss" : "mm:ss");

  const history = useHistory();

  const pathname = `/${title}`.replace(/\s+/g, "-");

  const isActive = useIsActive({ startTime, endTime, pathname });

  return (
    <StyledChapterLink
      button
      onClick={() => {
        history.push(pathname, {
          time: startTime,
        });
      }}
    >
      <Subheading variant="h3" component="span">
        {chapterName}
      </Subheading>

      <Time>{`${formattedStartTime} - ${formattedEndTime}`}</Time>

      {isActive === true && <Border />}
    </StyledChapterLink>
  );
};

export default ChapterLink;
