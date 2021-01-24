import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Video from "./Video/Video";
import Drawer from "./Drawer/Drawer";
import Sidebar from "./Drawer/Subheadings/Sidebar";
import AppBar from "./AppBar/AppBar";
import { Route, Switch, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nestedHeadingsState } from "./Drawer/HeadingNavigation/HeadingNavigation";
import Search from "./Search/Search";
import usePathnameToSetVideoTimeOnMount from "./usePathnameToSetVideoTimeOnMount";

/* const { remote, ipcRenderer } = window.require("electron"); */

const Main = styled.main`
  display: flex;
  justify-content: space-between;

  position: relative;
  width: 100%;
  height: calc(100% - 4rem);
`;

const Container = styled.div`
  display: flex;
  width: calc(100% - 241px);
`;

const App: FunctionComponent = () => {
  const nestedHeadings = useRecoilValue(nestedHeadingsState);

  usePathnameToSetVideoTimeOnMount();

  const redirectPath = `${nestedHeadings[0].conceptName}/${nestedHeadings[0].conceptHeadings[0].heading}`.replace(
    /\s+/g,
    "-"
  );

  return (
    <>
      <AppBar />

      <Main>
        <Switch>
          <Route exact path="/">
            <Redirect to={redirectPath} />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route>
            <Drawer />

            <Video />
          </Route>
        </Switch>
      </Main>
    </>
  );
};

export default App;
