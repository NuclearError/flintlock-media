import PropTypes from "prop-types";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import theme from "../theme";

const wrapperStyle = css`
  margin: 0;

  @media (min-width: ${theme.breakpoints.sm}) {
    margin: ${theme.spacing.xxl}px auto 0;
    width: ${theme.spacing.baseDimension}px;
  }
`;

export const Wrapper = ({ children }) => {
  return <div css={wrapperStyle}>{children}</div>;
};

Wrapper.defaultProps = {
  children: null,
};

Wrapper.propTypes = {
  children: PropTypes.node,
};
