import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { searchResultsState, searchTermState } from "../../Search";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import MUIAutocomplete, {
  AutocompleteRenderInputParams,
} from "@material-ui/lab/Autocomplete";
import TextField from "./TextField";
import ResultListContainer from "./ResultListContainer";
import PaperComponent from "./PaperComponent";
import Fuse from "fuse.js";
import { Searchable } from "../../../Media/Media";
import { isSearchOpenState } from "../ButtonWithSearchDialog";
import OptionItems from "./OptionItems";
import { useHistory } from "react-router-dom";

export const searchAutocompleteInputID = "search-autocomplete";
export const searchAutocompleteLabelID = `${searchAutocompleteInputID}-label`;

export const numberOfResultsToShow = 5;

const autocompleteProps = {
  fullWidth: true,
  autoHighlight: true,
  handleHomeEndKeys: true,
  freeSolo: true,
  open: true,
  value: undefined,
  id: searchAutocompleteInputID,
} as const;

const isValidOption = (option: unknown) =>
  option !== undefined && option !== null && typeof option !== "string";

const renderInput = (params: AutocompleteRenderInputParams) => (
  <TextField params={params} />
);

const renderOption = (option: unknown, e2: any) => {
  return isValidOption(option) ? (
    <OptionItems item={(option as Fuse.FuseResult<Searchable>).item} />
  ) : null;
};

const getOptionLabel = (option: unknown) => {
  return isValidOption(option)
    ? (option as Fuse.FuseResult<Searchable>).item.text
    : "";
};

const filterOptions = (options: unknown[]) => options;

const StyledAutocomplete = styled(MUIAutocomplete)`
  .MuiAutocomplete-inputRoot {
    display: flex;
    align-items: center;
    padding-right: 0;
  }

  .MuiAutocomplete-clearIndicator {
    margin-right: 0;
    padding: 0.5rem;
  }

  .MuiAutocomplete-endAdornment {
    top: unset;
    right: 0;
    margin-right: calc(0.25rem + 2px);
  }

  .MuiFormControl-marginNormal {
    margin-bottom: 0;
  }

  .MuiSvgIcon-fontSizeSmall {
    font-size: 1.375rem;
  }

  overflow-y: hidden;
`;

const Autocomplete: FunctionComponent = () => {
  const setIsSearchOpen = useSetRecoilState(isSearchOpenState);

  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  const searchResults = useRecoilValue(searchResultsState);

  const history = useHistory();

  return (
    <StyledAutocomplete
      {...autocompleteProps}
      inputValue={searchTerm}
      onClose={(event, reason) => {
        if (reason === "escape") {
          setIsSearchOpen(false);
        }
      }}
      onInputChange={(e, value, reason: string) => {
        if (reason === "clear") {
          setSearchTerm("");
        }
      }}
      onChange={(event, option) => {
        if (isValidOption(option) === false) {
          return;
        }
        const {
          videoTitle,
          startTime,
        } = (option as Fuse.FuseResult<Searchable>).item;

        history.push(`/${videoTitle.replace(/\s+/g, "-")}`, {
          time: startTime,
        });
        setIsSearchOpen(false);
      }}
      options={searchResults.slice(0, numberOfResultsToShow)}
      renderInput={renderInput}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      PopperComponent={ResultListContainer}
      PaperComponent={PaperComponent}
    />
  );
};

export default Autocomplete;
