document.addEventListener('DOMContentLoaded', function(){
  // Simple nav handlers for static pages and CTAs
  document.querySelectorAll('button.link').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const href = btn.getAttribute('data-href');
      if(href) window.location.href = href;
    });
  });

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
