import React, { CSSProperties, FunctionComponent } from "react";
import Row from "./Row/Row";
import { Searchable } from "../../../Media/Media";
import Fuse from "fuse.js";

const ItemRenderer: FunctionComponent<{
  index: number;
  style: CSSProperties;
  data: Fuse.FuseResult<Searchable>[];
}> = ({ index, style, data }) => {
  return <Row item={data[index].item} index={index} style={style} />;
};

export default ItemRenderer;
