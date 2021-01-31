import React, { FunctionComponent, useMemo, useContext } from "react";
import styled, { css } from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Chapter } from "../../../../Media/Media";
import { TitleContext } from "../../Sections";
import { ClickableHeadingStyle } from "../../../../common";
import useIsActive from "./useIsActive";

export const StyledNavLink = styled(NavLink)`
  ${ClickableHeadingStyle}
  padding-left: 1rem;
  width: unset;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-left: 1rem;
  font-weight: inherit;
  font-size: 0.875rem;

  position: relative;
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

  useMemo(() => {
    dayjs.extend(duration);
  }, []);

  const formattedTime = `${dayjs
    .duration(startTime * 1000)
    .format("m:ss")} - ${dayjs.duration(endTime * 1000).format("m:ss")}`;

  const isActive = useIsActive({ startTime, endTime });

  return (
    <StyledNavLink
      to={{
        pathname: `/${title}`.replace(/\s+/g, "-"),
        state: { time: startTime },
      }}
    >
      <Subheading variant="h3" component="span">
        {chapterName}
      </Subheading>

      <Time>{formattedTime}</Time>

      {isActive === true && <Border />}
    </StyledNavLink>
  );
};

export default ChapterLink;
