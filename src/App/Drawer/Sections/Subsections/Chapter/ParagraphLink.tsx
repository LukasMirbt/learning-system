import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { StyledChapterLink } from "./ChapterLink";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { TitleContext } from "../../Sections";
import useIsActive from "./useIsActive";
import { useHistory } from "react-router-dom";

interface StyledNavLinkProps {
  sc: {
    isActive: boolean;
  };
}

const StyledParagraphLink = styled(StyledChapterLink)<StyledNavLinkProps>`
  border-left: 4px solid transparent;
  margin-left: 2rem;

  font-weight: ${({ sc: { isActive } }) =>
    isActive === true ? "bold" : "normal"};
`;

type NameProps = TypographyProps<"span", { component: "span" }>;

const Name = styled(Typography)<NameProps>`
  font-weight: inherit;
  line-height: inherit;
  font-size: 1rem;
  display: block;
`;

const Time = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
`;

const ParagraphLink: FunctionComponent<{
  paragraph: [name: string, startTime: number, endTime: number];
}> = ({ paragraph }) => {
  const [name, startTime, endTime] = paragraph;

  const formattedStartTime = dayjs
    .duration(startTime * 1000)
    .format(startTime >= 3600 ? "H:mm:ss" : "mm:ss");

  const formattedEndTime = dayjs
    .duration(endTime * 1000)
    .format(endTime >= 3600 ? "H:mm:ss" : "mm:ss");

  const title = useContext(TitleContext);

  const pathname = `/${title}`.replace(/\s+/g, "-");

  const isActive = useIsActive({ startTime, endTime, pathname });

  const history = useHistory();

  return (
    <StyledParagraphLink
      button
      sc={{ isActive }}
      onClick={() => {
        history.push(pathname, {
          time: startTime,
        });
      }}
    >
      <Name variant="h4" component="span">
        {name}
      </Name>

      <Time>{`${formattedStartTime} - ${formattedEndTime}`}</Time>
    </StyledParagraphLink>
  );
};

export default ParagraphLink;
