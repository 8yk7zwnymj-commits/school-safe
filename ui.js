(()=>{
  const header=document.querySelector('.topbar');
  const nav=header?.querySelector('.nav');
  if(header&&nav){
    let btn=header.querySelector('.mobile-menu-btn');
    if(!btn){
      btn=document.createElement('button');
      btn.className='mobile-menu-btn';
      btn.type='button';
      btn.setAttribute('aria-label','เปิดเมนู');
      btn.setAttribute('aria-expanded','false');
      btn.innerHTML='<span></span><span></span><span></span>';
      const chip=header.querySelector('.user-chip');
      header.insertBefore(btn,chip||null);
    }
    const close=()=>{nav.classList.remove('open');btn.classList.remove('open');btn.setAttribute('aria-expanded','false');document.body.classList.remove('nav-open')};
    btn.addEventListener('click',()=>{
      const willOpen=!nav.classList.contains('open');
      if(willOpen){nav.classList.add('open');btn.classList.add('open');btn.setAttribute('aria-expanded','true');document.body.classList.add('nav-open')}
      else close();
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    window.addEventListener('resize',()=>{if(innerWidth>980)close()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }

  // Accessible tap feedback for cards that behave like buttons.
  document.querySelectorAll('.route-level-card,.wow-action,.journey-node').forEach(el=>{
    el.addEventListener('pointerdown',()=>el.classList.add('tap-active'));
    ['pointerup','pointercancel','pointerleave'].forEach(ev=>el.addEventListener(ev,()=>el.classList.remove('tap-active')));
  });
})();
