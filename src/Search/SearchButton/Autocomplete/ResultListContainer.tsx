import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { PopperProps } from "@material-ui/core/Popper";
import SearchItems from "./SearchItems/SearchItems";

const Container = styled.div`
  width: 100%;

  .MuiAutocomplete-option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 3rem;

    padding: 0.25rem 1rem;

    border-radius: 4px;

    margin-bottom: 0.25rem;

    &:first-child {
      margin-top: 0.5rem;
    }

    &:last-child {
      margin-bottom: 1rem;
    }
  }

  .MuiAutocomplete-option[data-focus="true"] {
    background-color: rgba(0, 0, 0, 0.08);

    &:hover {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }

  .MuiAutocomplete-listbox {
    padding: 0;
    max-height: unset;
  }
`;

const ResultListContainer: FunctionComponent<PopperProps> = (props) => {
  return (
    <Container>
      {props.children}
      <SearchItems />
    </Container>
  );
};

export default ResultListContainer;
