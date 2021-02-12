import React, { FunctionComponent, ReactNode } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { useRecoilState } from "recoil";
import { isDrawerOpenState } from "../../../TemporaryDrawer";
import Time from "./Time";
import useIsActive from "./useIsActive";

interface StyledChapterLinkProps {
  sc: {
    isActive: boolean;
    isActiveCSS?: FlattenSimpleInterpolation;
    linkCSS?: FlattenSimpleInterpolation;
  };
}

const StyledLink = styled(ListItem)<StyledChapterLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-height: 2.25rem;

  margin-left: 1rem;
  padding: 0.25rem 1rem;

  font-weight: inherit;
  font-size: 0.875rem;

  ${({ sc: { linkCSS } }) => linkCSS};

  ${({ sc: { isActive, isActiveCSS } }) =>
    isActive === true ? isActiveCSS : null};
`;

const Link: FunctionComponent<{
  pathname: string;
  startTime: number;
  endTime: number;
  children: ReactNode;
  linkCSS?: FlattenSimpleInterpolation;
  isActiveCSS?: FlattenSimpleInterpolation;
  isActiveElement?: ReactNode;
}> = ({
  pathname,
  startTime,
  endTime,
  children,
  linkCSS,
  isActiveCSS,
  isActiveElement,
}) => {
  const history = useHistory();

  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState);

  const isActive = useIsActive({ startTime, endTime, pathname });

  return (
    <StyledLink
      sc={{ isActive, isActiveCSS, linkCSS }}
      button
      onClick={() => {
        history.push(pathname, {
          time: startTime,
        });
        if (isDrawerOpen === true) {
          setIsDrawerOpen(false);
        }
      }}
    >
      {children}
      <Time startTime={startTime} endTime={endTime} />

      {isActive === true && isActiveElement}
    </StyledLink>
  );
};

export default Link;
