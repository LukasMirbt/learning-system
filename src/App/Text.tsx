import React, {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

interface ContainerProps {
  sc: { isVideoPlayerControlBarShowing: boolean };
}

const Container = styled(Paper)<ContainerProps>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  padding: 0.75rem 1rem;
  box-shadow: none;
`;

const Text: FunctionComponent = () => {
  const [
    isVideoPlayerControlBarShowing,
    setIsVideoPlayerControlBarShowing,
  ] = useState(true);

  /*   useEffect(() => {
    videoPlayerRef.current?.on("userinactive", () => {
      setIsVideoPlayerControlBarShowing(false);
    });

    videoPlayerRef.current?.on("useractive", () => {
      setIsVideoPlayerControlBarShowing(true);
    });
  }, [videoPlayerRef]); */

  return (
    <Container sc={{ isVideoPlayerControlBarShowing }}>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </Container>
  );
};

export default Text;
