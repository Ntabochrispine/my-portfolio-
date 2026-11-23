const toggle=document.getElementById("mobileToggle"),sidebar=document.getElementById("sidebar");
toggle.addEventListener("click",()=>sidebar.classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>sidebar.classList.remove("open")));

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".nav-link");
const updateNav=()=>{let current="home";sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current))};
window.addEventListener("scroll",updateNav); updateNav();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active")); btn.classList.add("active");
 const filter=btn.dataset.filter;
 document.querySelectorAll(".project-card").forEach(card=>card.classList.toggle("hide",filter!=="all"&&card.dataset.category!==filter));
}));

document.getElementById("topBtn").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 document.getElementById("formMessage").textContent="Thanks! This form is not ready we are working on it.";
 e.target.reset();
});
