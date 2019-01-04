import form from "./form";
import {getCountry, istestSession, BASEURL} from "../api"

let marine_subregions = function(){
  return new Promise( (resolve, reject) => {
    getCountry().then((res) => {
      let path = BASEURL;
      if(istestSession()){
        path = "../../static/marine_subregions/" + res + "_marine_subregions.json";
      } else {
        path = "https://webq2test.eionet.europa.eu/download/project/ias/file/" + res + "_marine_subregions.json";
      }
      fetch(path).then((regions) => {
        if(regions.status === 404) return [];
        return regions.json();
      }).catch((rej) => {
        reject(rej);
      }).then((regs) => {
        if( "undefined" !== typeof regs ){
          const regions = regs.map((reg) => { return { text: reg.label, value: reg.id} });
          resolve(regions);
        } else {
          resolve([]);
        }
      });
    });
  });
};
export default marine_subregions
