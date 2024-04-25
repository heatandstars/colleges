markList = [
  {
    "name": "Smith College",
    "url": "https://www.instagram.com/smith_sjp/",
    "latitude": 42.328674,
    "longitude": -72.664658,
  },
  {
    "name": "Barnard College",
    "url": "https://www.instagram.com/sjp.columbia/?hl=en",
    "latitude": 40.8095,
    "longitude": -73.9634,
  },
  {
    "name": "University of Rochester",
    "url": "https://www.instagram.com/sjp.ur/?hl=en",
    "latitude": 43.122429,
    "longitude": -77.630676,
  },
  {
    "name": "MIT",
    "url": "https://www.instagram.com/mit_caa/",
    "latitude": 42.3601,
    "longitude": -71.0942,
  },
  {
    "name": "University of Southern California",
    "url": "https://www.instagram.com/uscscale/?hl=en",
    "latitude": 34.0224,
    "longitude": -118.2851,
  },
  {
    "name": "The City University of New York (CUNY)",
    "url": "https://www.instagram.com/cunygse/",
    "latitude": 42.6553802,
    "longitude": -73.7597107,
  },
  {
    "name": "Tufts University",
    "url": "https://www.instagram.com/sjptufts/?hl=en",
    "latitude": 42.4085,
    "longitude": -71.1183,
  },
  {
    "name": "California Polytechnic State University",
    "url": "https://www.instagram.com/sjptufts/?hl=en",
    "latitude": 35.3050,
    "longitude": -120.6625,
  },
  {
    "name": "Emerson College",
    "url": "https://www.instagram.com/sjpemerson/",
    "latitude": 42.3522,
    "longitude": -71.0658,
  },
  {
    "name": "NYU",
    "url": "https://www.instagram.com/nyu_sjp/?hl=en",
    "latitude": 40.7295,
    "longitude": -73.9965,
  },
  {
    "name": "Yale University",
    "url": "https://www.instagram.com/yalies4palestine/?hl=en",
    "latitude": 41.316307,
    "longitude": -72.922585,
  },
  {
    "name": "Columbia University",
    "url": "https://www.instagram.com/sjp.columbia/?hl=en",
    "latitude": 40.807537,
    "longitude": -73.962570,
  },
  {
    "name": "Ohio State University",
    "url": "https://www.instagram.com/sjposu/?hl=en",
    "latitude": 40.0067,
    "longitude": -83.0305,
  },
  {
    "name": "The New School",
    "url": "https://www.instagram.com/tns.sjp/?hl=en",
    "latitude": 40.7346770613,
    "longitude": -73.9915093673,
  },
  {
    "name": "Cornell University",
    "url": "https://www.instagram.com/sjp.atcornell/",
    "latitude": 40.807537,
    "longitude": -73.962570,
  },
  {
    "name": "University of Texas at Dallas",
    "url": "https://www.instagram.com/sjputd/?hl=en",
    "latitude": 32.9857,
    "longitude": -96.7502,
  },
  {
    "name": "University of Michigan",
    "url": "https://www.instagram.com/safeumich/?hl=en",
    "latitude": 42.2771,
    "longitude": -83.7382,
  },
  {
    "name": "Brown University",
    "url": "https://www.instagram.com/brown.sjp/",
    "latitude": 41.8268,
    "longitude": -71.4025,
  },
  {
    "name": "UC Berkley",
    "url": "https://www.instagram.com/berkeleylawforpalestine/?hl=en",
    "latitude": 37.8702,
    "longitude": -122.259094,
  },
  {
    "name": "University of North Carolina",
    "url": "https://www.instagram.com/uncsjp/?hl=en",
    "latitude": 35.9049,
    "longitude": -79.0469,
  }
]
  
const map = L.map('map').setView([37.0902, -97.7129], 4);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

markList.forEach(m => 
   L.marker([m.latitude, m.longitude]).addTo(map)
            .bindPopup(`<b>${m.name}</b><br /><a href=${m.url} target="_blank">Link to IG page</a>`).closePopup());
