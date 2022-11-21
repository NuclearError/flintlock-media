import React, { Fragment } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import theme from "../theme";

const articleStyle = css`
  padding: ${theme.spacing.sm}px;
  background-color: ${theme.colors.greyTitleCard};
  border-radius: 2px;
  border: 1px solid ${theme.colors.base.black};
  height: ${theme.spacing.baseDimension - theme.spacing.sm * 2}px 
  overflow: hidden;
`;

const headingStyle = css`
  margin: 5px 0 10px;
  font-weight: normal;
  font-family: ${theme.fonts.family.serif};
  font-size: ${theme.fonts.size.h1};
  line-height: ${theme.fonts.lineHeight.h2};
  color: ${theme.colors.greyText};
  text-align: center;
`;

const paraStyle = css`
  margin: 0 0 10px;
  font-weight: normal;
  font-family: ${theme.fonts.family["sans-serif"]};
  font-size: ${theme.fonts.size.base};
  line-height: ${theme.fonts.lineHeight.base};
  text-align: center;
`;

const linkStyle = css`
  color: ${theme.colors.base.black};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors["alt-pink"]};
  }
`;

const ShowcaseItem = ({
  backgroundColor,
  title,
  description,
  gif,
  altText,
  url,
}) => (
  <article
    css={[
      articleStyle,
      css`
        background-color: ${backgroundColor};
      `,
    ]}
  >
    <header>
      {url ? (
        // TODO: use described By to make sure everything has proper audio descriptions
        <a href={url} css={linkStyle}>
          <img
            css={css`
              width: 100%;
            `}
            src={`img/${gif}.gif`}
            alt={altText}
          />
          <h2 css={headingStyle}>{title}</h2>
        </a>
      ) : (
        <Fragment>
          <img
            css={css`
              width: 100%;
            `}
            src={`img/${gif}.gif`}
            alt={altText}
          />
          <h3 css={headingStyle}>{title}</h3>
        </Fragment>
      )}
    </header>
    {description ? <p css={paraStyle}>{description}</p> : null}
  </article>
);

ShowcaseItem.defaultProps = {
  backgroundColor: "#000",
  description: "",
  emoji: "",
  title: "",
  url: "",
};

ShowcaseItem.propTypes = {
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  emoji: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default ShowcaseItem;
