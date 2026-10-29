/* Order-at-table demo. Orders sync to kitchen.html via localStorage + BroadcastChannel. */
(function(){
const OK='harbord-orders',MY='harbord-my-orders',CART='harbord-cart';
const bc='BroadcastChannel' in window?new BroadcastChannel('harbord-orders'):null;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const money=n=>'$'+(Math.round(n*100)/100).toFixed(2).replace(/\.00$/,'');
const params=new URLSearchParams(location.search);
let table=(params.get('table')||'').replace(/[^0-9A-Za-z]/g,'').slice(0,4);
window.priceOpts=function(p){
  const parts=String(p).split('/').map(s=>s.trim());const out=[];let last='';
  for(const s of parts){const m=s.match(/^(.*?)\$(\d+(?:\.\d+)?)$/);if(!m)return [];let l=m[1].trim();
    if(!l&&last&&out.length){l=out.length===1&&/glass/i.test(last)?'Large glass':last+' (large)'}
    out.push({label:l,amt:+m[2]});if(l)last=l}
  return out};
const extraOpt=e=>{const m=String(e||'').match(/^\+\s*(.*?)\s*\$(\d+)$/);return m?{label:m[1].replace(/^./,c=>c.toUpperCase()),amt:+m[2]}:null};
const allOrders=()=>{try{return JSON.parse(localStorage.getItem(OK)||'[]')}catch(e){return[]}};
const saveOrders=o=>{localStorage.setItem(OK,JSON.stringify(o));bc&&bc.postMessage({t:'orders'})};
let cart=[];try{cart=JSON.parse(sessionStorage.getItem(CART)||'[]')}catch(e){}
const saveCart=()=>{sessionStorage.setItem(CART,JSON.stringify(cart));bar()};
function findItem(id){if(typeof DATA==="undefined"||!DATA)return null;for(const m of DATA.menus)for(const s of m.sections)for(const i of s.items)if(i.id===id)return i}
const isSold=id=>{try{const s=new Set(JSON.parse(localStorage.getItem('harbord-soldout')||'[]'));return s.has(id)||s.has(id.replace(/^bombies-/,''))}catch(e){return false}};
const root=document.getElementById('order-root');
root.innerHTML=`<div class="cartbar" id="cartbar"><span class="ct" id="ctxt"></span><button class="hd" id="viewcart">View order</button></div>
<div class="track" id="track" role="button" tabindex="0"></div><div class="scrim" id="scrim"></div>
<div class="sheet" id="sheet" role="dialog" aria-modal="true" aria-label="Order"><div class="grab"></div><button class="x" id="x" aria-label="Close">×</button><div id="sheetbody"></div></div>`;
function openSheet(html){$('#sheetbody').innerHTML=html;$('#sheet').classList.add('show');$('#scrim').classList.add('show');$('#sheet').scrollTop=0}
function closeSheet(){$('#sheet').classList.remove('show');$('#scrim').classList.remove('show')}
$('#x').onclick=closeSheet;$('#scrim').onclick=closeSheet;
function bar(){const n=cart.reduce((a,c)=>a+c.qty,0),t=cart.reduce((a,c)=>a+c.qty*c.unit,0);
  $('#ctxt').innerHTML=`${n} item${n===1?'':'s'}${table?' · Table '+esc(table):''}<b>${money(t)}</b>`;$('#cartbar').classList.toggle('show',n>0);track()}
function track(){const mine=myOrders().filter(o=>o.status!=='delivered');const t=$('#track');
  if(!mine.length||cart.length){t.classList.remove('show');return}const o=mine[mine.length-1];
  t.textContent=`Order #${o.no} · ${statusLabel(o)} · Tap for live status`;t.classList.add('show');t.onclick=()=>showStatus(o.id)}
const myOrders=()=>{let ids=[];try{ids=JSON.parse(localStorage.getItem(MY)||'[]')}catch(e){}return allOrders().filter(o=>ids.includes(o.id))};
const statusLabel=o=>({received:'Received',preparing:'Preparing',ready:'On its way to table '+o.table,delivered:'Delivered'}[o.status]);
/* item sheet */
function itemSheet(id){const it=findItem(id);if(!it||isSold(id))return;const po=priceOpts(it.price),ex=extraOpt(it.extra);
  const mods=(it.options||[]).map(o=>({label:'Make it '+({'GF option':'gluten free','DF option':'dairy free','VG option':'vegan'}[o]),amt:0}));
  if(ex)mods.unshift(ex);
  openSheet(`<h3 class="hd">${esc(it.name)}</h3>${it.desc?`<p class="sd">${esc(it.desc)}</p>`:''}
  ${po.length>1?`<div class="opt-h hd">Choose</div>${po.map((p,i)=>`<label class="opt"><input type="radio" name="po" value="${i}" ${i?'':'checked'}><span>${esc(p.label)}</span><span>${money(p.amt)}</span></label>`).join('')}`:''}
  ${mods.length?`<div class="opt-h hd">Make it yours</div>${mods.map((m,i)=>`<label class="opt"><input type="checkbox" name="mod" value="${i}"><span>${esc(m.label)}</span><span>${m.amt?'+'+money(m.amt):''}</span></label>`).join('')}`:''}
  <div class="opt-h hd">Notes for the team</div><textarea id="note" rows="2" maxlength="140" placeholder="e.g. no chilli, sauce on the side"></textarea>
  <div class="qtyrow"><div class="qty"><button id="qm" aria-label="Fewer">−</button><span id="qn">1</span><button id="qp" aria-label="More">+</button></div><button class="big hd" id="addit"><span>Add to order</span><span id="ap"></span></button></div>`);
  let q=1;const calc=()=>{const sel=document.querySelector('input[name=po]:checked');const base=po[sel?+sel.value:0].amt;
    const m=[...document.querySelectorAll('input[name=mod]:checked')].reduce((a,c)=>a+mods[+c.value].amt,0);$('#ap').textContent=money((base+m)*q);return base+m};
  $('#sheetbody').oninput=calc;$('#qm').onclick=()=>{q=Math.max(1,q-1);$('#qn').textContent=q;calc()};$('#qp').onclick=()=>{q=Math.min(20,q+1);$('#qn').textContent=q;calc()};calc();
  $('#addit').onclick=()=>{const sel=document.querySelector('input[name=po]:checked');const unit=calc();
    cart.push({id,name:it.name,opt:po.length>1?po[+sel.value].label:'',mods:[...document.querySelectorAll('input[name=mod]:checked')].map(c=>mods[+c.value].label),note:$('#note').value.trim(),qty:q,unit});
    saveCart();closeSheet();window.toast&&toast(`${it.name} added`)}}
/* cart */
function cartSheet(){if(!cart.length){closeSheet();return}const t=cart.reduce((a,c)=>a+c.qty*c.unit,0);const sold=cart.filter(c=>isSold(c.id));
  openSheet(`<h3 class="hd">Your order</h3><p class="sd">${table?'Delivered to table '+esc(table):'Tell us your table number below.'}</p>
  ${sold.length?`<div class="sold-warn">${sold.map(s=>esc(s.name)).join(', ')} just sold out. Please remove ${sold.length>1?'them':'it'} to continue.</div>`:''}
  ${cart.map((c,i)=>`<div class="line"><span class="q">${c.qty}×</span><div><div>${esc(c.name)}${c.opt?' · '+esc(c.opt):''}</div>${c.mods.length||c.note?`<div class="m">${esc([...c.mods,c.note].filter(Boolean).join(' · '))}</div>`:''}<button class="rm" data-rm="${i}">Remove</button></div><span class="p">${money(c.qty*c.unit)}</span></div>`).join('')}
  ${table?'':'<div class="opt-h hd">Table number</div><input type="number" id="tbl" min="1" max="99" inputmode="numeric" placeholder="Number on your table card">'}
  <div class="tot"><span>Total</span><span>${money(t)}</span></div>
  <button class="apay" id="apay" ${sold.length?'disabled':''}><svg width="16" height="19" viewBox="0 0 16 19" fill="#fff" aria-hidden="true"><path d="M13.2 10.1c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8C3.8 4.9 2.3 5.8 1.5 7.2c-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.8.8 3 .8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.8-1.1-2.8-4.1zM10.9 3.2c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3z"/></svg>Pay</button>
  <button class="cpay hd" id="cpay" ${sold.length?'disabled':''}>Pay by card</button>
  <p class="demo-note">Demo checkout. No payment is taken. Live, this charges through your venue's payment provider and lands in your POS.</p>`);
  document.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.rm,1);saveCart();cartSheet()});
  const pay=method=>{if(!table){const v=($('#tbl').value||'').trim();if(!v){$('#tbl').focus();$('#tbl').style.borderColor='var(--terra)';return}table=v}
    if(cart.some(c=>isSold(c.id))){cartSheet();return}
    const btn=method==='Apple Pay'?$('#apay'):$('#cpay');btn.disabled=true;btn.textContent='Processing…';
    setTimeout(()=>{const all=allOrders();const no=101+all.length;const o={id:'o'+Date.now(),no,table,items:cart.map(({name,opt,mods,note,qty,unit})=>({name,opt,mods,note,qty,unit})),total:t,pay:method,status:'received',ts:Date.now()};
      all.push(o);saveOrders(all);let ids=[];try{ids=JSON.parse(localStorage.getItem(MY)||'[]')}catch(e){}ids.push(o.id);localStorage.setItem(MY,JSON.stringify(ids));
      cart=[];saveCart();showStatus(o.id)},900)};
  $('#apay').onclick=()=>pay('Apple Pay');$('#cpay').onclick=()=>pay('Card')}
