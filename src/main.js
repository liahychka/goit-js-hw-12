import { fetchPhotos } from './js/pixabay-api';
import { gallerryTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import closeIcon from './img/close.svg';
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
      showError('Error query');
        return;
    }

  currentPage = 1;
    showLoader();
    hideLoadBtn();

    try {
      const data = await fetchPhotos(query, currentPage);
      maxPage = Math.ceil(data.totalResults / perPage);

            if (maxPage === 0) {
              showError('Empty Result');
              hideLoader();
              updateBtnStatus();
              return;
            } 
            const markup = gallerryTemplate(data.imageData);
            gallery.innerHTML = markup;
    
    } catch (err) {
      showError(err);
    }

  hideLoader();
  updateBtnStatus();
}

btnLoadMore.addEventListener('click', async () => { 
  currentPage++; 
  hideLoadBtn();
  showLoader();

  try {
    const data = await fetchPhotos(query, currentPage);
    const markup = gallerryTemplate(data.imageData);
    gallery.insertAdjacentHTML('beforeend', markup);
    skipOldElement();
  } catch {
    console.log(error);
    showError(error.message);
  }
  
  hideLoader();
  updateBtnStatus();

});

function updateBtnStatus() {
   if (currentPage >= maxPage) {
    hideLoadBtn();

    if (maxPage) {
      iziToast.info({
        title: 'The End!',
        message: 'End of collection!',
      });
    }
  } else {
    showLoadBtn();
  }
}

// function popupMessage(message, color) {
//   iziToast.show({
//     message: message,
//     position: 'topRight',
//     backgroundColor: color,
//     iconUrl: closeIcon,
//     messageColor: '#fff',
//     theme: 'dark',
//     maxWidth: '350px',
//   });
// }

function showError(message) {
  iziToast.error({
    title: 'Error',
    message:  message,
  });
}

function showLoadBtn() {
  btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  btnLoadMore.classList.add('hidden');
}

function showLoader() {
  loadElem.classList.remove('hidden');
}

function hideLoader() {
  loadElem.classList.add('hidden');
}

function skipOldElement() {
  const itemGallery = gallery.children[0];
  const height = itemGallery.getBoundingClientRect().height;

    scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}