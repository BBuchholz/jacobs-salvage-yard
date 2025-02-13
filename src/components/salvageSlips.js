const slips = [
  {
    siteName: "jus-be-u",
    siteSlips: [
      "to be reviewed",
      "lots here, come back to it"
    ]
  },
  {
    siteName: "aethyrium",
    siteSlips: [
      "to be deleted",
      ""
    ]
  },
  {
    siteName: "fearless-coin-blog",
    siteSlips: [
      "to be deleted",
      "will stay in github, add to SCOPES"
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
    siteName: "abnormal-wings",
    siteSlips: [
      "second ATA incarnation",
      "delete when image is card"
    ]
  },
  {
    siteName: "brave-sand-box",
    siteSlips: [
      "to be reviewed",
      ""
    ]
  },
  {
    siteName: "pndmn",
    siteSlips: [
      "to be reviewed",
      ""
    ]
  },
  {
    siteName: "sylvan-circle",
    siteSlips: [
      "turn image into card",
      "delete site aftwards"
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
  {
    siteName: "shepton-transmission-services",
    siteSlips: [
      "to be reviewed",
      ""
    ]
  },
]

export function getSiteNames(){
  return slips.map(site => site.siteName);
}


export function getSlipsForSiteName(siteName){
  return slips.find(site => site.siteName === siteName).siteSlips;
}