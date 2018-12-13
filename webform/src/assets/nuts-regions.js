import form from "./form";
import {getCountry} from "../api"

let nuts = function(){
  return new Promise(function(resolve, reject) {
    getCountry().then((res) => {
      let country = res.data;
      fetch("../../static/nuts_regions/" + country + "_nuts_regions.json").
      then((regions) => {
        return regions.json();
      }).catch((rej) => {
        reject(rej);
      }).then((regs) => {
        const regions = regs.map((reg) => { return { text: reg.label, value: reg.id} });
        resolve(regions);
      });
    });
  });

  /*return {
    "@context": {
      "@base": "http://dd.eionet.europa.eu/vocabulary/common/nuts/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "concepts": "skos:Concept",
      "prefLabel": "skos:prefLabel",
      "broader": "skos:broader",
      "narrower": "skos:narrower",
      "@language": "en"
    },
    "concepts": [
      {
        "@id": "AT",
        "@type": "skos:Concept",
        "prefLabel": [
          {
            "@value": "ÖSTERREICH",
            "@language": "en"
          }
        ],
        "narrower": [
          {
            "@id": "AT1"
          },
          {
            "@id": "AT2"
          },
          {
            "@id": "AT3"
          },
          {
            "@id": "ATZ"
          }
        ]
      },


    ]
  };*/
};

export default nuts
