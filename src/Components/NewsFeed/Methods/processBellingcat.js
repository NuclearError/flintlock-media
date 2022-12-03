const cdataRegex = /<!\[CDATA\[(.*)\]\]>+/gm;
const spaceRegex = /[\n\r]+/gm;

// For Bellingcat news
// https://www.bellingcat.com/feed/
export const processBellingcat = (data) => {
  // it should be an array but we receive it as an object for some reason; this makes it an array
  const dataContent = Object.values(data);
  const processedItems = dataContent.map((dataString) => {
    // this is for 'enclosure' but should be how squiffy stuff gets dealt with in general
    // const rawEnclosure = dataString.querySelector("enclosure").outerHTML;
    // let tmpDiv = document.createElement("div");
    // tmpDiv.innerHTML = rawEnclosure;
    // const enclosureUrl = tmpDiv.querySelector("enclosure").getAttribute("url");

    // Date
    const pubDate = dataString.querySelector("pubDate").innerHTML;

    // Description
    let description = dataString.querySelector("description") ? `${dataString.querySelector("description").innerHTML}` : "";

    var text = description.replace(/<!\[CDATA\[|\]\]>/g, "");
    console.log("AI TEXT = ", text);

    const boopDescription = description.replace(spaceRegex);
    const beepDescription = cdataRegex.exec(boopDescription);

    console.log("description = ", description);
    console.log("boopDescription = ", boopDescription)
    console.log("beepDescription = ", beepDescription)
    console.log("typeof beep = ", typeof beepDescription)
    console.log("cdataRegex.lastIndex = ", cdataRegex.lastIndex)
    //console.log("beepDescription[1] = ", beepDescription[1])
    // console.log("beepDescription[0] = ", beepDescription[0])

    // this is the clean object that can be rendered
    return {
      title: dataString.querySelector("title").innerHTML,
      link: dataString.querySelector("link").innerHTML,
      description: text,
      pubDate,
    };
  });
  return processedItems;
};

