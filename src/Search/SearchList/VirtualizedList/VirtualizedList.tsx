import React, { CSSProperties, FunctionComponent } from "react";
import { VariableSizeList as List } from "react-window";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../../Search";
import Autosizer from "react-virtualized-auto-sizer";
import { Searchable } from "../../../Media/Media";
import Fuse from "fuse.js";
import Row from "./Row/Row";

const itemSize = 80;

const listStyle: CSSProperties = {
  overflowY: "scroll",
};

const getItemSize = (index: number) => (index === 0 ? itemSize + 1 : itemSize);

const getItemKey = (index: number, data: Fuse.FuseResult<Searchable>[]) =>
  data[index].refIndex;

const VirtualizedList: FunctionComponent = () => {
  const searchResults = useRecoilValue(searchResultsState);

  return (
    <Autosizer>
      {({ height, width }) => (
        <List
          style={listStyle}
          itemData={searchResults}
          itemKey={getItemKey}
          height={height}
          width={width}
          itemSize={getItemSize}
          itemCount={searchResults.length}
        >
          {Row}
        </List>
      )}
    </Autosizer>
  );
};

export default VirtualizedList;
