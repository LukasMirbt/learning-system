import React, { FunctionComponent, useState, useContext } from "react";
import styled, { css } from "styled-components";
import HeadingNavigation from "./HeadingNavigation/HeadingNavigation";
import Typography from "@material-ui/core/Typography";
import Subheadings from "./Subheadings/Subheadings";
import TemporaryDrawer from "@material-ui/core/Drawer";
import Items from "./Items";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeContext } from "styled-components";
import { useRecoilState, atom } from "recoil";

export const isDrawerOpenState = atom({
  key: "isDrawerOpen",
  default: false,
});

const Drawer: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useRecoilState(isDrawerOpenState);

  const theme = useContext(ThemeContext);

  const isXLScreen = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <>
      {isXLScreen === true ? (
        <Items />
      ) : (
        <TemporaryDrawer
          anchor="left"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Items />
        </TemporaryDrawer>
      )}
    </>
  );
};

export default Drawer;
