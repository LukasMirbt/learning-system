import Fuse from "fuse.js";
import { atom, selector } from "recoil";
import viewFromABlueMoonCues from "../Media/View-from-a-blue-moon/searchableCues";
import viewFromABlueMoonSections from "../Media/View-from-a-blue-moon/searchableSections";
import elephantsDreamCues from "../Media/Elephants-dream/searchableCues";
import elephantsDreamSections from "../Media/Elephants-dream/searchableSections";
import { Searchable } from "../Media/Media";

export const selectedItemIndexState = atom({
  key: "selectedItemIndex",
  default: 0,
});

export const searchTermState = atom({
  key: "searchTerm",
  default: "",
});

export const searchableItems = (viewFromABlueMoonSections as Searchable[])
  .concat(elephantsDreamSections, viewFromABlueMoonCues, elephantsDreamCues)
  //this replace statement removes WebVTT cue tags, this is necessary since they interfere with search results otherwise
  .map((searchable) => ({
    ...searchable,
    textWithoutTags: searchable.text.replace(/<\/?[^>]+(>|$)/g, ""),
  }));

const searchOptions = {
  keys: ["textWithoutTags"],
};

export const fuseState = atom({
  key: "fuse",
  default: new Fuse(searchableItems, searchOptions),
});

export const searchResultsState = selector({
  key: "searchResults",
  get: ({ get }) => {
    return get(fuseState).search(get(searchTermState));
  },
});

export const shouldSearchTermResetRefState = atom({
  key: "shouldSearchTermResetRef",
  default: { current: false },
  dangerouslyAllowMutability: true,
});
