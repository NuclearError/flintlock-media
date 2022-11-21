import React from "react";

export type itemType = {
  title: string;
  link: string;

  enclosure?: string;
  // TODO: add more
};

export const FeedListItem = (item) => {
  // constants or whatever

  item = item.item;

  return (
    <li className="Feed__FeedListItem">
      <a href={item.link} target="_blank" rel="noreferrer noopener">
        <h2>{item.title}</h2>
      </a>
      <img
        src={item.enclosure}
        alt={item.title}
        style={{ maxWidth: "800px" }}
      />
    </li>
  );
};
