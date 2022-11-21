let processNasaImages;
let processBellingcat;
let processAwkwardFamilyPhotos;

export default [
  {
    buttonLabel: "Nasa Images",
    name: "Nasa's Image of the Day",
    url: "https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss",
    functionName: "processNasaImages"
  },
  {
    buttonLabel: "Bellingcat",
    name: "Bellingcat",
    url: "https://www.bellingcat.com/feed/",
    functionName: "processBellingcat"
  },
  {
    buttonLabel: "Awks Fam Photos",
    name: "Awkward Family Photos",
    url: "https://awkwardfamilyphotos.com/feed/",
    functionName: "processAwkwardFamilyPhotos"
  }
];
