import{a as w,S,i as y}from"./assets/vendor-b0d10f48.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function L(e,a){const s="https://pixabay.com/api/",n={key:"44568681-27f71dafd313c70416816878f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a};try{const{data:t}=await w.get(s,{params:n});return t}catch{}}function v(e){return e.map(q).join("")}function q(e){return` <li class="gallery-item">
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
</li>`}const E=document.querySelector(".form-search"),p=document.querySelector(".gallery"),i=document.querySelector(".loader"),P=new S(".gallery a",{captionsData:"alt",captionDelay:350}),h=document.querySelector(".js-btn-load");document.querySelector(".js-loader");let l="",o=1,d=0;const O=15;E.addEventListener("submit",$);async function $(e){if(e.preventDefault(),l=e.target.elements.searchField.value.trim(),!l){c("Error query");return}o=1,b(i),g();try{const a=await L(l,o);if(d=Math.ceil(a.totalHits/O),d===0){c("Empty Result"),f(i),m();return}const s=v(a.hits);p.innerHTML=s,P.refresh()}catch(a){c(a)}f(i),m()}h.addEventListener("click",async()=>{o++,g(),b(i);try{const e=await L(l,o),a=v(e.hits);p.insertAdjacentHTML("beforeend",a),x()}catch{console.log(error),c(error.message)}f(i),m()});function m(){o>=d?(g(),d&&y.info({title:"The End!",message:"We're sorry, but you've reached the end of search results."})):T()}function c(e){y.error({title:"Error",message:e})}function T(){h.classList.remove("visually-hidden")}function g(){h.classList.add("visually-hidden")}function b(e){e.classList.remove("visually-hidden")}function f(e){e.classList.add("visually-hidden")}function x(){const a=p.children[0].getBoundingClientRect().height;scrollBy({top:a*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
