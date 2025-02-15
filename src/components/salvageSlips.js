const slips = [
  {
    siteName: "jus-be-u",
    siteSlips: [
      "to be reviewed",
      "lots here, come back to it"
    ]
  },
  {
    siteName: "anxious-grove",
    siteSlips: [
      "lots to review here, save for now",
    ]
  },
  {
    siteName: "antiquarian-cup",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "magik-wel",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "honest-bog",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "papaya-parfait-8fcafc",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "gladly-antediluvian-cathedral",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "worthy-mountain",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "extremely-daemonic-gate",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "truthfully-cyclopean-barracks",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "fearlessly-artifactual",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "furiously-visionary-altar",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "nameless-star",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "mask-dance",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "personages",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "welcome-to-coventree-cafe",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "coventree-cafe",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "coventree",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "coventry-test",
    siteSlips: [
      "review",
    ]
  },
  {
    siteName: "coven",
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