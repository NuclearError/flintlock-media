export const getRssData = async (url) => {
  let rawContent;
  let contentArray;
  const urlRegex =
    /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;/~+#-])?/;
  if (!urlRegex.test(url)) {
    return;
  } else
    await fetch(`https://api.allorigins.win/get?url=${url}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        rawContent = data.contents;
        const feed = new window.DOMParser().parseFromString(
          rawContent,
          "text/xml"
        );
        contentArray = feed.querySelectorAll("item");
      });
  return contentArray;
};
