import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { FeedListItem } from "./FeedListItem.tsx";

import { FeedListStyle } from "./styles";

export const FeedList = ({ feedItems }) => {
  // constants or whatevs
  return (
    <section>
      <ul css={css(FeedListStyle)}>
        {feedItems.length > 0 &&
          feedItems.map((item) => (
            <FeedListItem key={item.title} item={item} />
          )
          )}
      </ul>
    </section>
  );
};
