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

    // this is the clean object that can be rendered
    return {
      title: dataString.querySelector("title").innerHTML,
      link: dataString.querySelector("link").innerHTML,
      // enclosure: enclosureUrl,
    };
  });
  return processedItems;
};
