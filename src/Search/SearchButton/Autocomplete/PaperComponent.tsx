import React, { FunctionComponent, HTMLAttributes, Fragment } from "react";

const PaperComponent: FunctionComponent<HTMLAttributes<HTMLElement>> = (
  props
) => {
  return <Fragment>{props.children}</Fragment>;
};

export default PaperComponent;
