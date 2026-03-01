'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: '51578655-789f059cc57625b159c2f433b',
    q: query,
    image_type: 'all',
    per_page: 9,
    orientation: 'horizontal',
    safesearch: true,
  });
  const api = 'https://pixabay.com/api/';

  return axios(`${api}?${params}`)
    .then(response => {
      const { hits } = response.data;
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return [];
      }
      return hits;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error.message}`,
        position: 'topRight',
      });
      return [];
    });
}
