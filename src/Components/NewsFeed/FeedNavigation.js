import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { getRssData } from "./Methods/getRssData";
import { processNasaImages } from "./Methods/processNasaImages";
import { processBellingcat } from "./Methods/processBellingcat";
import { processAwkwardFamilyPhotos } from "./Methods/processAwkwardFamilyPhotos";
import { FeedList } from "./FeedList";
import feedOptions from "./feedOptions";

import { FeedWrapperStyle, FeedHeaderStyle, FeedButtonContainer, FeedButton } from "./styles";

export const FeedNavigation = () => {
  const [currentFeed, setCurrentFeed] = useState(
    "https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss"
  ); // current feed source
  const [currentProcessingFunction, setCurrentProcessingFunction] = useState(
    "processNasaImages"
  ); // current feed source
  const [items, setItems] = useState([]); // raw items
  const [feedItems, setFeedItems] = useState([]); // processed items

  useEffect(() => {
    // remember that getRssData is an async function so you need a '.then'
    getRssData(currentFeed).then((result) => {
      setItems(result);
    });
  }, [currentFeed]);

  useEffect(() => {
    processFeedData(items, currentProcessingFunction);
    console.log("items[0]: ", items[0])
  }, [items, currentProcessingFunction]);

  // TODO: figure out if there's a better way to do this
  const processNasaImages1 = (data) => {
    return processNasaImages(data);
  }
  const processBellingcat1 = (data) => {
    return processBellingcat(data);
  }
  const processAwkwardFamilyPhotos1 = (data) => {
    return processAwkwardFamilyPhotos(data);
  }

  const processFeedData = (data, functionName) => {
    const relevantProcessing = eval(`${functionName}1(data)`);
    setFeedItems(relevantProcessing);
  };

  const handleClick = (event, rss) => {
    setCurrentFeed(rss.url);
    setCurrentProcessingFunction(rss.functionName);
  }

  return (
    <section css={css(FeedWrapperStyle)}>
      <header css={css(FeedHeaderStyle)}>
        <div css={css(FeedButtonContainer)}>
          {feedOptions.map((option) => {
            return (
              <button css={css(FeedButton)} key={option.name} onClick={(event) => handleClick(event, option)}>{option.buttonLabel}</button>
            )
          }
          )}
        </div>
      </header>
      <FeedList feedItems={feedItems} />
    </section>
  );
};
