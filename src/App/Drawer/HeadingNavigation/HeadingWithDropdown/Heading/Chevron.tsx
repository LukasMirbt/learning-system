import React, { FunctionComponent, useMemo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

interface StyledChevronProps {
  sc: {
    isMatching: boolean;
  };
}

const StyledChevron = styled(FontAwesomeIcon)<StyledChevronProps>`
  font-size: 1rem;

  color: ${({ theme, sc: { isMatching } }) =>
    isMatching === true ? "#1c721c" : "rgba(0, 0, 0, 0.67)"};
`;

const Chevron: FunctionComponent<{
  isShowing: boolean;
  conceptName: string;
}> = ({ isShowing, conceptName }) => {
  const path = useMemo(() => `/${conceptName}`.replace(/\s+/g, "-"), [
    conceptName,
  ]);

  const match = useRouteMatch(path);

  return (
    <StyledChevron
      sc={{ isMatching: match !== null }}
      icon={isShowing === true ? faChevronDown : faChevronRight}
    />
  );
};

export default Chevron;
