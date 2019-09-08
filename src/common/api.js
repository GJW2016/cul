import axios from 'axios';


function getCountries() {
    return axios.get('https://www.culturallydiversity.tk/country');
}
export {getCountries};