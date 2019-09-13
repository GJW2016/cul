import axios from 'axios';

//data APIs
function getCountries() {
    return axios.get('https://www.culturallydiversity.tk/countries');
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

function getEvents() {
    return axios.get('https://www.culturallydiversity.tk/events');
}
export {getEvents};

function getFestivals() {
    return axios.get('https://www.culturallydiversity.tk/festivals');
}
export {getFestivals};


export function getQuizzes() {
  return axios.get("https://www.culturallydiversity.tk/quizzes");
}