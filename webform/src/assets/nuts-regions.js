import form from "./form";
import {getCountry, istestSession } from "../api"

let nuts = function(){
  return new Promise(function(resolve, reject) {

    getCountry().then((res) => {
      let path = null;
      if(istestSession()){
        path = "../../static/nuts_regions/" + res + "_nuts_regions.json";
      } else {
        path = "";
      }
      fetch(path).then((regions) => {
        return regions.json();
      }).catch((rej) => {
        resolve({ country: res, data: []});
      }).then((regs) => {
        if( "undefined" !== typeof regs ){
          const regions = regs.map((reg) => { return { text: reg.label, value: reg.id} });
          resolve( { country: res, data: regions });
        } else {
          resolve({ country: res, data: [] });
        }
      });
    });
  });
};
export default nuts
