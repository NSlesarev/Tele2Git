(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();const m=document.querySelector(".promo_button"),u=document.querySelector(".mod"),v=document.querySelector(".img-cross"),f=document.querySelector(".header_city"),r=document.querySelector(".city-desctop"),g=document.querySelector(".header_city_city"),y=document.querySelector(".header_city"),s=document.querySelector(".city-mobile"),L=document.querySelector(".header_city_city"),d=document.querySelector(".header-bar"),p=document.querySelector(".header-bar__options__yes"),h=document.querySelector(".header-bar__options__change"),l=document.querySelector(".background-color-modal");setTimeout(()=>{d.classList.toggle("visible"),l.classList.add("visible")},150);p.addEventListener("click",()=>{d.classList.toggle("visible"),l.classList.remove("visible"),r.remove("visible")});h.addEventListener("click",()=>{d.classList.toggle("visible"),l.classList.remove("visible")});f.addEventListener("click",()=>{r.classList.toggle("visible")});r.onclick=function(o){r.classList.remove("visible"),g.innerHTML=o.target.innerHTML};y.addEventListener("click",()=>{s.classList.toggle("visible")});s.onclick=function(o){s.classList.remove("visible"),L.innerHTML=o.target.innerHTML};document.addEventListener("DOMContentLoaded",function(){let o=document.getElementById("phoneD");o.addEventListener("input",function(t){let e=t.target.value.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);t.target.value=e[2]?"+7 ("+e[2]+(e[3]?") "+e[3]:"")+(e[4]?"-"+e[4]:"")+(e[5]?"-"+e[5]:""):e[1]}),o.addEventListener("focus",function(t){t.target.value.startsWith("+7")||(t.target.value="+7")})});document.addEventListener("DOMContentLoaded",function(){let o=document.getElementById("phonem");o.addEventListener("input",function(t){let e=t.target.value.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);t.target.value=e[2]?"+7 ("+e[2]+(e[3]?") "+e[3]:"")+(e[4]?"-"+e[4]:"")+(e[5]?"-"+e[5]:""):e[1]}),o.addEventListener("focus",function(t){t.target.value.startsWith("+7")||(t.target.value="+7")})});document.addEventListener("DOMContentLoaded",function(){let o=document.getElementById("phone");o.addEventListener("input",function(t){let e=t.target.value.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);t.target.value=e[2]?"+7 ("+e[2]+(e[3]?") "+e[3]:"")+(e[4]?"-"+e[4]:"")+(e[5]?"-"+e[5]:""):e[1]}),o.addEventListener("focus",function(t){t.target.value.startsWith("+7")||(t.target.value="+7")})});m.addEventListener("click",function(){u.classList.add("visible")});v.addEventListener("click",function(){u.classList.remove("visible")});