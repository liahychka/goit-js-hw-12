import axios from 'axios';

export async function fetchPhotos(query, currentPage) {
    const url = 'https://pixabay.com/api/';
    const params = {
        key: '44568681-27f71dafd313c70416816878f',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: currentPage,
    };

    try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch (error) {
  }

}