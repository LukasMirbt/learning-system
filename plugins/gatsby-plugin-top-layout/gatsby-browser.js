/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react";
import Providers from "./Providers";
import SharedLayout from "./SharedLayout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./index.css";
import "plyr/dist/plyr.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

config.autoAddCss = false;

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};

export const wrapPageElement = ({ element }) => {
  return <SharedLayout>{element}</SharedLayout>;
};
