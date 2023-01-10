export const getRssData = async (url) => {
  console.log("getRssData triggered. url provided = ", url);
  let rawContent;
  let contentArray;
  const urlRegex =
    /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;/~+#-])?/;
  if (!urlRegex.test(url)) {
    console.log("bad url");
    return;
  } else
    await fetch(`https://api.allorigins.win/get?url=${url}`)
      .then((response) => {
        console.log("got a response from url");
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("processing data from url");
        rawContent = data.contents;
        const feed = new window.DOMParser().parseFromString(
          rawContent,
          "text/xml"
        );
        console.log("processing data. Feed = ", feed);
        contentArray = feed.querySelectorAll("item");
        console.log("contentArray = ", contentArray);
      });
  return contentArray;
};
