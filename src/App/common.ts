import styled, { css } from "styled-components";
import ListItem from "@material-ui/core/ListItem";

export const ClickableHeadingStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 2.25rem;

  /*   border-radius: ${({ theme }) => theme.borderRadius}; */
  box-sizing: border-box;
  padding: 0.25rem 1rem;

  margin-bottom: 0.25rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SubheadingStyle = css`
  width: unset;
  font-weight: 400;
  margin-left: -1px;
  margin-bottom: 0;
  min-height: 0;
  line-height: 1.25rem;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;

  border-left: 4px solid transparent;

  &.active {
    border-left: ${({ theme }) => `4px solid ${theme.secondary}`};
    font-weight: bold;

    &:hover {
      background-color: unset;
      color: unset;
    }
  }

  background-color: unset;

  &:hover {
    background-color: unset;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const ClickableHeading = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 2.25rem;

  /*   border-radius: ${({ theme }) => theme.borderRadius}; */
  box-sizing: border-box;
  padding: 0.25rem 1rem;

  margin-bottom: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const logPerformance = (callback: () => void) => {
  const t0 = performance.now();
  callback();
  const t1 = performance.now();
  const d = t1 - t0;
  console.log(d);
};

type ImmutablePrimitive =
  | undefined
  | null
  | boolean
  | string
  | number
  | Function;

export type Immutable<T> = T extends ImmutablePrimitive
  ? T
  : T extends Array<infer U>
  ? ImmutableArray<U>
  : T extends Map<infer K, infer V>
  ? ImmutableMap<K, V>
  : T extends Set<infer M>
  ? ImmutableSet<M>
  : ImmutableObject<T>;

export type ImmutableArray<T> = ReadonlyArray<Immutable<T>>;
export type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>;
export type ImmutableSet<T> = ReadonlySet<Immutable<T>>;
export type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };
