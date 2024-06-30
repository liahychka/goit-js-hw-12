import{a as E,S,i as L}from"./assets/vendor-b0d10f48.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function v(e,a){const s="https://pixabay.com/api/",i={key:"44568681-27f71dafd313c70416816878f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a};try{const{data:t}=await E.get(s,{params:i});return t}catch{}}function b(e){return e.map(q).join("")}function q(e){return` <li class="gallery-item">
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
</li>`}const P=document.querySelector(".form-search"),p=document.querySelector(".gallery"),u=document.querySelector(".loader"),O=new S(".gallery a",{captionsData:"alt",captionDelay:350}),h=document.querySelector(".js-btn-load"),y=document.querySelector(".js-loader");let n="",o=1,c=0;const $=15;P.addEventListener("submit",T);async function T(e){if(e.preventDefault(),n=e.target.elements.searchField.value.trim(),!n){l("Error");return}o=1,w(u),g();try{const a=await v(n,o);if(c=Math.ceil(a.totalHits/$),c===0){l("Empty Result"),f(u),m();return}const s=b(a.hits);p.innerHTML=s,O.refresh()}catch(a){l(a)}f(u),m()}h.addEventListener("click",async()=>{o++,g(),w(y);try{const e=await v(n,o),a=b(e.hits);p.insertAdjacentHTML("beforeend",a),B()}catch{console.log(error),l(error.message)}f(y),m()});function m(){o>=c?(g(),c&&L.info({title:"The End!",message:"We're sorry, but you've reached the end of search results."})):x()}function l(e){L.error({title:"Error",message:e})}function x(){h.classList.remove("visually-hidden")}function g(){h.classList.add("visually-hidden")}function w(e){e.classList.remove("visually-hidden")}function f(e){e.classList.add("visually-hidden")}function B(){const a=p.children[0].getBoundingClientRect().height;scrollBy({top:a*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
