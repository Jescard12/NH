/* =========================================================
   Shared site behaviour: language switch, nav, reveal
   ========================================================= */

function getLang(){
  return localStorage.getItem("dnh-lang") || "en";
}

function applyLang(lang){
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.querySelectorAll("[data-ar]").forEach(el=>{
    const val = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
    if(val !== null) el.textContent = val;
  });
  document.querySelectorAll("[data-ar-html]").forEach(el=>{
    const val = lang === "ar" ? el.getAttribute("data-ar-html") : el.getAttribute("data-en-html");
    if(val !== null) el.innerHTML = val;
  });
  document.querySelectorAll(".lang-toggle button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.querySelectorAll("[data-href-ar]").forEach(el=>{
    const val = lang === "ar" ? el.getAttribute("data-href-ar") : el.getAttribute("data-href-en");
    if(val) el.setAttribute("href", val);
  });
  localStorage.setItem("dnh-lang", lang);
  document.body.dispatchEvent(new CustomEvent("langchange", {detail:{lang}}));
}

function setupLangToggle(){
  document.querySelectorAll(".lang-toggle button").forEach(btn=>{
    btn.addEventListener("click", ()=> applyLang(btn.dataset.lang));
  });
}

function setupMobileNav(){
  const burger = document.querySelector(".burger");
  const drawer = document.querySelector(".mobile-drawer");
  const closeX = document.querySelector(".close-x");
  if(!burger || !drawer) return;
  burger.addEventListener("click", ()=> drawer.classList.add("open"));
  closeX && closeX.addEventListener("click", ()=> drawer.classList.remove("open"));
  drawer.addEventListener("click", (e)=>{ if(e.target === drawer) drawer.classList.remove("open"); });
}

function setupReveal(){
  const items = document.querySelectorAll(".pulse-divider");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("in-view"); });
  }, {threshold:.4});
  items.forEach(i=>io.observe(i));
}

function markActiveNav(){
  const page = document.body.dataset.page;
  document.querySelectorAll(".navlinks a, .mobile-drawer a").forEach(a=>{
    if(a.dataset.page === page) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  setupLangToggle();
  setupMobileNav();
  setupReveal();
  markActiveNav();
  applyLang(getLang());
});