import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import theme from "./theme";

const sectionStyle = css`
  padding: ${theme.spacing.sm}px;
  background-color: ${theme.colors.greyTitleCard};
  border-radius: 2px;
  border: 1px solid ${theme.colors.base.black};
  height: ${theme.spacing.baseDimension - theme.spacing.sm * 2}px 
  overflow: hidden;
`;

const headingStyle = css`
  margin: 0;
  font-weight: normal;
  font-family: ${theme.fonts.family.serif};
`;

const h1Style = css`
  font-size: ${theme.fonts.size.h1};
  line-height: ${theme.fonts.lineHeight.h1};
  text-align: center;
  color: ${theme.colors.greyText};
`;

// const h2Style = css`
//   font-size: ${theme.fonts.size.h2};
//   line-height: ${theme.fonts.lineHeight.h1};
// `;

// const h3Style = css`
//   font-size: ${theme.fonts.size.h3};
//   line-height: ${theme.fonts.lineHeight.h3};
// `;

const gifAltText = `A still from the 1936 Charlie Chaplin film "Modern Times" showing white text laid over an old-fashioned clockface with Roman numerals. The text reads 'A story of industry, of individual enterprise - humanity crusading in the pursuit of happiness.'`;

export const BusinessCard = () => (
  <React.Fragment>
    <section role="main" css={sectionStyle}>
      <img
        css={css`
          width: 100%;
        `}
        src="img/modern_times.gif"
        alt={gifAltText}
      />
      <h1 css={[headingStyle, h1Style]}>Flintlock Media</h1>
    </section>
  </React.Fragment>
);
