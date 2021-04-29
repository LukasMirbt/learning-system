import React from "react";
import { renderWithProviders } from "../../test-utils";
import Transcript, {
  cueSources,
} from "../../../src/Video/Transcript/Transcript";
import { videoPaths } from "../../../src/Video/Video";
jest.mock("@material-ui/core/useMediaQuery", () => {
  return jest.fn().mockImplementation(() => true);
});

const path = videoPaths[0];

const componentToRender = (
  <div>
    <Transcript path={path} />
  </div>
);

describe("Transcript", () => {
  beforeEach(() => {
    renderWithProviders(componentToRender);
  });

  it("Displays a heading and video title", () => {
    const heading = document.querySelector("h2");
    expect(heading).toHaveTextContent("Transcript");

    const splitPath = path.split("/");
    const title = splitPath[1].replace(/-+/g, " ");

    expect(document.body).toHaveTextContent(title);
  });

  const { cues } = cueSources[path];
  const numberOfCues = cues.length;

  test.each(cues.slice(0, Math.min(5, numberOfCues)))(
    "Cue is rendered correctly",
    (cue) => {
      expect(document.body).toHaveTextContent(cue.text);
    }
  );
});
