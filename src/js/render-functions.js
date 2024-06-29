export function gallerryTemplate(imageData) {
    return imageData.map(imageTemplate).join('');
}

function imageTemplate(image) {
  return ` <li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${image.webformatURL}"
      alt="${image.tags}"
      width="360"
  /></a>
  <ul class="image-info-list">
    <li class="image-info-item">
      <p class="image-data-name">Likes</p>
      <p class="image-data">${image.likes}</p>
    </li>
    <li class="image-info-item">
      <p class="image-data-name">Views</p>
      <p class="image-data">${image.views}</p>
    </li>
    <li class="image-info-item">
      <p class="image-data-name">Comments</p>
      <p class="image-data">${image.comments}</p>
    </li>
    <li class="image-info-item">
      <p class="image-data-name">Downloads</p>
      <p class="image-data">${image.downloads}</p>
    </li>
  </ul>
</li>`;
}