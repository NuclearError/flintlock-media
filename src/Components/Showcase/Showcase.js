/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import theme from "../../theme";

import showcaseData from "./showcaseData";
import ShowcaseItem from "./ShowcaseItem";

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const listItemStyle = css`
  margin: ${theme.spacing.md}px 0;
  padding: 0;
`;

export const Showcase = () => {
  return (
    <section>
      <ul css={listStyle}>
        {showcaseData.map((item) => (
          <li key={item.title} css={listItemStyle}>
            <ShowcaseItem
              backgroundColor={item.backgroundColor}
              title={item.title}
              description={item.description}
              gif={item.gif}
              altText={item.altText}
              url={item.url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
