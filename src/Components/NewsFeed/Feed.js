import React, { useState, useEffect } from "react";
import { getRssData } from "./Methods/getRssData";
import { processNasaImages } from "./Methods/processNasaImages";
import { FeedListItem } from "./FeedListItem.tsx";

export const Feed = () => {
  // TODO: Let user choose feed
  const [currentFeed, setCurrentFeed] = useState(
    "https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss"
  ); // current feed source
  const [items, setItems] = useState([]); // raw items
  const [feedItems, setFeedItems] = useState([]); // processed items

  useEffect(() => {
    // TODO: figure out why the hell useEffect on page load runs twice
    console.log("useEffect #1: should run ONCE on load");
    // remember that getRssData is an async function so you need a '.then'
    getRssData(currentFeed).then((result) => {
      setItems(result);
    });
  }, []); // run once on load

  useEffect(() => {
    console.log(
      "useEffect #2: should run when items are updated. items[0] = ",
      items[0]
    );
    processFeedData(items);
  }, [items]);

  const processFeedData = (data) => {
    // TODO: do some logic here about what the currentFeed is: it could be loads of options.
    // here we pretend that nasa image rss was dynamically chosen.
    // then we set the feed items by calling the relevant processing function
    // https://marcosc.com/2012/03/dynamic-function-names-in-javascript/
    const relevantProcessing = processNasaImages(data);
    setFeedItems(relevantProcessing);
  };

  return (
    <section className="Feed">
      <header className="Feed__header">
        <p>
          Current feed source: <strong>{currentFeed}</strong>
        </p>
      </header>
      <section className="Feed__listContainer">
        <ul className="Feed__list">
          {feedItems.length > 0 &&
            feedItems.map((item) => (
              <FeedListItem key={item.title} item={item} />
            ))}
        </ul>
      </section>
    </section>
  );
};
