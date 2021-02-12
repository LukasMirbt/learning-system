import React, { FunctionComponent } from "react";
import styled from "styled-components";
import dayjs from "../../../../dayjsFull";

const Time = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
`;

const ChapterLink: FunctionComponent<{
  startTime: number;
  endTime: number;
}> = ({ startTime, endTime }) => {
  const formattedStartTime = dayjs
    .duration(startTime * 1000)
    .format(startTime >= 3600 ? "H:mm:ss" : "mm:ss");

  const formattedEndTime = dayjs
    .duration(endTime * 1000)
    .format(endTime >= 3600 ? "H:mm:ss" : "mm:ss");

  return <Time>{`${formattedStartTime} - ${formattedEndTime}`}</Time>;
};

export default ChapterLink;
