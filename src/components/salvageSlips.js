const slips = [
  {
    siteName: "jus-be-u",
    siteSlips: [
      "to be reviewed",
      "lots here, come back to it"
    ]
  },
  {
    siteName: "timely-valkyrie-da6198",
    siteSlips: [
      "original ATA",
      "save image and turn into card for ATA",
      'delete when done'
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
    siteName: "sonic-circle",
    siteSlips: [
      "remix image into card",
      'delete'
    ]
  },
]

export function getSiteNames(){
  return slips.map(site => site.siteName);
}


export function getSlipsForSiteName(siteName){
  return slips.find(site => site.siteName === siteName).siteSlips;
}