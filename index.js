import{a as d,S as g,i as a}from"./assets/vendor-dgoA7Xew.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="23862309-642a8b5e3128a5abba1046e7c";function h(o,r){const i={key:y,q:o,lang:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:i}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:m,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${i}" alt="${e}" loading="lazy" />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${n}</p>
          <p class="info-item"><b>Comments</b> ${m}</p>
          <p class="info-item"><b>Downloads</b> ${f}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function P(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",v);function w(o){return new Promise(r=>{setTimeout(r,o)})}function v(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim(),i=o.target.elements.language.value;if(r===""){a.error({message:"Please enter a search query.",position:"topRight"});return}P(),S();const s=h(r,i),e=w(2e3);Promise.all([s,e]).then(([t])=>{if(!t.hits||t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
