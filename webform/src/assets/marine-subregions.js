import form from "./form";
import {getCountry} from "../api"

let marine_subregions = function(){
  return new Promise( (resolve, reject) => {
    getCountry().then((res) => {
      fetch("../../static/marine_subregions/" + res + "_marine_subregions.json")
        .then((regions) => {
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
