import React, { FunctionComponent, useState, useCallback } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Timer from "./Timer";
import Choices from "./Choices";
import Paper from "@material-ui/core/Paper";
import { useRecoilState, useRecoilValue, atom } from "recoil";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

export const randomQuestionsState = atom({
  key: "randomQuestionsState",
  default: [
    {
      question: "What is life?",
      choices: [
        "Baby, don't hurt me.",
        "No more.",
        "No, I don't know why you're not fair.",
        "I give you my love, but you don't care.",
        "So what is right and what is wrong?",
      ],
    },
  ],
});

export const randomQuestionIndexState = atom<number | null>({
  key: "randomQuestionIndexState",
  default: null,
});

const duration = 10000;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  outline: none;

  z-index: 1;
  margin-top: 0.5rem;

  background-color: white;
`;

const StyledQuestion = styled(Typography)`
  display: flex;

  height: 2rem;
  margin-top: 0.5rem;

  font-weight: 500;
  color: black;
`;

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
  border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  height: 2.5rem;
`;

const QuestionDialog: FunctionComponent<{}> = () => {
  const [isResultShowing, setIsResultShowing] = useState(false);

  const [randomQuestionIndex, setRandomQuestionIndex] = useRecoilState(
    randomQuestionIndexState
  );
  const randomQuestions = useRecoilValue(randomQuestionsState);

  const onTimerEnd = useCallback(() => {
    setIsResultShowing(true);
  }, []);

  return (
    <StyledModal
      open={true}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>
        <StyledQuestion variant="subtitle1">
          {randomQuestions[randomQuestionIndex!].question}
        </StyledQuestion>

        <Choices
          isResultShowing={isResultShowing}
          setIsResultShowing={setIsResultShowing}
        />

        {isResultShowing === false ? (
          <Timer
            isTimerCanceled={isResultShowing}
            duration={duration}
            onTimerEnd={onTimerEnd}
          />
        ) : (
          <StyledButton
            onClick={() => {
              setRandomQuestionIndex(null);
            }}
          >
            Close
          </StyledButton>
        )}
      </Container>
    </StyledModal>
  );
};

export default QuestionDialog;
