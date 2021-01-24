import React, {
  FunctionComponent,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import styled, { css } from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const choices = [
  "Baby, don't hurt me.",
  "No more.",
  "No, I don't know why you're not fair.",
  "I give you my love, but you don't care.",
  "So what is right and what is wrong?",
];

const answerIndex = 3;

const StyledList = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
`;

interface StyledChoiceProps {
  sc: {
    index: number;
    answerIndex: number;
    selectedIndex: number | undefined;
    isResultShowing: boolean;
  };
}

const StyledChoice = styled(ListItem)<StyledChoiceProps>`
  min-height: 2.25rem;
  ${({ sc: { index, answerIndex, selectedIndex, isResultShowing } }) => {
    if (isResultShowing === true) {
      if (index === answerIndex) {
        if (index === selectedIndex) {
          return css`
            color: green;
            background-color: rgba(0, 0, 0, 0.08);
          `;
        } else {
          return css`
            color: green;
          `;
        }
      } else if (index === selectedIndex) {
        return css`
          color: red;
          background-color: rgba(0, 0, 0, 0.08);
        `;
      }
    } else {
      return css`
        color: unset;
      `;
    }
  }};
`;

const Choices: FunctionComponent<{
  isResultShowing: boolean;
  setIsResultShowing: Dispatch<SetStateAction<boolean>>;
}> = ({ isResultShowing, setIsResultShowing }) => {
  const selectedIndexRef = useRef<number | undefined>(undefined);

  const onChoiceClick = (index: number) => () => {
    selectedIndexRef.current = index;
    setIsResultShowing(true);
  };

  const onIDontKnowClick = () => {
    setIsResultShowing(true);
  };

  const onIDontWantToAnswerClick = () => {
    setIsResultShowing(true);
  };

  return (
    <StyledList>
      {choices.map((choice, index) => (
        <StyledChoice
          key={choice}
          sc={{
            index,
            answerIndex,
            selectedIndex: selectedIndexRef.current,
            isResultShowing,
          }}
          button={(isResultShowing === false) as any}
          onClick={isResultShowing === false ? onChoiceClick(index) : undefined}
        >
          {`${index + 1}. ${choice}`}
        </StyledChoice>
      ))}

      <StyledChoice
        sc={{
          index: -1,
          answerIndex,
          selectedIndex: selectedIndexRef.current,
          isResultShowing,
        }}
        button={(isResultShowing === false) as any}
        onClick={isResultShowing === false ? onIDontKnowClick : undefined}
      >
        <span style={{ visibility: "hidden" }}>0.</span> I don't know.
      </StyledChoice>

      <StyledChoice
        sc={{
          index: -2,
          answerIndex,
          selectedIndex: selectedIndexRef.current,
          isResultShowing,
        }}
        button={(isResultShowing === false) as any}
        onClick={
          isResultShowing === false ? onIDontWantToAnswerClick : undefined
        }
      >
        <span style={{ visibility: "hidden" }}>0.</span> I don't want to answer.
      </StyledChoice>
    </StyledList>
  );
};

export default Choices;
