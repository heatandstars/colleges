markList = [
  {
    "name": "Smith College",
    "url": "https:google.com",
    "latitude": 42.328674,
    "longitude": -72.664658,
  },
  {
    "name": "Barnard College",
    "url": "https:google.com",
    "latitude": 40.8095,
    "longitude": -73.9634,
  },
  {
    "name": "University of Rochester",
    "url": "https:ge.com",
    "latitude": 43.122429,
    "longitude": -77.630676,
  },
  {
    "name": "Harvard University",
    "url": "https:ge.com",
    "latitude": 42.3744,
    "longitude": -71.1182,
  },
  {
    "name": "MIT",
    "url": "https:ge.com",
    "latitude": 42.3601,
    "longitude": -71.0942,
  },
  {
    "name": "Tufts University",
    "url": "https:ge.com",
    "latitude": 42.4085,
    "longitude": -71.1183,
  },
  {
    "name": "Emerson College",
    "url": "https:ge.com",
    "latitude": 42.3522,
    "longitude": -71.0658,
  },
  {
    "name": "NYU",
    "url": "https:ge.com",
    "latitude": 40.7295,
    "longitude": -73.9965,
  },
  {
    "name": "Yale College",
    "url": "https:ge.com",
    "latitude": 41.316307,
    "longitude": -72.922585,
  },
  {
    "name": "Columbia University",
    "url": "https:ge.com",
    "latitude": 40.807537,
    "longitude": -73.962570,
  },
  {
    "name": "Ohio State University",
    "url": "https:ge.com",
    "latitude": 40.0067,
    "longitude": -83.0305,
  },
  {
    "name": "University of Michigan",
    "url": "https:ge.com",
    "latitude": 42.2771,
    "longitude": -83.7382,
  },
  {
    "name": "Boston University",
    "url": "https:ge.com",
    "latitude": 42.3505,
    "longitude": -71.1054,
  },
  {
    "name": "University of North Carolina",
    "url": "https:ge.com",
    "latitude": 35.9049,
    "longitude": -79.0469,
  }
]
  
const map = L.map('map').setView([38.94394785565654, -73.90232236283592], 5);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

markList.forEach(m => 
   L.marker([m.latitude, m.longitude]).addTo(map)
            .bindPopup(`<b>${m.name}</b><br /><a href=${m.url}>Link to IG page</a>`).closePopup());
