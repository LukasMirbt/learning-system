import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input/Input";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

export const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 1200px;
  position: relative;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};

  position: absolute;

  margin-right: 0.5rem;
  padding-left: 0.5rem;
`;

type LabelProps = TypographyProps<"label", { component: "label" }>;

const Label = styled(Typography)<LabelProps>`
  font-size: 1.375rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Label
        component="label"
        htmlFor="search-input"
        id="search-label"
        variant="h3"
      >
        Search in videos or chapters
      </Label>

      <Input inputRef={inputRef} />
    </Container>
  );
};

export default Form;
