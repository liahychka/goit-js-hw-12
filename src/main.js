import { fetchPhotos } from './js/pixabay-api';
import { gallerryTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const formSearch = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
});
const btnLoadMore = document.querySelector('.js-btn-load');
const loadElem = document.querySelector('.js-loader');

let query = '';
let currentPage = 1;
let maxPage = 0;
const perPage = 15; 

formSearch.addEventListener('submit', submitActive);

async function submitActive(e){
  e.preventDefault();
  
  query = e.target.elements.searchField.value.trim();
  
    if (!query) {
      showError('Error');
        return;
    }

  currentPage = 1;
    showLoader(loader);
    hideLoadBtn();

    try {
      const data = await fetchPhotos(query, currentPage);
      maxPage = Math.ceil(data.totalHits / perPage);

            if (maxPage === 0) {
              showError('Empty Result');
              hideLoader(loader);
              updateBtnStatus();
              return;
            } 
      const markup = gallerryTemplate(data.hits);
      gallery.innerHTML = markup;
      lightbox.refresh();
    
    } catch (err) {
      showError(err);
    }
  

  hideLoader(loader);
  updateBtnStatus();
}


btnLoadMore.addEventListener('click', async () => { 
  currentPage++; 
  hideLoadBtn();
  showLoader(loadElem);

  try {
    const data = await fetchPhotos(query, currentPage);
    const markup = gallerryTemplate(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    skipOldElement();
  } catch {
    console.log(error);
    showError(error.message);
  }
  
  hideLoader(loadElem);
  updateBtnStatus();

});

function updateBtnStatus() {
   if (currentPage >= maxPage) {
     hideLoadBtn();

    if (maxPage) {
      iziToast.info({
        title: 'The End!',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } else {
    showLoadBtn();
  }
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

function showLoadBtn() {
  btnLoadMore.classList.remove('visually-hidden');
}
function hideLoadBtn() {
  btnLoadMore.classList.add('visually-hidden');
}

function showLoader(element) {
  element.classList.remove('visually-hidden');
}

function hideLoader(element) {
  element.classList.add('visually-hidden');
}

function skipOldElement() {
  const itemGallery = gallery.children[0];
  const height = itemGallery.getBoundingClientRect().height;

    scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}
