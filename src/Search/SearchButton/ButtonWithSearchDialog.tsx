import React, { FunctionComponent } from "react";
import styled from "styled-components";
import SearchDialog from "./SearchDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { atom, useRecoilState } from "recoil";
import Button from "@material-ui/core/Button";
import { Location } from "@reach/router";

export const isSearchOpenState = atom({
  key: "isSearchOpen",
  default: false,
});

const Container = styled.span`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
`;

const StyledButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.24);
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.16);
  }

  .MuiButton-label {
    margin-right: 0.5rem;
  }
`;

const Search: FunctionComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useRecoilState(isSearchOpenState);

  return (
    <Location>
      {({ location }) =>
        location.pathname.includes("/search") === false ? (
          <Container>
            <StyledButton
              aria-haspopup="dialog"
              onClick={() => {
                setIsSearchOpen(true);
              }}
              variant="outlined"
              color="inherit"
              startIcon={<SearchIcon icon={faSearch} />}
            >
              Search
            </StyledButton>

            {isSearchOpen === true && <SearchDialog />}
          </Container>
        ) : null
      }
    </Location>
  );
};

export default Search;