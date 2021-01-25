import React, { CSSProperties, FunctionComponent } from "react";
import Row from "./Row";
import { SearchableCue } from "../../AppBar/Search/getSearchableItems";
import Fuse from "fuse.js";
import Header from "./Header/Header";

const ItemRenderer: FunctionComponent<{
  index: number;
  style: CSSProperties;
  data: Fuse.FuseResult<SearchableCue>[];
}> = ({ index, style, data }) => {
  return index === 0 ? (
    <Header />
  ) : (
    <Row item={data[index - 1].item} index={index} style={style} />
  );
};

export default ItemRenderer;
