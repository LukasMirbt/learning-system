import React, { FunctionComponent, useContext } from "react";
import styled, { css } from "styled-components";
import dayjs from "dayjs";
import { StyledNavLink } from "./ChapterLink";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { TitleContext } from "../../Sections";
import useIsActive from "./useIsActive";

const isActiveCSS = css`
  font-weight: bold;
`;

interface StyledNavLinkProps {
  sc: {
    isActive: boolean;
  };
}

const StyledParagraphLink = styled(StyledNavLink)<StyledNavLinkProps>`
  border-left: 4px solid transparent;
  margin-left: 2rem;

  ${({ theme, sc: { isActive } }) => (isActive === true ? isActiveCSS : null)}
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

  const formattedTime = `${dayjs
    .duration(startTime * 1000)
    .format("m:ss")} - ${dayjs.duration(endTime * 1000).format("m:ss")}`;

  const title = useContext(TitleContext);

  const isActive = useIsActive({ startTime, endTime });

  return (
    <StyledParagraphLink
      sc={{ isActive }}
      exact
      to={{
        pathname: `/${title}`.replace(/\s+/g, "-"),
        state: { time: startTime },
      }}
    >
      <Name variant="h4" component="span">
        {name}
      </Name>

      <Time>{formattedTime}</Time>
    </StyledParagraphLink>
  );
};

export default ParagraphLink;
