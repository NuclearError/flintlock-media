// For Nasa's Image of the Day
// https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss
export const processNasaImages = (data) => {
  // it should be an array but we receive it as an object for some reason; this makes it an array
  const dataContent = Object.values(data);
  const processedItems = dataContent.map((dataString) => {

    // Date
    const date = dataString.querySelector("pubDate").innerHTML;

    // Description
    const description = dataString.querySelector("description") ? `${dataString.querySelector("description").innerHTML}` : "";

    // Enclosure
    const rawEnclosure = dataString.querySelector("enclosure") ? dataString.querySelector("enclosure").outerHTML : <div></div>;
    let tmpDiv = document.createElement("div");
    tmpDiv.innerHTML = rawEnclosure;
    const enclosure = tmpDiv.querySelector("enclosure").getAttribute("url");

    return {
      title: dataString.querySelector("title").innerHTML,
      link: dataString.querySelector("link").innerHTML,
      date,
      description,
      enclosure,
    };
  });
  return processedItems;
};
