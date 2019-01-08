import form from "./form";
import {getCountry, istestSession, BASEURL} from "../api"

let river_basins = function(){
  return new Promise( (resolve, reject) => {
    getCountry().then((res) => {
      let path = BASEURL;
      if(istestSession()){
        path = "../../static/river_basins/" + res + "_river_basins.json";
      } else {
        path = "https://webq2test.eionet.europa.eu/download/project/ias/file/" + res + "_river_basins.json";
      }

      fetch(path).then(basins => {
        if(basins.status === 404) return [];
        return basins.json();
      }).catch((rej) => {
        reject(rej);
      }).then((bas) => {
        if( "undefined" !== typeof bas ){
          const bs = bas.map((b) => { return { text: b.name, value: b.name} });
          resolve(bs);
        } else {
          resolve([]);
        }
      });
    });
  });
};
export default river_basins
