import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import QuestionButton from "./QuestionButton";
import SearchButton from "./Search/SearchButton";
import { Link, Route, Switch } from "react-router-dom";
import DrawerButton from "./DrawerButton";

const StyledAppBar = styled(MUIAppBar)`
  /*   box-shadow: none; */
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const IconsContainer = styled.span`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled(Typography)`
  margin-right: 1rem;
`;

const AppBar: FunctionComponent = () => {
  return (
    <StyledAppBar color="primary" position="static">
      <StyledToolbar>
        {/* <ToggleButtons /> */}
        <Row>
          <Switch>
            <Route path="/search"></Route>

            <Route>
              <DrawerButton />
            </Route>
          </Switch>

          <Link to="/">
            <Title variant="h6"  
             //@ts-ignore
            component="span" >
              Insert course title here
            </Title>
          </Link>
        </Row>

        <IconsContainer>
          {/*    <QuestionButton /> */}

          <Switch>
            <Route path="/search"></Route>

            <Route>
              <SearchButton />
            </Route>
          </Switch>

          {/*           <IconButton color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        </IconsContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default AppBar;
