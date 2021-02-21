import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  && {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};

    position: absolute;

    margin-right: 0.5rem;
    padding-left: calc(0.5rem + 2px);
  }
`;

const SearchIcon: FunctionComponent = () => <StyledIcon icon={faSearch} />;

export default SearchIcon;
