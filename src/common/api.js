import axios from 'axios';

//data APIs
function getCountries() {
    return axios.get('https://www.c-diversity.social/countries');
}
export {getCountries};


function getTags() {
    return axios.get('https://www.c-diversity.social/tags');
}
export {getTags};

function getContents() {
    return axios.get('https://www.c-diversity.social/contents');
}
export {getContents};

function getEvents() {
    return axios.get('https://www.c-diversity.social/events');
}
export {getEvents};

function getFestivals() {
    return axios.get('https://www.c-diversity.social/festivals');
}
export {getFestivals};

export function getQuizzes() {
  return axios.get("https://www.c-diversity.social/quizzes");
}

export function getRecipes() {
  return axios.get("https://www.c-diversity.social/recipes");
}

export function getRestaurants() {
  return axios.get("https://www.c-diversity.social/restaurants");
}

