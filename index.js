import{a as m,S,i as u}from"./assets/vendor-DqB7j7Ix.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();m.defaults.baseURL="https://pixabay.com/api/";async function y(r,e){const n={params:{key:"51376932-00c07b39d8c117a87ed229cff",q:r,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}};return(await m.get("",n)).data}const g=document.querySelector(".gallery"),h=document.querySelector(".load-more-btn");let d=null;function v(r){const e=r.map(s=>`<li class = "gallery-item"><a href = "${s.largeImageURL}"><img class = "gallery-img" src = "${s.webformatURL}" alt = "${s.tags}"> </a> 
       <div class="info">
    <div class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value"> ${s.likes}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${s.views}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${s.comments}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${s.downloads}</p>
    </div>
  </div>
          
  </li>`).join("");g.insertAdjacentHTML("beforeend",e),d?d.refresh():d=new S(".gallery a",{captionDelay:250})}function q(){g.innerHTML=""}function L(){document.querySelector(".loader").classList.add("is-hidden")}function b(){document.querySelector(".loader").classList.remove("is-hidden")}function w(){h.classList.remove("is-hidden")}function i(){h.classList.add("is-hidden")}const P=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let a=1,l=null,p=15,f=0;const $=async r=>{if(r.preventDefault(),l=r.target.elements["search-text"].value.trim(),a=1,q(),i(),l===""){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b();try{const e=await y(l,a);if(!e.hits.length){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i();return}v(e.hits),f=Math.ceil(e.totalHits/p),e.totalHits>p?w():i()}catch(e){console.log(e),i()}finally{L()}},O=async r=>{a+=1,b();try{const e=await y(l,a);v(e.hits),a>=f&&(i(),u.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}finally{L(),a<f&&w()}};P.addEventListener("submit",$);M.addEventListener("click",O);
//# sourceMappingURL=index.js.map