/* status */
let watching=null;
function showStatus(id){watching=id;const o=allOrders().find(x=>x.id===id);if(!o)return;
  const st=['received','preparing','ready','delivered'],k=st.indexOf(o.status);
  const steps=[['Received','The team has your order'],['Preparing','Fresh off the pass shortly'],['On its way to table '+o.table,'Look out for us'],['Enjoy','Delivered to your table']];
  openSheet(`<div class="status"><div class="sun" aria-hidden="true"></div><div class="ono hd">Order #${o.no} · Table ${esc(o.table)}</div><h3 class="hd">${o.status==='delivered'?'Enjoy!':'Order placed'}</h3><p class="sd">Paid ${money(o.total)} by ${esc(o.pay)} (demo)</p></div>
  <ol class="steps">${steps.map((s,i)=>`<li class="${i<k||(i===k&&o.status==='delivered')?'done':i===k?'now':''}"><div><b>${s[0]}</b><small>${s[1]}</small></div></li>`).join('')}</ol>
  ${o.items.map(c=>`<div class="line"><span class="q">${c.qty}×</span><div>${esc(c.name)}${c.opt?' · '+esc(c.opt):''}</div><span class="p">${money(c.qty*c.unit)}</span></div>`).join('')}
  <button class="big hd" id="more" style="margin-top:18px;width:100%;justify-content:center">Order something else</button>`);
  $('#more').onclick=()=>{watching=null;closeSheet();track()}}
function sync(){if(watching&&$('#sheet').classList.contains('show'))showStatus(watching);track()}
bc&&bc.addEventListener('message',sync);addEventListener('storage',e=>{if(e.key===OK)sync()});
$('#x').addEventListener('click',()=>{watching=null;track()});
$('#viewcart').onclick=cartSheet;
document.addEventListener('click',e=>{const a=e.target.closest('.add');if(a&&!a.disabled)itemSheet(a.dataset.add)});
window.onSoldChange=()=>{if($('#sheet').classList.contains('show')&&$('#apay'))cartSheet()};
window.addEventListener('load',()=>{if(table){const h=document.querySelector('.hero .wrap');h&&h.insertAdjacentHTML('beforeend',`<div class="tablepill hd">Ordering for table ${esc(table)}</div>`)}bar()});
})();
