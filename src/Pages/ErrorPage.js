import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import theme from "../theme";

import { Wrapper } from "../Components/Wrapper";

const sectionStyle = css`
  padding: ${theme.spacing.sm}px;
  background-color: ${theme.colors.greyTitleCard};
  border-radius: 2px;
  border: 1px solid ${theme.colors.base.black};
  overflow: hidden;
`;

const headingStyle = css`
  margin: 0;
  font-weight: normal;
  font-family: ${theme.fonts.family.serif};
  text-align: center;
  color: ${theme.colors.greyText};
`;

const imgStyle = css`
  width: 100%;
`;

const h1Style = css`
  font-size: ${theme.fonts.size.h1};
  line-height: ${theme.fonts.lineHeight.h1};
`;

const h2Style = css`
  margin: 10px 0;
  font-size: ${theme.fonts.size.h2};
  line-height: ${theme.fonts.lineHeight.h2};
`

const contentStyle = css`
  text-align: center;
`;

const paraStyle = css`
  margin: 0 0 10px;
  font-weight: normal;
  font-family: ${theme.fonts.family["sans-serif"]};
  font-size: ${theme.fonts.size.base};
  line-height: ${theme.fonts.lineHeight.base};
`;

const linkText = css`
  text-decoration: none;
  color: ${theme.colors.greyText};
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline dotted;
    color: ${theme.colors.greyTextHover};
  }
`

const gifAltText = `A still from the 1936 Charlie Chaplin film "Modern Times" showing white text on a grey caption card. The text reads 'No place - anywhere.''`;

function ErrorPage() {
  return (
    <Wrapper>
      <section role="main" css={sectionStyle}>
        <img
          css={imgStyle}
          src="img/no_place.gif"
          alt={gifAltText}
        />
        <h1 css={[headingStyle, h1Style]}>404 error</h1>
      </section>
      <div css={contentStyle}>
        <h2 css={[headingStyle, h2Style]}>Nothing was found.</h2>
        <h3 css={paraStyle}><a css={linkText} href="/">Go back home.</a></h3>
      </div>

    </Wrapper>
  );
}

export default ErrorPage;
