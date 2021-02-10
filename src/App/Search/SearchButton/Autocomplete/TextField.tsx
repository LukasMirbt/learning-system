import React, {
  FunctionComponent,
  useRef,
  useEffect,
  memo,
  ChangeEvent,
} from "react";
import styled, { css } from "styled-components";
import {
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { AutocompleteRenderInputParams } from "@material-ui/lab/Autocomplete";
import MUITextField from "@material-ui/core/TextField";
import { searchTermState } from "../../Search";
import ClearInputButton from "../../SearchList/Header/Input/InputItems/ClearInputButton";
import SearchIcon from "../../SearchList/Header/Input/InputItems/SearchIcon";

export const searchLabelText = "Search in sections and video subtitles";

const StyledTextField = styled(MUITextField)`
  .Input {
    border: ${({ theme }) => `2px solid ${theme.primary}`};
    height: 56px;
    width: 100%;
    font-size: 1.25rem;
    border-radius: 4px;
    font-family: ${({ theme }) => theme.typography.fontFamily};

    &[type="search"] {
      padding: 0;
      padding-left: 2.5rem;
      padding-right: 2.75rem;
    }

    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
      appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  .InputLabel {
    margin-bottom: 0.5rem;

    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;

    ${({
      theme: {
        typography: { h3: variant },
      },
    }) => css`
      font-family: ${variant.fontFamily};
      font-weight: ${variant.fontWeight};
      line-height: ${variant.lineHeight};
      letter-spacing: ${variant.letterSpacing};
    `}
  }
`;

const InputLabelProps = {
  shrink: false,
  variant: "standard",
  disableAnimation: true,
} as const;

const startAdornment = <SearchIcon />;

const TextField: FunctionComponent<{
  params: AutocompleteRenderInputParams;
}> = ({ params }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const setSearchTerm = useSetRecoilState(searchTermState);

  return (
    <StyledTextField
      {...params}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      inputRef={inputRef}
      label={searchLabelText}
      margin="normal"
      variant="standard"
      InputProps={{
        ...params.InputProps,
        type: "search",
        startAdornment,
      }}
      inputProps={{
        ...params.inputProps,
        maxLength: 64,
      }}
      InputLabelProps={InputLabelProps}
    />
  );
};

export default TextField;
