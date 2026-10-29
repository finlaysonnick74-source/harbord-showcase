const SOLD_KEY='harbord-soldout';
const DIET=['V','VG','GF','DF'];
let DATA,active='food',filters=new Set();
const $=s=>document.querySelector(s);
const sold=()=>{try{return new Set(JSON.parse(localStorage.getItem(SOLD_KEY)||'[]'))}catch(e){return new Set()}};
const isOut=(so,id)=>so.has(id)||so.has(id.replace(/^bombies-/,''));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function matches(it){for(const f of filters){if(!(it.diet||[]).includes(f)&&!(it.options||[]).includes(f+' option'))return false}return true}
function itemHTML(it,out){
  const t=[...(it.diet||[]).map(d=>`<span class="tag">${d}</span>`),...(it.options||[]).map(o=>`<span class="tag o" title="Available on request">${o.replace(' option','')} opt</span>`)];
  if(it.origin)t.push(`<span class="tag org">${esc(it.origin)}</span>`);
  if(it.badge)t.push(`<span class="tag org">${esc(it.badge)}</span>`);
  const alg=it.allergens?`<button class="alg" aria-expanded="false" data-alg="${it.id}">Allergens</button>`:'';
  const box=it.allergens?`<div class="algbox" id="alg-${it.id}">${it.allergens.length?'<strong>Contains:</strong> '+it.allergens.join(', '):'No major allergens listed.'} Please tell our team about any allergy before ordering.</div>`:'';
  return `<article class="item${out?' out':''}" data-id="${it.id}"><div class="top"><h3 class="hd">${esc(it.name)}<span class="soldout">Sold out</span></h3><div class="price">${esc(it.price)}</div></div>${it.desc?`<p class="desc">${esc(it.desc)}</p>`:''}${it.extra?`<p class="extra">${esc(it.extra)}</p>`:''}${t.length||alg?`<div class="tags">${t.join('')}${alg}</div>`:''}${box}${window.priceOpts&&priceOpts(it.price).length?`<button class="add hd" data-add="${it.id}" ${out?'disabled':''}>${out?'Sold out':'Add'}</button>`:''}</article>`;
}
function render(){if(!DATA)return;
  const m=DATA.menus.find(x=>x.id===active),so=sold();let count=0;
  $('#tabs').innerHTML=DATA.menus.map(x=>`<button class="tab" role="tab" aria-selected="${x.id===active}" data-tab="${x.id}">${x.label}</button>`).join('');
  const secs=m.sections.map(s=>({...s,items:s.items.filter(matches)})).filter(s=>s.items.length);
  $('#subtabs').innerHTML=secs.length>1?secs.map((s,i)=>`<button class="sub${i?'':' on'}" data-sec="${s.id}">${esc(s.title)}</button>`).join(''):'';
  $('#subtabs').style.display=secs.length>1?'flex':'none';
  $('#menu').innerHTML=secs.map(s=>{count+=s.items.length;return `<section class="sec" id="${s.id}"><h2 class="hd">${esc(s.title)}</h2>${s.note?`<p class="note">${esc(s.note)}</p>`:''}<div class="grid">${s.items.map(i=>itemHTML(i,isOut(so,i.id))).join('')}</div></section>`}).join('');
  $('#empty').style.display=count?'none':'block';
  document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',filters.has(c.dataset.f)));
  $('.clear').style.visibility=filters.size?'visible':'hidden';
  spy();
}
function applySold(){const so=sold();document.querySelectorAll('.item').forEach(e=>{const o=isOut(so,e.dataset.id);e.classList.toggle('out',o);const b=e.querySelector('.add');if(b){b.disabled=o;b.textContent=o?'Sold out':'Add'}});window.onSoldChange&&onSoldChange()}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2200)}
function spy(){const subs=[...document.querySelectorAll('.sub')];if(!subs.length)return;const off=$('.bar').offsetHeight+20;let cur=subs[0].dataset.sec;
  document.querySelectorAll('.sec').forEach(s=>{if(s.getBoundingClientRect().top-off<=0)cur=s.id});
  subs.forEach(b=>{const on=b.dataset.sec===cur;if(on&&!b.classList.contains('on'))b.scrollIntoView({inline:'center',block:'nearest'});b.classList.toggle('on',on)})}
document.addEventListener('click',e=>{
  const tab=e.target.closest('.tab');if(tab){active=tab.dataset.tab;history.replaceState(null,'','#'+active);render();window.scrollTo({top:$('.hero').offsetHeight,behavior:'smooth'});tab.scrollIntoView({inline:'center',block:'nearest'});return}
  const sub=e.target.closest('.sub');if(sub){const s=document.getElementById(sub.dataset.sec);window.scrollTo({top:s.getBoundingClientRect().top+scrollY-$('.bar').offsetHeight+4,behavior:'smooth'});return}
  const chip=e.target.closest('.chip');if(chip){const f=chip.dataset.f;filters.has(f)?filters.delete(f):filters.add(f);render();return}
  if(e.target.closest('.clear')){filters.clear();render();return}
  const a=e.target.closest('.alg');if(a){const b=document.getElementById('alg-'+a.dataset.alg);const on=b.classList.toggle('show');a.setAttribute('aria-expanded',on)}
});
addEventListener('scroll',()=>requestAnimationFrame(spy),{passive:true});
addEventListener('storage',e=>{if(e.key===SOLD_KEY){applySold();toast('Menu updated')}});
setInterval(applySold,4000);
const fl=$('#filters');fl.insertAdjacentHTML('beforeend',DIET.map(d=>`<button class="chip hd" data-f="${d}" aria-pressed="false" title="${{V:'Vegetarian',VG:'Vegan',GF:'Gluten free',DF:'Dairy free'}[d]}">${d}</button>`).join('')+'<button class="clear">Clear</button>');
function specials(d){try{const s=JSON.parse(localStorage.getItem('harbord-specials')||'null');if(s&&s.items&&s.items.length){const f=d.menus.find(m=>m.id==='food');f.sections=f.sections.filter(x=>x.id!=='todays-specials');f.sections.unshift({id:'todays-specials',title:"Today's Specials",note:s.note||'Fresh from the specials board.',items:s.items})}}catch(e){}}
addEventListener('storage',e=>{if(e.key==='harbord-specials'&&DATA){specials(DATA);render();toast('Specials updated')}});
fetch('menu.json',{cache:'no-cache'}).then(r=>r.json()).then(d=>{DATA=d;specials(d);const h=location.hash.slice(1);if(d.menus.some(m=>m.id===h))active=h;render()});
