(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('.nav-links');
  let savedTheme;
  try { savedTheme = localStorage.getItem('mb-theme'); } catch (_) {}
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  const themeIcon = () => { if(themeButton) {
    const light = root.dataset.theme === 'light';
    themeButton.innerHTML = light ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.9 13.1A9 9 0 0 1 10.9 3.1 9 9 0 1 0 20.9 13.1z"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  }};
  themeIcon();
  themeButton?.addEventListener('click', () => { root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light'; try { localStorage.setItem('mb-theme',root.dataset.theme); } catch (_) {} themeIcon(); });
  menuButton?.addEventListener('click', () => { const next = menu.dataset.open !== 'true'; menu.dataset.open = String(next); menuButton.setAttribute('aria-expanded',String(next)); });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click',() => {menu.dataset.open='false';menuButton?.setAttribute('aria-expanded','false')}));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  if('IntersectionObserver' in window){const observer = new IntersectionObserver(entries=>{entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in-view');observer.unobserve(x.target)}})},{threshold:.07});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));}
  // Abstract phase portrait illustration: not a scientific plot or simulation result.
  const canvas = document.getElementById('orbit-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d',{alpha:true});
  if(!ctx) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width=0,height=0,dpr=1,time=0,visible=true,id=null;
  const pointer={x:0,y:0};
  const resize=()=>{ const rect=canvas.getBoundingClientRect(); dpr=Math.min(window.devicePixelRatio||1,2); width=rect.width;height=rect.height;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0); };
  resize(); window.addEventListener('resize',resize,{passive:true});
  canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();pointer.x=((e.clientX-r.left)/r.width-.5)*2;pointer.y=((e.clientY-r.top)/r.height-.5)*2},{passive:true});
  canvas.addEventListener('pointerleave',()=>{pointer.x=0;pointer.y=0});
  const portrait=(t,k)=>{const radius=Math.min(width,height)*(.32+k*.043);const a= t*1.0+k*.46;const b= t*1.58+k*.23;const rot=.27;let x=Math.cos(a)*radius*.78+Math.cos(2.6*a)*radius*.14;let y=Math.sin(b)*radius*.57+Math.sin(2.1*b)*radius*.11;const xr=x*Math.cos(rot)-y*Math.sin(rot),yr=x*Math.sin(rot)+y*Math.cos(rot);return [width*.50+xr+pointer.x*7,height*.52+yr+pointer.y*7]};
  function render(){ctx.clearRect(0,0,width,height);const light=root.dataset.theme==='light';
    ctx.lineWidth=1;ctx.strokeStyle=light?'rgba(50,90,150,.13)':'rgba(133,163,218,.12)';
    ctx.beginPath();ctx.moveTo(width*.5,48);ctx.lineTo(width*.5,height-48);ctx.moveTo(48,height*.52);ctx.lineTo(width-48,height*.52);ctx.stroke();
    for(let k=0;k<3;k++){
      const g=ctx.createLinearGradient(0,0,width,height);g.addColorStop(0,k%2?'rgba(157,166,255,.67)':'rgba(104,218,245,.69)');g.addColorStop(1,k%2?'rgba(112,221,249,.78)':'rgba(179,167,255,.76)');ctx.strokeStyle=g;ctx.lineWidth=1.25;ctx.beginPath();
      for(let j=0;j<=480;j++){const [x,y]=portrait(j*Math.PI*10/480+k*.32,k);j===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.stroke();
      for(let m=0;m<5;m++){let t=(time*.30+m*1.92+k*.85);let [x,y]=portrait(t,k);ctx.fillStyle=k%2?'#c5baff':'#7de5ff';ctx.beginPath();ctx.arc(x,y,m===0?2.9:1.65,0,Math.PI*2);ctx.fill()}
    }
    ctx.font='10px monospace';ctx.fillStyle=light?'rgba(69,89,125,.52)':'rgba(170,192,228,.49)';ctx.fillText('q₁',width-39,height*.52-10);ctx.fillText('p₁',width*.50+8,45);
  }
  function tick(){time+=.008;render();if(!prefersReduced && visible) id=requestAnimationFrame(tick)}
  if('IntersectionObserver' in window){new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible&&!id){tick()}else if(!visible&&id){cancelAnimationFrame(id);id=null;}},{threshold:.01}).observe(canvas);}
  if(prefersReduced){render()}else{tick()}
})();
