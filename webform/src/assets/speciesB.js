import form from "./form";
import {getCountry, istestSession, BASEURL} from "../api"
import speciesBAll  from './speciesBAll.js'

let speciesB = function(){
  return new Promise( (resolve, reject) => {
    getCountry().then((res) => {
      let path = BASEURL;
      if(istestSession()){
        path = "../../static/speciesb/" + res + "_speciesB.json";
      } else {
        path = "https://webq2test.eionet.europa.eu/download/project/ias/file/" + res + "_speciesB.json";
      }

      fetch(path).then(res => {
        if(res.status === 404) return speciesBAll;
        return res.json();
      }).catch((rej) => {
        reject(rej);
      }).then((bas) => {
        if( "undefined" !== typeof bas ){
          resolve(bas);
        } else {
          resolve([]);
        }
      });
    });
  });
};
export default speciesB
