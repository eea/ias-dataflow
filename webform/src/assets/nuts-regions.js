import form from "./form";
import {getCountry} from "../api"

let nuts = function(){
  return new Promise(function(resolve, reject) {
    getCountry().then((res) => {
      let country = res.data;
      fetch("../../static/nuts_regions/" + country + "_nuts_regions.json")
      .then((regions) => {
        return regions.json();
      }).catch((rej) => {
        resolve([]);
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
export default nuts
