import form from "./form";
import {getCountry} from "../api"

let nuts = function(){
  return new Promise(function(resolve, reject) {
    getCountry().then((res) => {
      fetch("../../static/nuts_regions/" + res + "_nuts_regions.json")
      .then((regions) => {
        return regions.json();
      }).catch((rej) => {
        resolve({ country: country, data: []});
      }).then((regs) => {
        if( "undefined" !== typeof regs ){
          const regions = regs.map((reg) => { return { text: reg.label, value: reg.id} });
          resolve( { country: country, data: regions });
        } else {
          resolve({ country: country, data: [] });
        }
      });
    });
  });
};
export default nuts
