import React, { FunctionComponent, useEffect } from "react";
import Form from "./Form";
import ResultList from "./ResultList/ResultList";
import Fuse from "fuse.js";
import { useRecoilValue, atom, selector, useResetRecoilState } from "recoil";
import searchableItems from "../../Video/Media/searchableItems";

const searchOptions = {
  keys: ["value"],
};

export interface SearchableItem {
  value: string;
  path: string;
}

export const selectedItemIndexState = atom({
  key: "selectedItemIndex",
  default: 0,
});

export const searchTermState = atom({
  key: "searchTerm",
  default: "",
});

export const searchableItemsState = atom({
  key: "searchableItems",
  default: searchableItems,
});

export const fuseState = selector({
  key: "fuse",
  get: ({ get }) => {
    return new Fuse(get(searchableItemsState), searchOptions);
  },
});

export const searchResultsState = selector({
  key: "searchResults",
  get: ({ get }) => {
    return get(fuseState).search(get(searchTermState));
  },
});

export const shouldSearchTermResetRefState = atom({
  key: "shouldSearchTermResetRef",
  default: { value: false },
  dangerouslyAllowMutability: true,
});

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
