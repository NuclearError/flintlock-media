// For Awkard Family Photos
// https://awkwardfamilyphotos.com/feed/
export const processAwkwardFamilyPhotos = (data) => {
  // it should be an array but we receive it as an object for some reason; this makes it an array
  const dataContent = Object.values(data);
  const processedItems = dataContent.map((dataString) => {

    console.log("dataString = ", dataString);

    const myRegex = /<img[^>]+src="(http:\/\/[^">]+)"/g;
    const test = '<p><img src="http://static2.ccn.com/ccs/2013/02/CC_1935770_challenge_accepted_pack_x3_indivisible.jpg" /></p>blahblah';
    // const image = dataString.querySelector("content\:encoded").outerHTML;
    // console.log(myRegex.exec(image)[0])

    const description = dataString.querySelector("description");


    // this is the clean object that can be rendered
    return {
      title: dataString.querySelector("title").innerHTML,
      link: dataString.querySelector("link").innerHTML,
    };
  });
  return processedItems;
};
