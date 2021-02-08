import React, { FunctionComponent, MutableRefObject } from "react";
import ClearInputButton from "./ClearInputButton";
import SearchIcon from "./SearchIcon";

const InputItems: FunctionComponent<{
  inputRef: MutableRefObject<HTMLInputElement | null>;
}> = ({ inputRef }) => {
  return (
    <>
      <SearchIcon />

      <ClearInputButton inputRef={inputRef} />
    </>
  );
};

export default InputItems;
