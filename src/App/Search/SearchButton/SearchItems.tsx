import React, { FunctionComponent, useEffect } from "react";
import Form from "./Form";
import ResultList from "./ResultList/ResultList";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { searchTermState, shouldSearchTermResetRefState } from "../Search";

const SearchItems: FunctionComponent = () => {
  const resetSearchTerm = useResetRecoilState(searchTermState);

  const shouldSearchTermResetRef = useRecoilValue(
    shouldSearchTermResetRefState
  );

  useEffect(() => {
    return () => {
      if (shouldSearchTermResetRef.value === true) {
        shouldSearchTermResetRef.value = false;
        return;
      } else {
        resetSearchTerm();
      }
    };
  }, [resetSearchTerm, shouldSearchTermResetRef]);
  return (
    <>
      {/*         <div id="modal-title">test</div>
          <div id="modal-description">test2</div> */}
      {/*   <header> */}
      <Form />
      {/*  </header> */}

      {/*   <section> */}
      <ResultList />
      {/*  </section> */}
    </>
  );
};

export default SearchItems;
