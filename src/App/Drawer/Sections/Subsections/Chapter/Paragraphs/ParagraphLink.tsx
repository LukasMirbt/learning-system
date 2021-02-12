import React, { FunctionComponent, useContext } from "react";
import styled, { css } from "styled-components";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { TitleContext } from "../../../Sections";
import Link from "../../Link/Link";

type NameProps = TypographyProps<"span", { component: "span" }>;

const Name = styled(Typography)<NameProps>`
  font-weight: inherit;
  line-height: inherit;
  font-size: 1rem;
  display: block;
`;

const linkCSS = css`
  border-left: 4px solid transparent;
  margin-left: 2rem;
`;

const isActiveCSS = css`
  font-weight: bold;
`;

const ParagraphLink: FunctionComponent<{
  paragraph: [name: string, startTime: number, endTime: number];
}> = ({ paragraph }) => {
  const [name, startTime, endTime] = paragraph;

  const title = useContext(TitleContext);

  const pathname = `/${title}`.replace(/\s+/g, "-");

  return (
    <Link
      pathname={pathname}
      startTime={startTime}
      endTime={endTime}
      linkCSS={linkCSS}
      isActiveCSS={isActiveCSS}
    >
      <Name variant="h4" component="span">
        {name}
      </Name>
    </Link>
  );
};

export default ParagraphLink;
