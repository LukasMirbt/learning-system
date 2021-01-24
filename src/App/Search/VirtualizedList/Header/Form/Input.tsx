import React, { FunctionComponent, useEffect, MutableRefObject } from "react";
import { searchTermState } from "../../../../AppBar/Search/SearchItems";
import { useRecoilState } from "recoil";
import ClearInputButton from "../../../../AppBar/Search/Input/ClearInputButton";
import { StyledInput } from "../../../../AppBar/Search/Input/Input";

const Input: FunctionComponent<{
  inputRef: MutableRefObject<HTMLInputElement | null>;
}> = ({ inputRef }) => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <>
      <StyledInput
        id="search-input"
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        aria-autocomplete="list"
        aria-labelledby="search-label"
        /*  aria-label="Search in videos and headings" */
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type="search"
        placeholder="Search in videos or chapters"
        maxLength={64}
      />
      {searchTerm !== "" && (
        <ClearInputButton inputRef={inputRef} setSearchTerm={setSearchTerm} />
      )}
    </>
  );
};

export default Input;
