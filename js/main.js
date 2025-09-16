document.addEventListener('DOMContentLoaded', function(){
  // Simple nav handlers for static pages and CTAs
  document.querySelectorAll('button.link').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const href = btn.getAttribute('data-href');
      if(href) window.location.href = href;
    });
  });

  // Add floating logo at bottom-right on desktop; keep it responsive to resizes
  try{
    const mq = window.matchMedia ? window.matchMedia('(min-width: 900px)') : null;
    function ensureFloatingLogo(){
      const existing = document.querySelector('.floating-logo');
      if(mq && mq.matches){
        if(!existing){
          const img = document.createElement('img');
          img.src = '/public/logo.png?v=20250916-3';
          img.alt = 'iSawyer Solutions Logo';
          img.className = 'floating-logo';
          img.loading = 'lazy';
          document.body.appendChild(img);
        }
      } else if(existing){
        existing.remove();
      }
    }
    ensureFloatingLogo();
    if(mq){
      if(typeof mq.addEventListener === 'function'){
        mq.addEventListener('change', ensureFloatingLogo);
      } else if(typeof mq.addListener === 'function'){
        mq.addListener(ensureFloatingLogo); // Safari fallback
      }
    }
  }catch(e){/* ignore */}

  // Highlight the active nav link (desktop) with normalized paths
  try{
    function normalize(p){
      if(!p) return '/index';
      p = p.split('?')[0].split('#')[0];
      p = p.replace(/\/$/, '');
      if(p === '' || p === '/') return '/index';
      // remove .html extension
      p = p.replace(/\.html$/i, '');
      return p;
    }
    const current = normalize(window.location.pathname);
    const navBtns = document.querySelectorAll('.nav .links .link');
    navBtns.forEach(b=>{
      const href = b.getAttribute('data-href');
      if(!href) return;
      const target = normalize(href);
      if(target === current){
        b.classList.add('active');
      }
    });
  }catch(e){/* ignore */}

  // No video fade logic: show the video directly (preload=auto used in index.html)

  // Basic contact form handler (no backend) — show a thank-you message
  const form = document.querySelector('form.contact-form');
  if(form){
    // setup custom multiselect if present
    const multi = document.getElementById('subjectMultiselect');
    if(multi){
      const toggle = multi.querySelector('.multiselect-toggle');
      const options = multi.querySelector('.multiselect-options');
      const placeholder = multi.querySelector('.multiselect-placeholder');
      // parse query param to preselect
      try{
        const params = new URLSearchParams(window.location.search);
        const pre = params.get('subject');
        if(pre){
          const checkboxes = options.querySelectorAll('input[type=checkbox]');
          checkboxes.forEach(cb=>{
            if(cb.value.toLowerCase() === pre.toLowerCase()) cb.checked = true;
          });
          // update placeholder and open dropdown to show selection
          updatePlaceholder();
          multi.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
          // set hidden input value if present
          const hidden = document.getElementById('subject');
          if(hidden){
            const chosen = Array.from(options.querySelectorAll('input[type=checkbox]')).filter(c=>c.checked).map(c=>c.value);
            if(chosen.length) hidden.value = chosen.join(', ');
          }
        }
      }catch(e){/* ignore */}
      toggle.addEventListener('click', ()=>{
        multi.classList.toggle('open');
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', (!expanded).toString());
      });
      // close when clicking outside
      document.addEventListener('click', (e)=>{
        if(!multi.contains(e.target)){
          multi.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
      // update placeholder when checkboxes change
      const checkboxes = options.querySelectorAll('input[type=checkbox]');
      function updatePlaceholder(){
        const checked = Array.from(checkboxes).filter(c=>c.checked).map(c=>c.value);
  placeholder.textContent = checked.length ? checked.join(', ') : 'Choose One or More Topic(s)…';
      }
      checkboxes.forEach(cb=>cb.addEventListener('change', updatePlaceholder));
  updatePlaceholder();
    }
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(()=>{
        btn.textContent = 'Send';
        btn.disabled = false;
        // gather selected subjects from multiselect or select
        const hidden = form.querySelector('#subject');
        let subjectVal = 'General';
        if(hidden){
          const multiChecks = document.querySelectorAll('#subjectMultiselect input[type=checkbox]');
          const chosen = Array.from(multiChecks).filter(c=>c.checked).map(c=>c.value);
          if(chosen.length) subjectVal = chosen.join(', ');
          hidden.value = subjectVal;
        } else {
          const sel = form.querySelector('select[name="subject"]');
          if(sel) subjectVal = sel.value;
        }
        alert('Thanks — your message was queued (static demo). Subject: ' + subjectVal);
        form.reset();
        // reset multiselect placeholder
        if(document.getElementById('subjectMultiselect')){
          document.querySelectorAll('#subjectMultiselect input[type=checkbox]').forEach(cb=>cb.checked=false);
          document.querySelector('#subjectMultiselect .multiselect-placeholder').textContent = 'Choose One or More Topic(s)…';
        }
      }, 800);
    });
  }
});

// Mobile hamburger: inject a hamburger button and mobile menu (mobile only)
(function setupMobileHamburger(){
  if (window.matchMedia && !window.matchMedia('(max-width:520px)').matches) return;
  const nav = document.querySelector('.nav');
  if(!nav) return;

  // Create hamburger button
  const hamb = document.createElement('button');
  hamb.className = 'hamburger';
  hamb.setAttribute('aria-label','Open menu');
  hamb.setAttribute('aria-expanded','false');
  hamb.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';

  // Create mobile menu container
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.id = 'mobileMenu';
  menu.setAttribute('role','menu');
  hamb.setAttribute('aria-controls','mobileMenu');

  // Clone nav links into the mobile menu
  const links = nav.querySelector('.links');
  if(links){
    links.querySelectorAll('.link').forEach(btn=>{
      const copy = document.createElement('button');
      copy.className = 'link';
      copy.textContent = btn.textContent;
      const href = btn.getAttribute('data-href');
      if(href) copy.setAttribute('data-href', href);
      menu.appendChild(copy);
    });
  }

  hamb.addEventListener('click', function(e){
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    hamb.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu on outside click
  document.addEventListener('click', function(ev){
    if(!menu.contains(ev.target) && !hamb.contains(ev.target)){
      menu.classList.remove('open');
      hamb.setAttribute('aria-expanded','false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(ev){
    if(ev.key === 'Escape'){
      menu.classList.remove('open');
      hamb.setAttribute('aria-expanded','false');
    }
  });

  // Handle clicks on mobile menu items
  menu.addEventListener('click', function(ev){
    const btn = ev.target.closest('.link');
    if(btn){
      const href = btn.getAttribute('data-href');
      if(href){
        menu.classList.remove('open');
        hamb.setAttribute('aria-expanded','false');
        window.location.href = href;
      }
    }
  });

  // Insert hamburger and menu into nav
  nav.appendChild(hamb);
  document.body.appendChild(menu);

  // After injecting, also highlight active in mobile menu (normalized)
  try{
    function normalize(p){
      if(!p) return '/index';
      p = p.split('?')[0].split('#')[0];
      p = p.replace(/\/$/, '');
      if(p === '' || p === '/') return '/index';
      p = p.replace(/\.html$/i, '');
      return p;
    }
    const current = normalize(window.location.pathname);
    menu.querySelectorAll('.link').forEach(b=>{
      const href = b.getAttribute('data-href');
      if(!href) return;
      const target = normalize(href);
      if(target === current) b.classList.add('active');
    });
  }catch(e){/* ignore */}
})();
