import React, { CSSProperties, FunctionComponent } from "react";
import Row from "./Row";
import { Searchable } from "../../../Media/Media";
import Fuse from "fuse.js";
import Header from "./Header/Header";

const ItemRenderer: FunctionComponent<{
  index: number;
  style: CSSProperties;
  data: Fuse.FuseResult<Searchable>[];
}> = ({ index, style, data }) => {
  return index === 0 ? (
    <Header />
  ) : (
    <Row item={data[index - 1].item} index={index} style={style} />
  );
};

export default ItemRenderer;
