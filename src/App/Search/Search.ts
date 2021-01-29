import Fuse from "fuse.js";
import { atom, selector } from "recoil";
import viewFromABlueMoonCues from "../Media/View-from-a-blue-moon/cues";
import elephantsDreamCues from "../Media/View-from-a-blue-moon/cues";

const searchOptions = {
  keys: ["text"],
};

export interface SearchableItem {
  value: string;
}

export const selectedItemIndexState = atom({
  key: "selectedItemIndex",
  default: 0,
});

export const searchTermState = atom({
  key: "searchTerm",
  default: "",
});

export const fuseState = atom({
  key: "fuse",
  default: new Fuse(
    viewFromABlueMoonCues.concat(elephantsDreamCues),
    searchOptions
  ),
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
