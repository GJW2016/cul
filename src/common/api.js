import axios from 'axios';


function getCountries() {
    return axios.get('https://www.culturallydiversity.tk/country');
}
export {getCountries};


function getTags() {
    return axios.get('https://www.culturallydiversity.tk/tags');
}
export {getTags};

function getContents() {
    return axios.get('https://www.culturallydiversity.tk/contents');
}
export {getContents};