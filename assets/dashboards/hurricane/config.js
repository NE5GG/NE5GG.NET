const topBarCenterText = `NE5GG - FM05OK`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "NHC", "https://www.nhc.noaa.gov/?epac", "1"],
  ["2196F3", "ACCUWEATHER", "https://www.accuweather.com/en/hurricane", "1"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=38.15041481,-82.17200759&zoom=4&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=32.9902&lon=-69.8291&zoom=5",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-92.89,37.27,1979",
    "1",
    "R"
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["SATELLITE CAN", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif"],
  [    "Central Pacific Outlook",
    "https://www.nhc.noaa.gov/xgtwo/two_cpac_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_cpac_2d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_cpac_0d0.png"
  ],
  [    "Pacific Outlook",
    "https://www.nhc.noaa.gov/xgtwo/two_pac_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_pac_2d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_pac_0d0.png"
  ],
  [    "Atlantic Outlook",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png"
  ],
  [    "Wide",    
    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/tpw/GEOCOLOR/GOES18-TPW-GEOCOLOR-900x540.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eep/GEOCOLOR/GOES16-EEP-GEOCOLOR-900x540.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/GEOCOLOR/GOES16-TAW-GEOCOLOR-900x540.gif"
  ],
  ["Western",    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/wus/GEOCOLOR/GOES18-WUS-GEOCOLOR-1000x1000.gif"],
  ["Gulf of Mexico",    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif"],
  ["Eastern",    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/GEOCOLOR/GOES16-EUS-GEOCOLOR-1000x1000.gif"],
  ["Hawaii",    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/hi/GEOCOLOR/GOES18-HI-GEOCOLOR-600x600.gif"],
  ["NE Pacific",  "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/np/GEOCOLOR/GOES18-NP-GEOCOLOR-900x540.gif"],
  ["Puerto Rico",  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/pr/GEOCOLOR/GOES16-PR-GEOCOLOR-600x600.gif"],
  ["Caribbean",  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/car/GEOCOLOR/GOES16-CAR-GEOCOLOR-1000x1000.gif"],
];