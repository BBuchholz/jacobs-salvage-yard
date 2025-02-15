const slips = [
  {
    siteName: "jus-be-u",
    siteSlips: [
      "to be reviewed",
      "lots here, come back to it"
    ]
  },
  {
    siteName: "pinia-tutorial",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "obaolg",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "myriad-central",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "a-myriad-ov-services",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "magik-dor",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "anxious-grove",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "madamadam",
    siteSlips: [
      "review",
    ]
  },
]

export function getSiteNames(){
  return slips.map(site => site.siteName);
}

export function getSlipsForSiteName(siteName){
  return slips.find(site => site.siteName === siteName).siteSlips;
}