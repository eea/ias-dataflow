import 'promise-polyfill/src/polyfill';
import axios from 'axios';

// const logRequests = process.env.NODE_ENV === 'production';

const api = axios.create({
  baseURL: baseUri,
  withCredentials: true
})

function fetch(path) {
  return api.get(path);
}

function post(path, data) {
  return api.post(path, data);
}

// request parameters
let isTestSession = true;

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production') {
  isTestSession = false;  
}


let baseUri = getParameterByName('base_uri');
let fileId = getParameterByName('fileId');
export let companyId = getParameterByName('companyId');
export let envelope = getParameterByName('envelope');
let sessionId = getParameterByName('sessionid');
let testCompanyId = getParameterByName('testCompanyId');


    function getParameterByName(name) {
      let  searchArr = window.location.search.split('?');
      let search = '?' + searchArr[searchArr.length - 1];
      let match = new RegExp('[?&]' + name + '=([^&]*)').exec(search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    };



    function getWebQUrl(path) {
      let url = baseUri + path;
      url += "?fileId=" + fileId;
      if (sessionId && sessionId != null) {
        url += "&sessionid=" + sessionId;
      }
      return url;
    }

    // helper function for getting query string parameter values. AngularJS solution $location.search() doesn't work in IE8.



    function getDomain(url) {
      return url.split("/").slice(0, 3).join("/");
    }


    export function saveInstance(data) {
      let url = getWebQUrl("/saveXml");
      return post(url, data);
    };


    export function getInstance() {
      let url = null;
      if(isTestSession){
        url = "http://localhost:8080/static/prefill.json"
      } else {
        url = null;
        url = getWebQUrl("/download/converted_user_file");
      }
        return fetch(url);
    };

    export function getEnvelopeXML(url) {
        return fetch(url + "/xml");
    };

    export function getCountry() {
      if(isTestSession){
        return fetch('http://localhost:8080/static/country.html')
      }else {
        return fetch(envelope + '/country_name')
      }
    }

    export function getURLlist() {
        return fetch(envelope + '/get_fgas_deliveries')
    }



    export function uploadFile(file) {
      var uploadUri;
      var domain = getDomain(window.location.href);
      var webqUri = getWebQUrl('/restProxyFileUpload');
      uploadUri = domain + webqUri + "&uri=" + envelope + "/manage_addDocument";

      return axios({
        method: 'post',
        withCredentials: true,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        url: uploadUri,
        data: file
      })

    };


    export function getSupportingFiles() {
      const url = envelope + '/get_envelope_supporting_files?buster=' + new Date().getTime();
      return axios({
        method: "get",
        withCredentials: true,
        cache: false,
        url: url
      })
    }

