import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Searchable } from "../../../Media/Media";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 0.25rem;

  visibility: hidden;

  .MuiAutocomplete-option[data-focus="true"] > & {
    visibility: visible;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

interface TextProps {
  sc: {
    isCue: boolean;
  };
}

type SubtitleProps = TypographyProps<"span", { component: "span" }>;

const Text = styled.span<TextProps>`
  ${({ sc: { isCue } }) =>
    isCue === true
      ? css`
          font-weight: normal;
          font-size: 1rem;
        `
      : css`
          /*         font-weight: bold;
          font-size: 1.125rem; */
          font-weight: normal;
          font-size: 1rem;
        `};
`;

const VideoTitle = styled(Typography)<SubtitleProps>`
  margin-top: 0.25rem;
`;

const Type = styled(Typography)<SubtitleProps>`
  margin-top: 0.25rem;
`;

const ListItem: FunctionComponent<{
  item: Searchable;
}> = ({ item: { text, videoTitle, isCue } }) => {
  return (
    <>
      <Column>
        <Text sc={{ isCue }}>{text}</Text>

        {/*         <VideoTitle component="span" variant="subtitle1">
          {videoTitle}
        </VideoTitle> */}

        <Type component="span" variant="subtitle2">
          {`${videoTitle} - ${isCue === true ? "Video subtitle" : "Section"}`}
        </Type>
      </Column>

      <ArrowIcon icon={faArrowLeft} />
    </>
  );
};

export default ListItem;
