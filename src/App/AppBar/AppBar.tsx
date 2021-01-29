import React, { FunctionComponent } from "react";
import styled from "styled-components";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchButton from "../Search/SearchButton/SearchButton";
import DrawerButton from "./DrawerButton";
import HomeLink from "./HomeLink";

const StyledAppBar = styled(MUIAppBar)`
  /*   box-shadow: none; */
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const AppBar: FunctionComponent = () => {
  return (
    <StyledAppBar color="primary" position="static">
      <StyledToolbar>
        <Row>
          <DrawerButton />

          <HomeLink />
        </Row>

        <SearchButton />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default AppBar;
