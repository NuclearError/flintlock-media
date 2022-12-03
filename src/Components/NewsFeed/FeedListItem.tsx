import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { FeedListItemStyle, FeedListItemHeading, FeedListItemLink, FeedListItemMainImage, FeedListItemTextStyle, FeedListItemGridContainer, FeedListItemTextContainerStyle } from "./styles";

export type itemContentType = {
  title: string;
  link: string;
  pubDate: string;

  description?: string;
  enclosure?: string;
  // TODO: add more
}

export type itemType = {
  item: itemContentType;
};


{/* TODO: come up with a way to get the pubDate in the datetime in the correct format (unless it already is?) */ }
{/* TODO: figure out how to display the datetime in a relevant timezone */ }

export const FeedListItem = (item: itemType) => {

  const { title, link, pubDate, description, enclosure } = item.item;

  return (
    <li css={css(FeedListItemStyle)}>
      <article>
        <header>
          <time css={css(FeedListItemTextStyle)} dateTime="">{pubDate}</time>
          <a css={css(FeedListItemLink)} href={link} target="_blank" rel="noreferrer noopener">
            <h2 css={css(FeedListItemHeading)}>{title}</h2>
          </a>
        </header>
        {enclosure
          ?
          <div css={css(FeedListItemGridContainer)}>
            <img
              src={enclosure}
              alt={title}
              css={css(FeedListItemMainImage)}
            />
            <div css={css(FeedListItemTextContainerStyle)}>
              <div css={css(FeedListItemTextStyle)} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
          :
          <div css={css(FeedListItemTextStyle)} dangerouslySetInnerHTML={{ __html: description }} />
        }
      </article>
    </li>
  );
};