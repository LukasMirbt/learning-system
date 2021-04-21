import React, { FunctionComponent, ReactNode } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDrawerOpenState } from "../../../TemporaryDrawer";
import Time from "./Time";
import useIsActive, { isPathnameActive } from "./useIsActive";
import { videoState } from "../../../../Video/VideoElement/useVideoState/useVideoState";
import { navigate } from "gatsby";

type StyledChapterLinkProps = {
  sc: {
    isActive: boolean;
    isActiveCSS?: string | FlattenSimpleInterpolation;
    linkCSS?: string | FlattenSimpleInterpolation;
  };
};

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

  width: unset;

  ${({ sc: { linkCSS } }) => linkCSS};

  ${({ sc: { isActive, isActiveCSS } }) =>
    isActive === true ? isActiveCSS : null};
`;

const Link: FunctionComponent<{
  pathname: string;
  startTime: number;
  endTime: number;
  children: ReactNode;
  linkCSS?: string | FlattenSimpleInterpolation;
  isActiveCSS?: string | FlattenSimpleInterpolation;
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
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState);

  const isActive = useIsActive({ startTime, endTime, pathname });

  const [{ videoPathname }, setState] = useRecoilState(videoState);

  return (
    <StyledLink
      button
      sc={{ isActive, isActiveCSS, linkCSS }}
      onClick={async () => {
        if (isPathnameActive({ pathname, videoPathname }) === false) {
          await navigate(pathname);
        }

        setState({
          time: startTime,
          videoPathname: pathname,
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
