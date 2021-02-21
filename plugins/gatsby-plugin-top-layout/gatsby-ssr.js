/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react";
import Providers from "./Providers";
import SharedLayout from "./SharedLayout";

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};

export const wrapPageElement = ({ element }) => {
  return <SharedLayout>{element}</SharedLayout>;
};
