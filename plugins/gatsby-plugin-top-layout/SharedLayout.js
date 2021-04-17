import React from "react";
import styled from "styled-components";
import AppBar from "../../src/AppBar/AppBar";
import Drawer from "../../src/Drawer/Drawer";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  width: 100%;

  height: calc(100% - 56px);

  @media (min-width: 0px) and (orientation: landscape) {
    height: calc(100% - 48px);
  }

  @media (min-width: 600px) {
    height: calc(100% - 64px);
  }
`;

const SharedLayout = (props) => {
  return (
    <>
      <AppBar />
      <Container>
        <Drawer />
        {props.children}
      </Container>
    </>
  );
};

export default SharedLayout;
