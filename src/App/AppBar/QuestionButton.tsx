import React, { FunctionComponent } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import { randomQuestionIndexState } from "../Video/QuestionDialog/QuestionDialog";

const QuestionIcon = styled(FontAwesomeIcon)`
  color: white;
`;

const AppBar: FunctionComponent = () => {
  const setRandomQuestionsIndex = useSetRecoilState(randomQuestionIndexState);
  return (
    <IconButton
      onClick={() => {
        setRandomQuestionsIndex(0);
      }}
    >
      <QuestionIcon icon={faQuestionCircle} />
    </IconButton>
  );
};

export default AppBar;
