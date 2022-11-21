/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import theme from "../../theme";

// You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).

export const FeedStyle = css`
  margin: 0 auto;
  border: 1px solid red;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    border: 1px solid cyan;
    width: 90%;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    border: 1px solid lime;
    width: 90%;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    border: 1px solid yellow;
    width: ${theme.spacing.baseDimension * 5}px;
  }
`;
