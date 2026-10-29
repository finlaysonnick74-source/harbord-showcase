(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(window.gsap&&!reduce){
    if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero h1, .ih h1, .ih .num',{y:40,opacity:0,duration:1,ease:'power3.out',stagger:.08});
    gsap.utils.toArray('[data-reveal]').forEach(el=>{gsap.from(el,{y:36,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}})});
  }
  document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
})();
