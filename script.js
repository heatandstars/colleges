markList = [
  {
    "name": "Barnard College",
    "url": "https://www.instagram.com/sjp.columbia/?hl=en",
    "coords": [40.8095, -73.9634],
  },
  {
    "name": "Brown University",
    "url": "https://www.instagram.com/brown.sjp/",
    "coords": [41.8268, -71.4025],
  },
  {
    "name": "California Polytechnic State University",
    "url": "https://www.instagram.com/sjptufts/?hl=en",
    "coords": [35.3050, -120.6625],
  },
  {
    "name": "The City University of New York (CUNY)",
    "url": "https://www.instagram.com/cunygse/",
    "coords": [42.6553802, -73.7597107],
  },
  {
    "name": "Columbia University",
    "url": "https://www.instagram.com/sjp.columbia/?hl=en",
    "coords": [40.809386964063705, -73.96246436828531],
  },
  {
    "name": "Cornell University",
    "url": "https://www.instagram.com/sjp.atcornell/",
    "coords": [42.454093327908126, -76.47325731723872],
  },
  {
    "name": "Emerson College",
    "url": "https://www.instagram.com/sjpemerson/",
    "coords": [42.3522, -71.0658],
  },
  {
    "name": "Harvard University",
    "url": "",
    "coords": [42.37519621134276, -71.11820621204016],
  },
  {
    "name": "Massachusetts Institute of Technology (MIT)",
    "url": "https://www.instagram.com/mit_caa/",
    "coords": [42.3601,-71.0942],
  },
  {
    "name": "New York University (NYU)",
    "url": "https://www.instagram.com/nyu_sjp/?hl=en",
    "coords": [40.7295,-73.9965],
  },
  {
    "name": "The New School",
    "url": "https://www.instagram.com/tns.sjp/?hl=en",
    "coords": [40.7346770613,-73.9915093673],
  },
  {
    "name": "Ohio State University",
    "url": "https://www.instagram.com/sjposu/?hl=en",
    "coords": [40.0067,-83.0305],
  },
  {
    "name": "Princeton University",
    "url": "https://www.instagram.com/sjposu/?hl=en",
    "coords": [40.34323318578342, -74.65500953085301],
  },
  {
    "name": "Smith College",
    "url": "https://www.instagram.com/smith_sjp/",
    "coords": [42.328674,-72.664658],
  },
  {
    "name": "Tufts University",
    "url": "https://www.instagram.com/sjptufts/?hl=en",
    "coords": [42.4085,-71.1183],
  },
  {
    "name": "University of California (UC) Berkley",
    "url": "https://www.instagram.com/berkeleylawforpalestine/?hl=en",
    "coords": [37.8702,-122.259094],
  },
  {
    "name": "University of Michigan",
    "url": "https://www.instagram.com/safeumich/?hl=en",
    "coords": [42.2771,-83.7382],
  },
  {
    "name": "University of Minnesota",
    "url": "https://www.instagram.com/sjpumn/?hl=en",
    "coords": [44.97412658867595,-93.22771777478597],
  },
  {
    "name": "University of North Carolina",
    "url": "https://www.instagram.com/uncsjp/?hl=en",
    "coords": [35.9049,-79.0469],
  },
  {
    "name": "University of Pittsburgh",
    "url": "https://www.instagram.com/sjp_pitt/?hl=en",
    "coords": [40.4443830512105, -79.96070916523215],
  },
  {
    "name": "University of Rochester",
    "url": "https://www.instagram.com/sjp.ur/?hl=en",
    "coords": [43.122429,-77.630676],
  },
  {
    "name": "University of Southern California (USC)",
    "url": "https://www.instagram.com/uscscale/?hl=en",
    "coords": [34.0224,-118.2851],
  },
  {
    "name": "University of Texas st Arlington",
    "url": "https://www.instagram.com/sjp.uta",
    "coords": [32.72941023391459, -97.11525074839436],
  },
  {
    "name": "University of Texas st Austin",
    "url": "https://www.instagram.com/psc_atx/?hl=en",
    "coords": [30.291144043400674,-97.73432705312356],
  },
  {
    "name": "University of Texas at Dallas",
    "url": "https://www.instagram.com/sjputd/?hl=en",
    "coords": [32.9857,-96.7502],
  },
  {
    "name": "Yale University",
    "url": "https://www.instagram.com/yalies4palestine/?hl=en",
    "coords": [41.316307,-72.922585],
  },
]

document.getElementById("total").innerHTML = `This map currently includes ${markList.length} universities and colleges.`;
  
const map = L.map('map').setView([37.0902, -97.7129], 4);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

markList.forEach(m => 
   L.marker([m.coords[0], m.coords[1]]).addTo(map)
            .bindPopup(`<b>${m.name}</b><br /><a href=${m.url} target="_blank">Link to IG page</a>`).closePopup());
