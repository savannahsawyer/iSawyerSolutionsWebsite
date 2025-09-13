document.addEventListener('DOMContentLoaded', function(){
  // Simple nav handlers for static pages
  document.querySelectorAll('.nav button.link').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const href = btn.getAttribute('data-href');
      if(href) window.location.href = href;
    });
  });

  // Basic contact form handler (no backend) — show a thank-you message
  const form = document.querySelector('form.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(()=>{
        btn.textContent = 'Send';
        btn.disabled = false;
        alert('Thanks — your message was queued (static demo).');
        form.reset();
      }, 800);
    });
  }
});
