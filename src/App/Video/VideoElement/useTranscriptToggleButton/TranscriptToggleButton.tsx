import { FunctionComponent, useRef } from "react";
import styled, { DefaultTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { SetterOrUpdater } from "recoil";

interface StyledButtonProps {
  sc: {
    theme: DefaultTheme;
  };
}

const StyledButton = styled.button<StyledButtonProps>`
  display: none;

  @media screen and (min-width: ${({ sc: { theme } }) =>
      theme.breakpoints.values.lg}px) {
    display: block;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 18px;
  height: 18px;
`;

const IconStyle = { width: 18, height: 18 };

const buttonProps = {
  type: "button",
  "data-plyr": "Toggle transcript",
} as const;

const baseButtonClassName = "plyr__control";

const baseTooltipClassName = "plyr__tooltip";

const TranscriptButton: FunctionComponent<{
  setIsTranscriptShowing: SetterOrUpdater<boolean>;
  theme: DefaultTheme;
}> = ({ setIsTranscriptShowing, theme }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const buttonClassName = useRef(baseButtonClassName);

  return (
    <StyledButton
      {...buttonProps}
      sc={{ theme }}
      className={buttonClassName.current}
      ref={buttonRef}
      onClick={() => {
        setIsTranscriptShowing((prevIsShowing) => {
          const nextIsShowing = !prevIsShowing;
          if (nextIsShowing === true) {
            buttonRef.current!.classList.remove("plyr__control--pressed");
          } else {
            buttonRef.current!.classList.add("plyr__control--pressed");
          }
          return nextIsShowing;
        });
      }}
    >
      <StyledIcon
        className="icon--not-pressed"
        style={IconStyle}
        icon={faEyeSlash}
      />
      <span className={`label--not-pressed ${baseTooltipClassName}`}>
        Hide transcript
      </span>

      <StyledIcon className="icon--pressed" style={IconStyle} icon={faEye} />

      <span className={`label--pressed ${baseTooltipClassName}`}>
        Show transcript
      </span>
    </StyledButton>
  );
};

export default TranscriptButton;
