import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
`;

interface StyledLinearProgressProps {
  sc: {
    isTimerCanceled: boolean;
    hasTimerEnded: boolean;
  };
}

const StyledLinearProgress = styled(LinearProgress)<StyledLinearProgressProps>`
  height: 10px;
  width: calc(100% + 0.125rem);

  &.MuiLinearProgress-colorPrimary {
    background-color: #a2af9f;
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: #005c96;
  }

  .MuiLinearProgress-bar1Determinate {
    transition: ${({ sc: { hasTimerEnded, isTimerCanceled } }) =>
      hasTimerEnded === true || isTimerCanceled === true
        ? "none"
        : "transform 1000ms linear"};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 24px;
    height: 24px;
  }
  z-index: 1;
  margin-right: -0.125rem;
  color: black;
`;

const Timer: FunctionComponent<{
  duration: number;
  onTimerEnd: () => void;
  isTimerCanceled: boolean;
}> = ({ duration, onTimerEnd, isTimerCanceled }) => {
  const [progress, setProgress] = useState(100);

  const timerStateRef = useRef({
    isLastInterval: false,
    hasTimerEnded: false,
  });

  useEffect(() => {
    if (isTimerCanceled === true) {
      setProgress(0);
      return;
    }

    const timerState = timerStateRef.current;

    const afterInterval = () => {
      setProgress((oldProgress) => {
        const step = (100 / duration) * 1000;
        const newProgress = Math.max(oldProgress - step, 0);

        if (newProgress === 0) {
          timerState.isLastInterval = true;
        }

        return newProgress;
      });
    };

    const timer = setInterval(() => {
      if (timerState.isLastInterval === true) {
        timerState.hasTimerEnded = true;

        clearInterval(timer);
        onTimerEnd();
      } else {
        afterInterval();
      }
    }, 1000);

    afterInterval();

    return () => {
      clearInterval(timer);
    };
  }, [duration, onTimerEnd, isTimerCanceled]);

  return (
    <Container>
      {/*   <Icon icon={faClock} /> */}
      <StyledLinearProgress
        sc={{
          isTimerCanceled,
          hasTimerEnded: timerStateRef.current.hasTimerEnded,
        }}
        variant="determinate"
        value={progress}
      />
    </Container>
  );
};

export default Timer;
