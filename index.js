import{a as h,S as q,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();h.defaults.baseURL="https://pixabay.com/api/";async function y(r,e){const l={params:{key:"51376932-00c07b39d8c117a87ed229cff",q:r,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}};return(await h.get("",l)).data}const g=document.querySelector(".gallery"),v=document.querySelector(".load-more-btn");let u=null;function L(r){const e=r.map(s=>`<li class = "gallery-item"><a href = "${s.largeImageURL}"><img class = "gallery-img" src = "${s.webformatURL}" alt = "${s.tags}"> </a> 
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
          
  </li>`).join("");g.insertAdjacentHTML("beforeend",e),u?u.refresh():u=new q(".gallery a",{captionDelay:250})}function P(){g.innerHTML=""}function b(){document.querySelector(".loader").classList.add("is-hidden")}function w(){document.querySelector(".loader").classList.remove("is-hidden")}function S(){v.classList.remove("is-hidden")}function a(){v.classList.add("is-hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more-btn");let i=1,c=null,p=15,f=0,m=null;const B=async r=>{if(r.preventDefault(),c=r.target.elements["search-text"].value.trim(),i=1,P(),a(),c===""){n.error({message:"Please enter a valid search query.",position:"topRight"});return}w();try{const e=await y(c,i);if(!e.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a();return}L(e.hits),f=Math.ceil(e.totalHits/p),e.totalHits>p?S():a()}catch(e){n.error({message:e}),a()}finally{b()}},R=async r=>{i+=1,w();try{const e=await y(c,i);L(e.hits),m=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:m*2,behavior:"smooth"}),i>=f&&(a(),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){n.error({message:e})}finally{b(),i<f&&S()}};M.addEventListener("submit",B);$.addEventListener("click",R);
//# sourceMappingURL=index.js.map
