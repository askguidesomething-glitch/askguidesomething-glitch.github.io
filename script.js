const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("#site-nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll("#site-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelectorAll("[data-placeholder]").forEach(a=>a.addEventListener("click",e=>{
  e.preventDefault();
  alert("This project page will be added when we replace this starter card with your real project evidence.");
}));
