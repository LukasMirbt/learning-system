import React, { FunctionComponent } from "react";
import styled from "styled-components";
import dayjs from "../../../../dayjsFull";

const Time = styled.span`
  display: flex;
  font-size: 1rem;
`;

const VideoTitle = styled.span`
  display: flex;
  font-size: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const EndColumn: FunctionComponent<{
  startTime: number;
  endTime: number;
  videoTitle: string;
}> = ({ startTime, endTime, videoTitle }) => {
  const formattedTime = `${dayjs
    .duration(startTime * 1000)
    .format("m:ss")} - ${dayjs.duration(endTime * 1000).format("m:ss")}`;

  return (
    <Container>
      <Time>{formattedTime}</Time>
      <VideoTitle>{videoTitle}</VideoTitle>
    </Container>
  );
};

export default EndColumn;
