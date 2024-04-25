markList = [
  {
    "name": "Barnard College",
    "url": "https://www.instagram.com/sjp.columbia/?hl=en",
    "latitude": 40.8095,
    "longitude": -73.9634,
  },
  {
    "name": "Brown University",
    "url": "https://www.instagram.com/brown.sjp/",
    "latitude": 41.8268,
    "longitude": -71.4025,
  },
  {
    "name": "California Polytechnic State University",
    "url": "https://www.instagram.com/sjptufts/?hl=en",
    "latitude": 35.3050,
    "longitude": -120.6625,
  },
  {
    "name": "The City University of New York (CUNY)",
    "url": "https://www.instagram.com/cunygse/",
    "la. itude": 42.6553802,
    "longitude": -73.7597107,
  },
  {
    "name": "Columbia University",
    "url": "https://www.instagram.com/sjp.columbia/?hl=en",
    "latitude": 40.809386964063705,
    "longitude": -73.96246436828531,
  },
  {
    "name": "Cornell University",
    "url": "https://www.instagram.com/sjp.atcornell/",
    "latitude": 42.454093327908126,
    "longitude": -76.47325731723872,
  },
  {
    "name": "Emerson College",
    "url": "https://www.instagram.com/sjpemerson/",
    "latitude": 42.3522,
    "longitude": -71.0658,
  },
  {
    "name": "Harvard University",
    "url": "",
    "latitude": 42.37519621134276, 
    "longitude": -71.11820621204016,
  },
  {
    "name": "MIT",
    "url": "https://www.instagram.com/mit_caa/",
    "latitude": 42.3601,
    "longitude": -71.0942,
  },
  {
    "name": "New York University (NYU)",
    "url": "https://www.instagram.com/nyu_sjp/?hl=en",
    "latitude": 40.7295,
    "longitude": -73.9965,
  },
  {
    "name": "The New School",
    "url": "https://www.instagram.com/tns.sjp/?hl=en",
    "latitude": 40.7346770613,
    "longitude": -73.9915093673,
  },
  {
    "name": "Ohio State University",
    "url": "https://www.instagram.com/sjposu/?hl=en",
    "latitude": 40.0067,
    "longitude": -83.0305,
  },
  {
    "name": "Smith College",
    "url": "https://www.instagram.com/smith_sjp/",
    "latitude": 42.328674,
    "longitude": -72.664658,
  },
  {
    "name": "Tufts University",
    "url": "https://www.instagram.com/sjptufts/?hl=en",
    "latitude": 42.4085,
    "longitude": -71.1183,
  },
  {
    "name": "University of California (UC) Berkley",
    "url": "https://www.instagram.com/berkeleylawforpalestine/?hl=en",
    "latitude": 37.8702,
    "longitude": -122.259094,
  },
  {
    "name": "University of Michigan",
    "url": "https://www.instagram.com/safeumich/?hl=en",
    "latitude": 42.2771,
    "longitude": -83.7382,
  },
  {
    "name": "University of North Carolina",
    "url": "https://www.instagram.com/uncsjp/?hl=en",
    "latitude": 35.9049,
    "longitude": -79.0469,
  },
  {
    "name": "University of Rochester",
    "url": "https://www.instagram.com/sjp.ur/?hl=en",
    "latitude": 43.122429,
    "longitude": -77.630676,
  },
  {
    "name": "University of Southern California (USC)",
    "url": "https://www.instagram.com/uscscale/?hl=en",
    "latitude": 34.0224,
    "longitude": -118.2851,
  },
  {
    "name": "University of Texas st Austin",
    "url": "https://www.instagram.com/psc_atx/?hl=en",
    "latitude": 30.291144043400674,
    "longitude": -97.73432705312356,
  }
  {
    "name": "University of Texas at Dallas",
    "url": "https://www.instagram.com/sjputd/?hl=en",
    "latitude": 32.9857,
    "longitude": -96.7502,
  },
  {
    "name": "Yale University",
    "url": "https://www.instagram.com/yalies4palestine/?hl=en",
    "latitude": 41.316307,
    "longitude": -72.922585,
  },
]
  
const map = L.map('map').setView([37.0902, -97.7129], 4);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

markList.forEach(m => 
   L.marker([m.latitude, m.longitude]).addTo(map)
            .bindPopup(`<b>${m.name}</b><br /><a href=${m.url} target="_blank">Link to IG page</a>`).closePopup());
