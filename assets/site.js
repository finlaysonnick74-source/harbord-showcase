(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(window.gsap&&!reduce){
    if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero h1, .ih h1, .ih .num',{y:40,opacity:0,duration:1,ease:'power3.out',stagger:.08});
    gsap.utils.toArray('[data-reveal]').forEach(el=>{gsap.from(el,{y:36,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}})});
  }
  document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
  // Menu: the no-JS fallback is a link to #mmenu (shown with :target); with JS it becomes a real disclosure button.
  const link=document.querySelector('[data-menu]'),menu=document.getElementById('mmenu');
  if(link&&menu){
    const btn=document.createElement('button');btn.type='button';btn.className=link.className;btn.textContent='Menu';
    btn.setAttribute('aria-controls','mmenu');btn.setAttribute('aria-expanded','false');link.replaceWith(btn);
    const closeL=menu.querySelector('[data-menu-close]');const close=document.createElement('button');close.type='button';close.className=closeL.className;close.textContent=closeL.textContent;closeL.replaceWith(close);
    const links=()=>[...menu.querySelectorAll('a,button')];
    const set=open=>{menu.classList.toggle('is-open',open);btn.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open);
      if(open){menu.removeAttribute('inert');links()[0].focus()}else{menu.setAttribute('inert','')}};
    menu.setAttribute('inert','');
    btn.addEventListener('click',()=>set(!menu.classList.contains('is-open')));
    close.addEventListener('click',()=>{set(false);btn.focus()});
    menu.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('is-open')){set(false);btn.focus()}
      if(e.key==='Tab'&&menu.classList.contains('is-open')){const l=links(),f=l[0],z=l[l.length-1];if(e.shiftKey&&document.activeElement===f){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();f.focus()}}});
    matchMedia('(min-width: 821px)').addEventListener('change',m=>{if(m.matches)set(false)});
  }
  // Pause control for decorative motion (WCAG 2.2.2)
  document.querySelectorAll('.tick-pause').forEach(b=>{if(reduce){b.setAttribute('aria-pressed','true');b.textContent='Play motion';document.body.classList.add('paused')}
    b.addEventListener('click',()=>{const p=!document.body.classList.contains('paused');document.body.classList.toggle('paused',p);b.setAttribute('aria-pressed',String(p));b.textContent=p?'Play motion':'Pause motion'})});
})();
