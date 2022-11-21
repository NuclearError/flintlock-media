import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { FeedListItemStyle, FeedListItemHeading, FeedListItemLink, FeedListItemMainImage } from "./styles";

export type itemType = {
  title: string;
  link: string;
  date: string;

  description?: string;
  enclosure?: string;
  // TODO: add more
};

export const FeedListItem = (item) => {
  // constants or whatever

  item = item.item;

  return (
    <li css={css(FeedListItemStyle)}>
      <a css={css(FeedListItemLink)} href={item.link} target="_blank" rel="noreferrer noopener">
        <h2 css={css(FeedListItemHeading)}>{item.title}<br />{item.date}</h2>
      </a>
      <img
        src={item.enclosure}
        alt={item.title}
        css={css(FeedListItemMainImage)}
      />
      <p style={{ fontSize: "20px", color: "white" }}>{item.description}</p>
    </li>
  );
};
