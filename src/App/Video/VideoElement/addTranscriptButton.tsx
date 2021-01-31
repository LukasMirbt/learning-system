import { VideoPlayer } from "./useVideoPlayer/useVideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ReactDOMServer from "react-dom/server";
import { SetterOrUpdater } from "recoil";

const addTranscriptButton = (args: {
  videoPlayer: VideoPlayer;
  setIsTranscriptShowing: SetterOrUpdater<boolean>;
}) => {
  const { videoPlayer, setIsTranscriptShowing } = args;

  const controls = (videoPlayer as any).elements.controls;
  const controlButtons = controls.children;
  const lastButton = controlButtons[controlButtons.length - 1];

  const button = document.createElement("button");

  button.innerHTML = ReactDOMServer.renderToString(
    <>
      <FontAwesomeIcon
        className="icon--pressed"
        style={{ width: 18, height: 18 }}
        icon={faEye}
      />
      <FontAwesomeIcon
        className="icon--not-pressed"
        style={{ width: 18, height: 18 }}
        icon={faEyeSlash}
      />
      <span className="label--pressed plyr__tooltip">Show transcript</span>
      <span className="label--not-pressed plyr__tooltip">Hide transcript</span>
    </>
  );

  button.className = "transcriptButton plyr__controls__item plyr__control";
  button.setAttribute("data-plyr", "Toggle transcript");
  button.setAttribute("type", "button");

  const onClick = () => {
    setIsTranscriptShowing((prevIsShowing) => {
      const nextIsShowing = !prevIsShowing;
      if (nextIsShowing === true) {
        button.classList.remove("plyr__control--pressed");
      } else {
        button.classList.add("plyr__control--pressed");
      }
      return nextIsShowing;
    });
  };

  button.onclick = onClick;

  controls.insertBefore(button, lastButton);
};

export default addTranscriptButton;
