import{a as f,S as d,i as n}from"./assets/vendor-dgoA7Xew.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",p="23862309-642a8b5e3128a5abba1046e7c";function y(i,r){const s={key:p,q:i,lang:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:s}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${a}</p>
          <p class="info-item"><b>Comments</b> ${u}</p>
          <p class="info-item"><b>Downloads</b> ${m}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",v);function v(i){var o;i.preventDefault();const r=i.target.elements["search-text"].value.trim(),s=((o=i.target.elements.language)==null?void 0:o.value)??"en";if(r===""){n.error({message:"Please enter a search query.",position:"topRight"});return}L(),S(),y(r,s).then(e=>{if(!e.hits||e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
