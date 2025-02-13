const slips = [
  {
    siteName: "sylvan-circle",
    siteSlips: [
      "turn image into card",
      "delete site aftwards"
    ]
  },
  {
    siteName: "jacobs-salvage",
    siteSlips: [
      "site can be deleted from netlify",
      
    ]
  },
  {
    siteName: "baolg",
    siteSlips: [
      "delete site",
    ]
  },
  {
    siteName: "thatb",
    siteSlips: [
      "delete",
    ]
  },
  {
    siteName: "thasg",
    siteSlips: [
      "remix these cards",
      "delete site when finished"
    ]
  },
  {
    siteName: "tha-stratagem",
    siteSlips: [
      "remix these cards",
      "delete site when finished"
    ]
  },
  {
    siteName: "cgba",
    siteSlips: [
      "delete",
    ]
  },
  {
    siteName: "mccu",
    siteSlips: [
      "delete",
    ]
  },
  {
    siteName: "sonic-circle",
    siteSlips: [
      "remix image into card",
      'delete'
    ]
  }
]

export function getSiteNames(){
  return slips.map(site => site.siteName);
}


export function getSlipsForSiteName(siteName){
  return slips.find(site => site.siteName === siteName).siteSlips;
}