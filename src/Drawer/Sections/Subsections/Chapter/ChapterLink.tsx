import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { Chapter } from "../../../../Media/Media";
import { TitleContext } from "../../Sections";
import Link from "../Link/Link";

type SubheadingProps = TypographyProps<"span", { component: "span" }>;

const Subheading = styled(Typography)<SubheadingProps>`
  font-weight: inherit;
  font-size: 1rem;
  line-height: inherit;
  display: block;
`;

const Border = styled.span`
  position: absolute;
  left: -4px;
  width: 4px;
  height: 2.25rem;
  background-color: ${({ theme }) => theme.secondary};
`;

const isActiveElement = <Border />;


const ChapterLink: FunctionComponent<{
  chapter: Chapter;
}> = ({ chapter: { chapterName, startTime, endTime } }) => {
  const title = useContext(TitleContext);

  const pathname = `/${title}`.replace(/\s+/g, "-");

  return (
    <Link
      pathname={pathname}
      startTime={startTime}
      endTime={endTime}
      isActiveElement={isActiveElement}
    >
      
      <Subheading variant="h3" component="span">
        {chapterName}
      </Subheading>
    </Link>
  );
};

export default ChapterLink;
