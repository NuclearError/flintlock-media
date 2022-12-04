/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import theme from "../../theme";

// You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).

export const FeedWrapperStyle = css`
  margin: 0 auto;
  border: 1px solid red;
  overflow: hidden;
  width: 98%;

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

export const FeedHeaderStyle = css`
  padding: 10px;
`;

export const FeedButtonContainer = css`
  display: flex;
`;

export const FeedButton = css`
  background-color: ${theme.colors.greyTitleCard};
  color: ${theme.colors.greyTextHover};
  padding: 10px;
  font-family: ${theme.fonts.family["sans-serif"]};
  font-size: ${theme.fonts.size.base};
  line-height: ${theme.fonts.lineHeight.base};
  border-radius: 2px;
  border: none;
  cursor: pointer;
  flex: 1;
  
  & + button {
    margin: 0 0 0 10px;
  }

  &:hover, &:focus, &:active {
    background-color: ${theme.colors.greyTitleCardHover};
    color: ${theme.colors.greyDark};
  }
`;

export const FeedListStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const FeedListItemStyle = css`
  background: ${theme.colors.greyDark};
  font-size: 0;
  padding: 10px;

  & + li {
    margin-top: 10px;
  }

  & a {
    color: ${theme.colors.greyText};
    text-decoration: underline dotted;
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.greyTextHover};
  }
  }
`;

export const FeedListItemHeading = css`
  margin: 0 0 10px;
  font-family: ${theme.fonts.family.serif};
  font-size: ${theme.fonts.size.h2};
  line-height: ${theme.fonts.lineHeight.h2};
  font-weight: 400;
`;

export const FeedListItemLink = css`
  color: ${theme.colors.greyText};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline dotted;
    color: ${theme.colors.greyTextHover};
  }
`;

export const FeedListItemGridContainer = css`
  // css grid
  display: block;

  @media (min-width: ${theme.breakpoints.sm}) {
    display: grid;
    gap: 10px;
    grid-auto-rows: min-content;
    grid-template-columns: 2fr 2fr;
  }
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 3fr;
  }
`;

export const FeedListItemMainImage = css`
  width: 100%;
  display: inline-block;
  border: 1px solid #000;
  margin: 0 0 10px;

  grid-column: 2 / 2;
  grid-row: 1;

  @media (min-width: ${theme.breakpoints.sm}) {
    margin: 0;
  }
`;

export const FeedListItemTextContainerStyle = css`
  grid-column: 1 / 2;
  grid-row: 1;
`;

export const FeedListItemTextStyle = css`
  margin: 0;
  display: block;
  color: ${theme.colors.greyText};
  font-size: ${theme.fonts.size.base};
  line-height: ${theme.fonts.lineHeight.base};
`;