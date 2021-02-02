import React, { FunctionComponent, useEffect, useMemo } from "react";
import styled from "styled-components";
import Video from "./Video/Video";
import Drawer from "./Drawer/Drawer";
import AppBar from "./AppBar/AppBar";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Search from "./Search/SearchList/SearchList";
import PageNotFound from "./PageNotFound";

const Main = styled.main`
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

const App: FunctionComponent = () => {
  const history = useHistory();

  useMemo(() => {
    history.replace({ state: null });
  }, [history]);

  return (
    <>
      <AppBar />

      <Main>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>

          <Route exact path="/">
            <Redirect to="/View-from-a-blue-moon" />
          </Route>

          <Route path="/">
            <Drawer />
            <Video />
          </Route>

          <Route path={"*"}>
            <PageNotFound />
          </Route>
        </Switch>
      </Main>
    </>
  );
};

export default App;
