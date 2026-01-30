import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './css/loader.css';

// імпорт функцій
import { getImagesByQuery } from './js/pixabay-api.js';
import {createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions.js';

// отримуємо посилання на форму
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

// додала фунцію штучної затримки (щоб показати робьоту лоадера)
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

//основна функція обробки сабміту форми
function onFormSubmit(event) {
  event.preventDefault();

  // отримуємо значення полів форми
  const query = event.target.elements['search-text'].value.trim();
  // додатково добавлена можливість вибору мови
  const lang = event.target.elements.language.value;

  //додана перевірка вмісту текстового поля на наявність порожнього рядка, у відповідності до завдання, але зайва при використанні required
  if (query === '') {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  // запускаємо запит і затримку параллельно
  const requestPromise = getImagesByQuery(query, lang);
  const delayPromise = delay(2000);

  // чекаємо і запит, і мінімальну затримку
  Promise.all([requestPromise, delayPromise])
    .then(([data]) => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      formEl.reset();  // чистимо поле вводу після завершення обробки
    });
}
