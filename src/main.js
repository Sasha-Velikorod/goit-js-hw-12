import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let searchQuery = null;
let perPage = 15;
let lastPage = 0;
let cardHeight = null;

const onSubmit = async e => {
  e.preventDefault();

  searchQuery = e.target.elements['search-text'].value.trim();
  page = 1;

  clearGallery();
  hideLoadMoreButton();

  if (searchQuery === '') {
    iziToast.error({
      message: 'Please enter a valid search query.',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(data.hits);

    lastPage = Math.ceil(data.totalHits / perPage);

    if (data.totalHits > perPage) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: error,
    });
    hideLoadMoreButton();
  } finally {
    hideLoader();
  }
};

const onClick = async e => {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    createGallery(data.hits);

    cardHeight = document
      .querySelector('.gallery-item')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page >= lastPage) {
      hideLoadMoreButton();
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: error,
    });
  } finally {
    hideLoader();
    if (page < lastPage) {
      showLoadMoreButton();
    }
  }
};

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onClick);
