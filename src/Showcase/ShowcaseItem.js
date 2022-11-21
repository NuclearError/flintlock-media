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
  margin: 0;
  font-weight: normal;
  font-family: ${theme.fonts.family.serif};
  font-size: ${theme.fonts.size.h2};
  line-height: ${theme.fonts.lineHeight.h2};
  color: ${theme.colors.greyText};
  text-align: center;
`;

const paraStyle = css`
  margin: 0;
  font-weight: normal;
  font-family: ${theme.fonts.family["sans-serif"]};
  font-size: ${theme.fonts.size.base};
  line-height: ${theme.fonts.lineHeight.base};
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

const gifAltText = `A still from the 1936 Charlie Chaplin film "Modern Times" showing white text laid over an old-fashioned clockface with Roman numerals. The text reads 'A story of industry, of individual enterprise - humanity crusading in the pursuit of happiness.'`;

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
      <img
        css={css`
          width: 100%;
        `}
        // src="img/newspaper.gif"
        src={`img/${gif}.gif`}
        alt={altText}
      />
      {url ? (
        <a href={url} css={linkStyle}>
          <h3 css={headingStyle}>
            {/* {emoji ? <span css={[spanStyle, emojiStyle]}>{emoji}</span> : null}
            <span css={[spanStyle, titleStyle]}>{title}</span> */}
            {title}
          </h3>
        </a>
      ) : (
        <h3 css={headingStyle}>
          {/* {emoji ? <span css={[spanStyle, emojiStyle]}>{emoji}</span> : null}
          <span css={[spanStyle, titleStyle]}>{title}</span> */}
          {title}
        </h3>
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
