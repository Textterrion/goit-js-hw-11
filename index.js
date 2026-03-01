import{S as f,a as m,i as n}from"./assets/vendor-C0Ak4rWs.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(r){const o=document.querySelector(".gallery"),i=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:l,comments:u,downloads:d})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                class="gallery-image" width="360" height="200"
                src="${s}"
                alt="${t}"
              />
            </a>
            <div class="info-card">
              <p class="info-item">
                <b>Likes</b> ${a}
              </p>
              <p class="info-item">
                <b>Views</b> ${l}
              </p>
              <p class="info-item">
                <b>Comments</b> ${u}
              </p>
              <p class="info-item">
                <b>Downloads</b> ${d}
              </p>
          </li>`).join("");o.insertAdjacentHTML("beforeend",i),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function g(){const r=document.querySelector(".loader");r&&r.classList.remove("hidden")}function h(){const r=document.querySelector(".loader");r&&r.classList.add("hidden")}function b(r){const o=new URLSearchParams({key:"51578655-789f059cc57625b159c2f433b",q:r,image_type:"all",per_page:9,orientation:"horizontal",safesearch:!0});return m(`https://pixabay.com/api/?${o}`).then(s=>{const{hits:e}=s.data;return e.length===0?(n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):e}).catch(s=>(n.error({title:"Error",message:`An error occurred: ${s.message}`,position:"topRight"}),[]))}const c=document.querySelector(".form");c.addEventListener("submit",r=>{r.preventDefault(),y(),g();const o=document.querySelector('[name="search-text"]').value.trim();b(o).then(i=>{p(i)}).catch(i=>{n.error({title:"Error",message:`An error occurred: ${i.message}`,position:"topRight"})}).finally(()=>{h(),c.reset()})});
//# sourceMappingURL=index.js.map
