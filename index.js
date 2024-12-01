import{i as l,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function h(r){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"47392401-769446c280b709c486589ce4f",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);if(e)return e.json()}).then(e=>{if(e.hits&&e.hits.length===0)l.show({position:"topRight",iconUrl:"../img/x.svg",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white"});else return e.hits}).catch(e=>console.log(e))}function p(r){const i=document.querySelector(".gallery"),s=r.map(({largeImageURL:t,webformatURL:o,tags:n,likes:a,views:c,comments:u,downloads:f})=>`
            <li class="list-item">

            <a href="${t}" >  <img class="image" src="${o}" alt="${n}"></a>
             
                <ul class="info-list">
                <li class="info-item"> <h3 class="infoTitle">Likes</h3> <p class="infoTxt">${a}</p></li>
                <li class="info-item"><h3 class="infoTitle">Views</h3> <p class="infoTxt">${c}</p></li>
                <li class="info-item"><h3 class="infoTitle">Comments</h3> <p class="infoTxt">${u}</p></li>
                <li class="info-item"><h3 class="infoTitle">Downloads</h3> <p class="infoTxt">${f}</p></li>
                </ul>
              </li>  
            `).join("");i.innerHTML=s,new m(".gallery a").refresh()}const d=document.querySelector(".form-input");function g(r){r.preventDefault();const i=r.target.elements["input-field"].value.trim(),s=document.querySelector(".loader-container");if(i)s.style.display="flex",h(i).then(e=>(s.style.display="none",p(e))).catch(e=>console.error(e)).finally(()=>{r.target.reset()});else{l.show({message:"Sorry, you 4goat necessery information"});return}}d.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
