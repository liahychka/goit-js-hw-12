import{a as b,S as E,i as y}from"./assets/vendor-b0d10f48.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function h(e,a){const s="https://pixabay.com/api/",o={key:"44568681-27f71dafd313c70416816878f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a};try{const{data:t}=await b.get(s,{params:o});return t}catch{}}function L(e){return e.map(S).join("")}function S(e){return` <li class="gallery-item">
    <a href="${e.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
      width="360"
  /></a>
  <ul class="image-info-list">
    <li class="image-info-item">
      <p class="image-data-name">Likes</p>
      <p class="image-data">${e.likes}</p>
    </li>
    <li class="image-info-item">
      <p class="image-data-name">Views</p>
      <p class="image-data">${e.views}</p>
    </li>
    <li class="image-info-item">
      <p class="image-data-name">Comments</p>
      <p class="image-data">${e.comments}</p>
    </li>
    <li class="image-info-item">
      <p class="image-data-name">Downloads</p>
      <p class="image-data">${e.downloads}</p>
    </li>
  </ul>
</li>`}const q=document.querySelector(".form-search"),f=document.querySelector(".gallery");document.querySelector(".loader");new E(".gallery a",{captionsData:"alt",captionDelay:350});const p=document.querySelector(".js-btn-load"),v=document.querySelector(".js-loader");let n="",i=1,c=0;const P=15;q.addEventListener("submit",O);async function O(e){if(e.preventDefault(),n=e.target.elements.searchField.value.trim(),!n){l("Error query");return}i=1,w(),g();try{const a=await h(n,i);if(c=Math.ceil(a.totalResults/P),c===0){l("Empty Result"),u(),m();return}const s=L(a.imageData);f.innerHTML=s}catch(a){l(a)}u(),m()}p.addEventListener("click",async()=>{i++,g(),w();try{const e=await h(n,i),a=L(e.imageData);f.insertAdjacentHTML("beforeend",a),D()}catch{console.log(error),l(error.message)}u(),m()});function m(){i>=c?(g(),c&&y.info({title:"The End!",message:"End of collection!"})):$()}function l(e){y.error({title:"Error",message:e})}function $(){p.classList.remove("visually-hidden")}function g(){p.classList.add("visually-hidden")}function w(){v.classList.remove("visually-hidden")}function u(){v.classList.add("visually-hidden")}function D(){const a=f.children[0].getBoundingClientRect().height;scrollBy({top:a*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
