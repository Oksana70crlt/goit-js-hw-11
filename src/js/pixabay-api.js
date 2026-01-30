import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23862309-642a8b5e3128a5abba1046e7c';

export function getImagesByQuery(query, lang) {
  const params = {
    key: API_KEY,
    q: query,
    lang: lang,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)   
}
