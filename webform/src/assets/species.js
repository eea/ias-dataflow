import {istestSession, BASEURL } from "../api"

const species = function () {
  return new Promise(function(resolve, reject) {
    //getCountry().then((res) => {
      let path = BASEURL;
      if(istestSession()){
        path = "../../static/species.json";
      } else {
        path = "https://webq2test.eionet.europa.eu/download/project/ias/file/species.json";
      }

      fetch(path).then((res) => {
        resolve(res.json());
      }).catch((rej) => {
        console.error("could not fetch species.json");
        console.error(rej);
        reject(rej);
      });
    });
  //});
};

export default species
