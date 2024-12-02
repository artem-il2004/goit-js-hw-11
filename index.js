import{i as l,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function h(i){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"47392401-769446c280b709c486589ce4f",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}`;return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);if(t)return t.json()}).then(t=>{if(t.hits&&t.hits.length===0)l.show({position:"topRight",iconUrl:"../img/x.svg",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white"});else return t.hits}).catch(t=>console.log(t))}function p(i){const o=document.querySelector(".gallery"),s=i.map(({largeImageURL:e,webformatURL:r,tags:n,likes:a,views:c,comments:u,downloads:f})=>`
            <li class="list-item">

            <a href="${e}" >  <img class="image" src="${r}" alt="${n}"></a>
             
                <ul class="info-list">
                <li class="info-item"> <h3 class="infoTitle">Likes</h3> <p class="infoTxt">${a}</p></li>
                <li class="info-item"><h3 class="infoTitle">Views</h3> <p class="infoTxt">${c}</p></li>
                <li class="info-item"><h3 class="infoTitle">Comments</h3> <p class="infoTxt">${u}</p></li>
                <li class="info-item"><h3 class="infoTitle">Downloads</h3> <p class="infoTxt">${f}</p></li>
                </ul>
              </li>  
            `).join("");o.innerHTML=s,new m(".gallery a").refresh()}const g=document.querySelector(".form-input");function d(i){i.preventDefault();const o=i.target.elements["input-field"].value.trim(),s=document.querySelector(".loader-container"),t=document.querySelector(".gallery");if(o)s.style.display="flex",h(o).then(e=>(s.style.display="none",p(e))).catch(e=>{t.innerHTML="",l.show({message:"Something went wrong"})}).finally(()=>{i.target.reset()});else{l.show({message:"Sorry, you forgot necessery information"});return}}g.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
