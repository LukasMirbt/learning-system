import React, { CSSProperties, FunctionComponent } from "react";
import { VariableSizeList as List } from "react-window";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../../Search";
import Autosizer from "react-virtualized-auto-sizer";
import { Searchable } from "../../../Media/Media";
import Fuse from "fuse.js";
import { headerHeight } from "./Header/Header";
import ItemRenderer from "./ItemRenderer";

const getItemSize = (index: number) => (index === 0 ? headerHeight : 80);

const getItemKey = (index: number, data: Fuse.FuseResult<Searchable>[]) => {
  return index === 0 ? "header" : data[index - 1].refIndex;
};

const listStyle: CSSProperties = { overflowY: "scroll" };

const VirtualizedList: FunctionComponent = () => {
  const searchResults = useRecoilValue(searchResultsState);

  return (
    <Autosizer>
      {({ height, width }) => (
        <List
          itemData={searchResults}
          itemKey={getItemKey}
          style={listStyle}
          height={height}
          width={width}
          itemSize={getItemSize}
          itemCount={searchResults.length + 1}
        >
          {ItemRenderer}
        </List>
      )}
    </Autosizer>
  );
};

export default VirtualizedList;
