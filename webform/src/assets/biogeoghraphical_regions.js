import form from "./form";
import {getCountry, istestSession, BASEURL} from "../api"

let biogeoghraphical_regions = function(){
  return new Promise( (resolve, reject) => {
    getCountry().then((res) => {
      let path = BASEURL;
      if(istestSession()){
        path = "../../static/biogeoghraphical_regions/" + res + "_biogeographical_regions.json";
      } else {
        path = "https://webq2test.eionet.europa.eu/download/project/ias/file/" + res + "_biogeographical_regions.json";
      }

      fetch(path).then((regions) => {
        if(regions.status === 404) return [];
        return regions.json();
      }).catch((rej) => {
        reject(rej);
      }).then((regs) => {
        console.log(regs);
        if( "undefined" !== typeof regs ){
          const regions = regs.map((reg) => { return { text: reg.name, value: reg.regionCode} });
          //console.log(regs);
          resolve(regions);
        } else {
          resolve([]);
        }
      });
    });
  });
};
export default biogeoghraphical_regions
